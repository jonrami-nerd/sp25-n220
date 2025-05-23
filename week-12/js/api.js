// https://digimon-api.vercel.app/api/digimon

const digimonListRef = document.querySelector("#digimon-list");

async function getDigimon() {
  // fetch('https://digimon-api.vercel.app/api/digimons').then(function (digiResp) {
  //    return digiResp.json()
  // }).then((digiData) =>{
  //     console.log(digiData)
  // }).catch(function (err){
  //     console.warn(err)
  // }).finally(() => {
  //     console.log("Fetch complete :D")
  // })

  try {
    const digiResp = await fetch("https://digimon-api.vercel.app/api/digimon");

    const digiData = await digiResp.json();

    digimonListRef.innerHTML = "";

    for (let i = 0; i < digiData.length; i++) {
      const currentDigimon = digiData[i];
      const digimonIsLiked =
        JSON.parse(localStorage.getItem(currentDigimon.name)) || false;
        let likeClass = ""

        if(digimonIsLiked){
            likeClass = "like"
        }

      const newCard = document.createElement("div");
      newCard.classList.add("digimon-card");
      newCard.innerHTML += `
            <div class="digimon-card">
            <img src="${currentDigimon.img}" alt="">
            <h4>${currentDigimon.name}</h4>
            <button class="like">&hearts;</button>

            `;

      newCard.dataset.name = currentDigimon.name;
      newCard.onclick = likeDigimon;

      digimonListRef.appendChild(newCard);
    }
  } catch (err) {
    console.warn(err);
  }

  console.log("end of function");
}

function likeDigimon(e) {
  const digimonName = e.currentTarget.dataset.name;

  console.log(digimonName);

  const isDigimonLiked = JSON.parse(
    localStorage.getItem(digimonName)
  )
  if (isDigimonLiked){
    localStorage.removeItem(digimonName)
  }
  else{
    localStorage.setItem(digimio)
  }

  localStorage.setItem(digimonName, JSON.stringify(true));
}


getDigimon();
