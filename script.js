let allSuraNames = document.querySelector(".sura-lists");

// Getting ALl sura from the API
let getSuraNames = () => {
  let url = "https://api.alquran.cloud/v1/surah";

  // Sending request using Axios
  axios
    .get(url)
    .then((response) => {
      const data = response.data.data;
      console.log(data);
      data.map((eachSura) => {
        console.log("eachSura", eachSura);
        let suraNumber = eachSura.number;
        let suraName = eachSura.name;
        allSuraNames.innerHTML += `
                <li onclick=handleClick(this.value) class="sura" value="${suraNumber}"> ${suraName}</li>
            `;
      });
    })
    .catch((error) => {
      alert(error);
    });
};

window.addEventListener("load", getSuraNames);
let handleClick = (value) => {
  window.location.href = "showsura.html";
  let surahNumber = value;
  localStorage.setItem("apiResponse", JSON.stringify(surahNumber));
};
