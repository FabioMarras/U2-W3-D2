const input = document.getElementById("inputText");
const saveBtn = document.getElementById("save");
const deleteBtn = document.getElementById("delete");
const parag = document.getElementById("NomeInput");
const t = document.getElementById("TimeInput");
const time = document.getElementById("timer");

let Time0 = 0;

window.onload = () => {
  parag.textContent = "Nome: " + localStorage.getItem("LastName");
  TimeInput.textContent = "Tempo precedente: " + sessionStorage.getItem("CurrentTime");
  const timeSave = sessionStorage.getItem("CurrentTime");
  Time0 = timeSave;
  sessionStorage.setItem("CurrentTime", Time0);
};

saveBtn.addEventListener("click", function () {
  parag.textContent = "Nome: " + input.value;
  console.log(input.value);

  localStorage.setItem("LastName", input.value);
});

deleteBtn.addEventListener("click", function () {
  parag.textContent = "";

  localStorage.removeItem("LastName");
});

const timeStart = setInterval(function () {
  Time0++;
  time.textContent = "Sono passati: " + Time0;
  /*const x = Time0;*/
  console.log(timeStart);
  sessionStorage.setItem("CurrentTime", Time0);
}, 1000);

/*localStorage.setItem("CurrentTime", x);*/
