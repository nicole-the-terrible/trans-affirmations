const MTF = [

];

const FTM = [

];

function affForMTF() {
  const joke = MTF[Math.floor(Math.random() * MTF.length)];
  console.log(joke);
}

function affForFTM() {
  const joke = FTM[Math.floor(Math.random() * FTM.length)];
  console.log(joke);
}

module.exports = { affForMTF, affForFTM };


