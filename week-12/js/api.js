// https://digimon-api.vercel.app/api/digimon

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

    console.log(digiData);
  } catch (err) {
    console.warn(err);
  }

  console.log("end of function");
}

getDigimon();
