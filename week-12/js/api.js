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

    for(let i = 0; i < digiData.length; i++) {
        const currentDigimon = digiData[i];

        const newCard = document.createElement("div");
        newCard.classList.add("digimon-card");
        newCard.innerHTML += `
            <div class="digimon-card">
            <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/909.png" alt="">
            <h4>Fuecoco</h4>
            <button class="like">&hearts;</button>
            `

            digimonListRef.appendChild(newCard);
    }
  } catch (err) {
    console.warn(err);
  }

  console.log("end of function");
}

getDigimon();
