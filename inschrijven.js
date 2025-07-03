// -------------------- API stuff --------------------

class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(endpoint) {
    return fetch(this.baseURL + endpoint).then((response) => response.json());
  }

  put(endpoint, body) {
    return this._send("put", endpoint, body);
  }

  post(endpoint, body) {
    return this._send("post", endpoint, body);
  }

  patch(endpoint, body) {
    return this._send("patch", endpoint, body);
  }

  delete(endpoint) {
    return fetch(this.baseURL + endpoint, {
      method: "delete",
    });
  }

  // DRY code

  _send(method, endpoint, body) {
    return fetch(this.baseURL + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}

const API = new FetchWrapper(
  "https://tourtoto-data-default-rtdb.firebaseio.com/players.json"
);

// -------------------- Selectors --------------------

// Player info selector:
const inputName = document.querySelector("#name");
const inputCity = document.querySelector("#city");
const inputMail = document.querySelector("#mail");
const inputPhone = document.querySelector("#phone");
const form = document.querySelector("#form");
const nextButtonOne = document.querySelector("#next-button-one");
const inputContainer = document.querySelector(".input-container");
// Rider list selectors:
const list = document.querySelector("#rider-list");
const riderListContainer = document.querySelector("#rider-list-container");
const searchField = document.querySelector("#search");
// Winners selectors:
const winnersContainer = document.querySelector("#winners-container");
const winnersHeading = document.querySelector("#winners-heading");
const yellowHeading = document.querySelector("#yellow-heading");
const greenHeading = document.querySelector("#green-heading");
const polkaHeading = document.querySelector("#polka-heading");
const yellowWinnerSelector = document.querySelector("#yellow");
const greenWinnerSelector = document.querySelector("#green");
const polkaWinnerSelector = document.querySelector("#polka");
const winnersButtonContainer = document.querySelector(
  "#winners-button-container"
);
const resetButtonWinners = document.querySelector("#reset-button-winners");
const nextButtonTwo = document.querySelector("#next-button-two");
// Selected riders selectors:
const selectedRidersContainer = document.querySelector("#selected-container");
const riderCount = document.querySelector("#rider-count");
const reserveCount = document.querySelector("#reserve-count");
const selectedRidersUl = document.querySelector("#selected-riders");
const reserveRidersUl = document.querySelector("#reserve-riders");
const deleteButton = document.querySelector("#delete-button");
const deleteReserveButton = document.querySelector("#delete-reserve-button");
const resetButton = document.querySelector("#reset-button");
// Submit button:
const submitButton = document.querySelector("#submit-button");

// -------------------- New Modal stuff --------------------

const dialogGreeting = document.querySelector("#dialog-greeting");
const dialogWinners = document.querySelector("#dialog-winners");
const dialogList = document.querySelector("#dialog-list");
const dialogMax = document.querySelector("#dialog-max");
const dialogSend = document.querySelector("#dialog-send");
const dialogDone = document.querySelector("#dialog-done");

const dialogGreetingBtn = document.querySelector("#dialog-greeting-btn");
const dialogWinnersBtn = document.querySelector("#dialog-winners-btn");
const dialogListBtn = document.querySelector("#dialog-list-btn");
const dialogMaxBtn = document.querySelector("#dialog-max-btn");
const dialogSendBtnConfirm = document.querySelector("#dialog-send-btn-confirm");
const dialogSendBtnCancel = document.querySelector("#dialog-send-btn-cancel");
const dialogDoneBtn = document.querySelector("#dialog-done-btn");

dialogGreetingBtn.addEventListener("click", () => {
  dialogGreeting.close();
});
dialogWinnersBtn.addEventListener("click", () => {
  dialogWinners.close();
});
dialogListBtn.addEventListener("click", () => {
  dialogList.close();
});
dialogMaxBtn.addEventListener("click", () => {
  dialogMax.close();
});
dialogSendBtnCancel.addEventListener("click", () => {
  dialogSend.close();
});
dialogDoneBtn.addEventListener("click", () => {
  window.location.replace("https://tourtoto.netlify.app");
  dialogDone.close();
});

dialogGreeting.showModal();

// Player info form

let playerInfo = {
  name: "",
  city: "",
  mail: "",
  phone: "",
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  playerInfo.name = inputName.value;
  playerInfo.city = inputCity.value;
  playerInfo.mail = inputMail.value;
  playerInfo.phone = inputPhone.value;
  inputContainer.classList.toggle("hidden");
  winnersContainer.classList.toggle("hidden");
  riderListContainer.classList.toggle("hidden");
  dialogWinners.showModal();
});

// -------------------- Select riders --------------------

let winners = {
  yellow: "",
  green: "",
  polka: "",
};

// Met rugnummer, voor beter lijst generen

let yellow = {
  id: null,
  name: null,
};

let green = {
  id: null,
  name: null,
};

let polka = {
  id: null,
  name: null,
};

let selectedRidersArray = [];
let reserveRidersArray = [];

// Render all riders:

function showSelectableRiders(riders) {
  console.log("showSelectableRiders run");
  list.innerHTML = "";
  // Merge arrays
  let mergedRiders = [...selectedRidersArray, ...reserveRidersArray];
  // get selected rider id's
  let chosenRidersIds = mergedRiders.map((item) => parseInt(item.id, 10));
  // Make unmutable copy
  let ridersCopy = [...riders];
  // Filter/remove chosen rider from selection list
  let filteredRiderList = ridersCopy.filter(
    (rider) => !chosenRidersIds.includes(rider.id)
  );
  // Render rider selection list
  filteredRiderList.forEach((rider) => {
    list.insertAdjacentHTML(
      "beforeend",
      `<li class="li-rider" id=${rider.id}>
        <div class="rider-name-wrapper">
          <span>${rider.id}</span>
          <h4>${rider.name}</h4>
        </div>
        <div class="team-wrapper">
          <img src=${rider.shirt} height=25 width=25 alt="">
          <h5>${rider.team}</h5>
        </div>
      </li>`
    );
  });

  const getLi = document.querySelectorAll("li");

  // Add different text and event listeners based on which step

  getLi.forEach((item) => {
    item.addEventListener("click", (event) => {
      // Yellow jersey winner
      if (winners.yellow === "") {
        // add to array
        winners.yellow = event.currentTarget.querySelector("h4").innerHTML;
        yellow.id = event.currentTarget.id;
        yellow.name = event.currentTarget.querySelector("h4").innerHTML;
        console.log(yellow);
        // add to screen
        addWinnerToList(yellowWinnerSelector, winners.yellow);
        yellowHeading.textContent = "Gele trui:";
        winnersHeading.textContent = "Wie gaat de GROENE TRUI winnen? ";
        winnersHeading.classList.remove("yellow");
        winnersHeading.classList.add("green");
        // Green jersey winner
      } else if (winners.green === "") {
        winners.green = event.currentTarget.querySelector("h4").innerHTML;
        green.id = event.currentTarget.id;
        green.name = event.currentTarget.querySelector("h4").innerHTML;
        addWinnerToList(greenWinnerSelector, winners.green);
        greenHeading.textContent = "Groene trui:";
        winnersHeading.textContent = "Wie gaat de BOLLETJES TRUI winnen? ";
        winnersHeading.classList.remove("green");
        winnersHeading.classList.add("polka");
        // Polka jersey winner
      } else if (winners.polka === "") {
        winners.polka = event.currentTarget.querySelector("h4").innerHTML;
        polka.id = event.currentTarget.id;
        polka.name = event.currentTarget.querySelector("h4").innerHTML;
        addWinnerToList(polkaWinnerSelector, winners.polka);
        polkaHeading.textContent = "Bolletjes trui:";
        winnersHeading.textContent = "Gekozen eindwinnaars:";
        winnersHeading.classList.remove("polka");
        winnersHeading.classList.add("underline");
        winnersButtonContainer.classList.toggle("hidden");
        riderListContainer.classList.toggle("hidden");
        // top 15 + reserve
      } else {
        let riderObject = {
          name: event.currentTarget.querySelector("h4").innerHTML,
          id: event.currentTarget.id,
        };

        addRiderToChosen(selectedRidersArray, reserveRidersArray, riderObject);
        event.currentTarget.classList.add("hidden");
      }
      searchField.value = "";
      // showSelectableRiders(riders);
    });
  });

  // searchField.focus();
}

// Put riders in list click functie

function addRiderToChosen(selectedRidersArray, reserveRidersArray, rider) {
  if (selectedRidersArray.length + reserveRidersArray.length > 21) {
    dialogMax.showModal();
  } else if (selectedRidersArray.length < 15) {
    selectedRidersArray.push(rider);
    showChosenRiders(selectedRidersArray, false);
    showSelectableRiders(riders);
  } else if (selectedRidersArray.length >= 15) {
    reserveRidersArray.push(rider);
    showChosenRiders(reserveRidersArray, true);
    showSelectableRiders(riders);
  }
  // showSelectableRiders(riders);
  console.log("this does run");
}

// Winner stuff:

function addWinnerToList(selector, winnerColor) {
  selector.insertAdjacentHTML("beforeend", `<p>${winnerColor}</p>`);
  showSelectableRiders(riders);
}

function resetWinners() {
  winners.yellow = "";
  winners.green = "";
  winners.polka = "";
  winnersHeading.textContent = "Wie gaat de GELE TRUI winnen? ";
  winnersHeading.classList.add("yellow");
  yellowHeading.textContent = "";
  yellowWinnerSelector.innerHTML = "";
  greenHeading.textContent = "";
  greenWinnerSelector.innerHTML = "";
  polkaHeading.textContent = "";
  polkaWinnerSelector.innerHTML = "";
  winnersButtonContainer.classList.toggle("hidden");
  riderListContainer.classList.toggle("hidden");
}

resetButtonWinners.addEventListener("click", resetWinners);

function nextAfterWinners() {
  winnersContainer.classList.toggle("hidden");
  selectedRidersContainer.classList.toggle("hidden");
  riderListContainer.classList.toggle("hidden");
  dialogList.showModal();
}

nextButtonTwo.addEventListener("click", nextAfterWinners);

// Submit button enable

function showChosenRiders(riders, showReserve) {
  let count = riders.length;
  if (!showReserve) {
    riderCount.innerHTML = `${count} van 15`;
    selectedRidersUl.innerHTML = "";
    riders.forEach((rider) => {
      selectedRidersUl.insertAdjacentHTML(
        "beforeend",
        `<li class="li-rider-selected" id=${rider.id}>
        ${rider.name}
        </li>`
      );
    });
  } else {
    reserveCount.innerHTML = `${count} van 7`;
    reserveRidersUl.innerHTML = "";
    riders.forEach((rider) => {
      reserveRidersUl.insertAdjacentHTML(
        "beforeend",
        `<li class="li-rider-selected" id=${rider.id}>
        ${rider.name}
        </li>`
      );
    });
  }
  if (selectedRidersArray.length < 15) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

showSelectableRiders(riders);

// Rider list button actions:

searchField.addEventListener("keyup", () => {
  // lijst leeg
  list.innerHTML = "";
  // filter erop
  let filteredRiders = filterArrayBySearchTag(riders, searchField.value);
  // lijst met filter tonen
  showSelectableRiders(filteredRiders);
});

deleteButton.addEventListener("click", (event) => {
  selectedRidersArray.pop();
  showChosenRiders(selectedRidersArray);
  showSelectableRiders(riders);
});

deleteReserveButton.addEventListener("click", (event) => {
  reserveRidersArray.pop();
  showChosenRiders(reserveRidersArray, true);
  showSelectableRiders(riders);
});

resetButton.addEventListener("click", () => {
  selectedRidersArray = [];
  reserveRidersArray = [];
  showChosenRiders(selectedRidersArray, true);
  showChosenRiders(selectedRidersArray, false);
  showSelectableRiders(riders);
});

// Submit list to Firebase:

submitButton.addEventListener("click", () => {
  dialogSend.showModal();
});

dialogSendBtnConfirm.addEventListener("click", (event) => {
  event.preventDefault();

  API.post("", {
    playerInfo,
    selectedRidersArray,
    reserveRidersArray,
    winners,
    yellow,
    green,
    polka,
  }).then((data) => {
    if (data.error) {
      console.log(data.error);
      window.alert("Er gaat wat mis, probeer het later opnieuw");
      return;
    }
    dialogSend.close();
    dialogDone.showModal();
  });
});

// Search function

const filterArrayBySearchTag = function (array, tag) {
  // with array of objects:
  return array.filter(function (item) {
    return item.name.toLowerCase().includes(tag.toLowerCase());
  });
};
