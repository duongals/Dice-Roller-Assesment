let NumRollsInput = document.querySelector("#Number-Of-Rolls");
let NumSidesInput = document.querySelector("#Number-Of-Sides");
let RollButton = document.querySelector("#Roll-Button");
let ShowTheRolls = document.querySelector("#AllRolls");
let rollResults = document.querySelector("#roll-Results");
let TotalResults = document.querySelector("#Total-Results");
//let showAllRolls = document.querySelector("#showallrolls");
let dieRolls = [];
// dice rolls
RollButton.addEventListener("click", function () {
  dieRolls = [];
  X = document.querySelector("#Number-Of-Rolls");
  let count = 1;
  let MyRandomNumber;
  let AddIt = 0;
  TotalResults.innerHTML = "";
  while (count <= Number(X.value)) {
    MyRandomNumber =
      Math.floor(Math.random() * Number(NumSidesInput.value)) + 1;
    dieRolls.push(MyRandomNumber);
    console.log(dieRolls);
    AddIt += Number(MyRandomNumber);
    count++;
    console.log(AddIt);
  }
  TotalResults.innerHTML += "MyTotal: " + Number(AddIt);
});

ShowTheRolls.addEventListener("click", function () {
  ShowTheRolls = document.querySelector("#AllRolls");
  rollResults.innerHTML = "";
  let count = 0;
  while (count < dieRolls.length) {
    rollResults.innerHTML += "<br>" + "<li>" + dieRolls[count] + "</li>";
    console.log(dieRolls[count]);
    count++;
  }
});
