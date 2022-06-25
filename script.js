"use strict";

const account1 = {
  owner: "Mamood",

  pin: 1111,
};

const account2 = {
  owner: "Sisey",

  pin: 2222,
};

const account3 = {
  owner: "Zalia",

  pin: 3333,
};

const account4 = {
  owner: "Namau",

  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const login = document.querySelector(".login");
const labelWelcome = document.querySelector(".welcome");

const welcomeLabel = document.querySelector(".to-do");

const containerSummary = document.querySelector(".summary");
const labelIn = document.querySelector(".summary__value--in");
const labelSub = document.querySelector(".summary__value--out");
const labelAdd = document.querySelector(".summary__value--vest");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");

const inputLoginUsername = document.getElementById("logy");

const inputLoginPin = document.getElementById("piny");
const inputTransferTo = document.querySelector(".form__input--to");

const navig = document.querySelector(".navig");
const remove = document.querySelector(".remove");

const errorMessage = document.createElement("div");
errorMessage.classList.add("errorMessage");
errorMessage.innerHTML = "Incorrect UserName/Password <button>ok</button>";

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const a = inputLoginUsername.value;
  const b = Number(inputLoginPin.value);
  for (let i in accounts) {
    if (accounts[i].owner === a && accounts[i].pin === b) {
      containerApp.style.opacity = "100";
      inputLoginUsername.value = inputLoginPin.value = "";
      inputLoginPin.blur();
      labelWelcome.textContent = "";
      login.textContent = "";
    }
  }

  welcomeLabel.textContent = `Welcome ${a}! Add Activities To Begin!`;
});

const displayInputs = (i) => {
  const html = `
    <div class="movements">
    <div class="movements__row">
      <div class="movements__type movements__type--deposit">${i}</div>
      <div class="movements__value"><button class= "remove">Remove</button></div>
    </div>
    </div>
  `;

  containerMovements.insertAdjacentHTML("afterbegin", html);
};

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();

  let newItem = document.getElementById("addToList").value;
  console.log(newItem);

  if (newItem === "") {
    labelIn.textContent = Number(labelIn.textContent) + 0;
  } else {
    displayInputs(newItem);
    labelIn.textContent = Number(labelIn.textContent) + 1;
    labelSub.textContent = Number(labelSub.textContent) + 1;
  }

  inputTransferTo.value = "";

  document.querySelector(".remove").addEventListener("click", () => {
    document.querySelector(".movements__row").remove();
    labelAdd.textContent = Number(labelAdd.textContent) + 1;
    labelSub.textContent = Number(labelSub.textContent) - 1;
  });
});
