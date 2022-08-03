//console.log("Iniciando");
//datos
const bill = document.querySelector(".inputMoney");
const numPeople = document.querySelector("#numP");
const custom = document.querySelector(".custom");
const tipAmount = document.querySelector("#tipA");
const tipTotal = document.querySelector("#tipT");
const btnReset = document.querySelector(".btn");
const porcentajes = document.querySelectorAll(".percen");

//Realizar el calculo cuando apretas un boton(Los %)
porcentajes.forEach((b) => {
  // b.classList.remove("active");
  b.addEventListener("click", (e) => {
    //como el valor del boton es A% yo solo sacare el num q s A por ello realizo lo sgte
    let porcAnum = e.target.innerText;
    porcAnum = porcAnum.substr(0, porcAnum.length - 1);
    porcentajes.forEach(A=>{
      A.classList.remove("active");
    })
    // console.log("valor del procentjae " + porcAnum);
    if (bill.value === "") {
      alert("Porfavor ingrese un valor para bill");
      btnReset.classList.remove("active");
    } else {
      btnReset.classList.add("active");
      b.classList.add("active");
      if (numPeople.value === "") {
        numPeople.value = 1;
      }
      calcular(
        parseFloat(bill.value),
        parseInt(porcAnum),
        parseInt(numPeople.value)
      );
    }
  });
});

//si coloca otro porcentaje
custom.addEventListener("blur", (e) => {
  porcentajes.forEach((b) => {
    b.classList.remove("active");
  });
  if (numPeople.value === "") {
    numPeople.value = 1;
  }
  calcular(
    parseFloat(bill.value),
    parseInt(custom.value),
    parseInt(numPeople.value)
  );
});
//Realizamos el calculo
function calcular(bill, porcentaje, numP) {
  let tipA = (bill * (porcentaje / 100)) / numP;
  let tipA_val = Math.floor(tipA * 100) / 100;
  tipA_val.toFixed(2);
  //console.log("el valor de TA= "+tipA_val);
  let tipT = (tipA * numP + bill) / numP;
  let tipT_val = tipT.toFixed(2);
  //console.log("el valor de TT= "+tipT);
  tipAmount.innerHTML = `$${tipA_val}`;
  tipTotal.innerHTML = `$${tipT_val}`;
}
//Funcionalidad del boton reset para settear los valores que colocamos
btnReset.addEventListener("click", reset);
function reset() {
  bill.value = "";
  custom.value = "";
  numPeople.value = "";
  tipAmount.innerHTML = "$0.00";
  tipTotal.innerHTML = "$0.00";
  btnReset.classList.remove("active");
}
