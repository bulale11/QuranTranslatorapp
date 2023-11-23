document.addEventListener("DOMContentLoaded", () => {
  const translation_key = "somali_yacob";
  const translation = document.querySelector("#translation");

  // Get Sura Number from Localstorage
  let apiResponse = localStorage.getItem("apiResponse");

  // Send API using Axios
  let url = `https://quranenc.com/api/v1/translation/sura/${translation_key}/${apiResponse}`;

  axios.get(url).then((response) => {
    const res = response.data.result;
    console.log(res);
    res.map((eachAYa) => {
      translation.innerHTML += `
              <div class="quran_container">
              <div class="aya">${eachAYa.aya}</div>
              <p class="ayaArabic"> ${eachAYa.arabic_text} </p>
              <p class="ayaSomali"> ${eachAYa.translation} </p>
              </div>
              
              `;
    });
  });
});
