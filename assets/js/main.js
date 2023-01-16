// capture the forms submit event;pedrovmcosta7@gmail.com
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputWeight = e.target.querySelector("#weight");
  const inputHeight = e.target.querySelector("#height");

  const weightValue = inputWeight.value;
  const heightValue = inputHeight.value;

  const imc = getImc(weightValue, heightValue);
  const imcLevel = getImcLevel(imc);
  const msg = `Seu IMC é ${imc} - ${imcLevel}`;

  setResult(msg, true);
});

function getImcLevel(imc) {
  const level = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  const imcCheck =
    imc > 39.9
      ? level[5]
      : imc >= 35
      ? level[4]
      : imc >= 30
      ? level[3]
      : imc >= 25
      ? level[2]
      : imc > 18.5
      ? level[1]
      : level[0];
  return imcCheck;
}

function getImc(weightValue, heightValue) {
  const imc = weightValue / heightValue ** 2;
  return imc.toFixed(2);
}

function createP() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg) {
  const result = document.querySelector("#result");
  result.innerHTML = "";
  const p = createP();

  p.innerHTML = msg;
  result.appendChild(p);

  return validation;
}
