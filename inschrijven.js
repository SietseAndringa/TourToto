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

// Modal:
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalButton = document.querySelector("#modal-button");

const finalModal = document.querySelector(".final-modal");
const finalOverlay = document.querySelector(".final-overlay");
const finalConfirmButton = document.querySelector(
  "#final-modal-button-confirm"
);
const finalCancelButton = document.querySelector("#final-modal-button-cancel");
// Player info:
const inputName = document.querySelector("#name");
const inputCity = document.querySelector("#city");
const inputMail = document.querySelector("#mail");
const inputPhone = document.querySelector("#phone");
const form = document.querySelector("#form");
const nextButtonOne = document.querySelector("#next-button-one");
const inputContainer = document.querySelector(".input-container");
// List:
const list = document.querySelector("#rider-list");
const riderListContainer = document.querySelector("#rider-list-container");
const searchField = document.querySelector("#search");
// Winners:
const winnersContainer = document.querySelector("#winners-container");
const winnersHeading = document.querySelector("#winners-heading");
const yellowHeading = document.querySelector("#yellow-heading");
const greenHeading = document.querySelector("#green-heading");
const polkaHeading = document.querySelector("#polka-heading");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
const polka = document.querySelector("#polka");
const winnersButtonContainer = document.querySelector(
  "#winners-button-container"
);
const resetButtonWinners = document.querySelector("#reset-button-winners");
const nextButtonTwo = document.querySelector("#next-button-two");
// Selected riders:
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

// -------------------- old Modal stuff --------------------

function showModal(header, text, btnText) {
  document.querySelector("#modal-header").textContent = header;
  document.querySelector("#modal-text").textContent = text;
  document.querySelector("#modal-button").textContent = btnText;
  toggleModal();
}

function toggleModal() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

modalButton.addEventListener("click", toggleModal);

// -------------------- New Modal stuff --------------------

// Dialogs

const dialogGreeting = document.querySelector("#dialog-greeting");
const dialogWinners = document.querySelector("#dialog-winners");
const dialogList = document.querySelector("#dialog-list");
const dialogMax = document.querySelector("#dialog-max");
const dialogSend = document.querySelector("#dialog-send");
const dialogDone = document.querySelector("#dialog-confirm");

const dialogGreetingBtn = document.querySelector("#dialog-greeting-btn");
const dialogWinnersBtn = document.querySelector("#dialog-winners-btn");
const dialogListBtn = document.querySelector("#dialog-list-btn");
const dialogMaxBtn = document.querySelector("#dialog-max-btn");
const dialogSendBtnConfirm = document.querySelector("#dialog-send-btn-confirm");
const dialogSendBtnCancel = document.querySelector("#dialog-send-btn-cancel");
const dialogDoneBtn = document.querySelector("#dialog-confirm-btn");

dialogGreetingBtn.addEventListener("click", () => {
  dialogGreeting.close();
});
dialogWinnersBtn.addEventListener("click", () => {
  dialogWinners.close();
});
// dialogListBtn.addEventListener("click", () => {
//   dialogList.close();
// });
// dialogMaxBtn.addEventListener("click", () => {
//   dialogMax.close();
// });
// dialogSendBtnConfirm.addEventListener("click", () => {
//   // send function comes here
//   dialogSend.close();
// });
// dialogSendBtnCancel.addEventListener("click", () => {
//   dialogSend.close();
// });
// dialogDoneBtn.addEventListener("click", () => {
//   dialogDone.close();
// });

dialogGreeting.showModal();

// -------------------- Player info --------------------

showModal(
  "Welkom, leuk dat je meedoet aan de Tourtoto 2024!",
  "Om te beginnen hebben we wat gegevens van je nodig...",
  "Ga verder"
);

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
  console.log(playerInfo);
  inputContainer.classList.toggle("hidden");
  winnersContainer.classList.toggle("hidden");
  riderListContainer.classList.toggle("hidden");
  dialogWinners.showModal();
  showModal(
    "Gelukt! Kies nu je eindwinnaars voor de gele-, groene- en bolletjes trui.",
    "In de rechter kolom kun je een renner uitzoeken en aanklikken. Deze renner komt dan in de linker kolom te staan. Je kunt zoeken op voor- en/of achternaam.",
    "Ga verder"
  );
});

// -------------------- Select riders --------------------

let winners = {
  yellow: "",
  green: "",
  polka: "",
};

let selectedRiders = [];
let reserveRiders = [];

// Render all riders:

function showSelectableRiders(riders) {
  list.innerHTML = "";
  // Merge arrays
  let mergedRiders = [...selectedRiders, ...reserveRiders];
  console.log(mergedRiders);
  // get selected rider id's
  let chosenRidersIds = mergedRiders.map((item) => parseInt(item.id, 10));
  console.log(chosenRidersIds);
  // Filter/remove chosen rider from selection list
  let filteredRiderList = riders.filter(
    (rider) => !chosenRidersIds.includes(rider.id)
  );
  console.log(filteredRiderList);
  // Render rider selection list
  filteredRiderList.forEach((rider) => {
    list.insertAdjacentHTML(
      "beforeend",
      `<li class="li-rider" id=${rider.id}>
      <h4>${rider.name}</h4>
      <h5>${rider.team}</h5>
      </li>`
    );
  });

  const getLi = document.querySelectorAll("li");

  function makeRiderObject(name, id) {
    return {
      name: name,
      id: id,
    };
  }

  function putRiderInList(selectedRiders, reserveRiders, rider) {
    if (selectedRiders.length + reserveRiders.length > 21) {
      showModal("Maximum aantal renners bereikt!", "", "Sluiten");
    } else if (selectedRiders.length < 15) {
      selectedRiders.push(rider);
      showChosenRiders(selectedRiders, false);
    } else if (selectedRiders.length >= 15) {
      reserveRiders.push(rider);
      showChosenRiders(reserveRiders, true);
    }
    showSelectableRiders(riders);
  }

  // Add different event listeners based on status

  getLi.forEach((item) => {
    item.addEventListener("click", (event) => {
      // Yellow jersey winner
      if (winners.yellow === "") {
        winners.yellow = event.currentTarget.querySelector("h4").innerHTML;
        addWinnerToDom(yellow, winners.yellow);
        yellowHeading.textContent = "Gele trui:";
        winnersHeading.textContent = "Wie gaat de GROENE TRUI winnen? ";
        winnersHeading.classList.remove("yellow");
        winnersHeading.classList.add("green");
        // Green jersey winner
      } else if (winners.green === "") {
        winners.green = event.currentTarget.querySelector("h4").innerHTML;
        addWinnerToDom(green, winners.green);
        greenHeading.textContent = "Groene trui:";
        winnersHeading.textContent = "Wie gaat de BOLLETJES TRUI winnen? ";
        winnersHeading.classList.remove("green");
        winnersHeading.classList.add("polka");
        // Polka jersey winner
      } else if (winners.polka === "") {
        winners.polka = event.currentTarget.querySelector("h4").innerHTML;
        addWinnerToDom(polka, winners.polka);
        polkaHeading.textContent = "Bolletjes trui:";
        winnersHeading.textContent = "Gekozen eindwinnaars:";
        winnersHeading.classList.remove("polka");
        winnersHeading.classList.add("underline");
        winnersButtonContainer.classList.toggle("hidden");
        riderListContainer.classList.toggle("hidden");
        // top 15 + reserve
      } else {
        let riderObject = makeRiderObject(
          event.currentTarget.querySelector("h4").innerHTML,
          event.currentTarget.id
        );

        putRiderInList(selectedRiders, reserveRiders, riderObject);
        console.log(event.currentTarget);
        event.currentTarget.classList.add("hidden");
      }
      searchField.value = "";
      console.log(winners);
    });
  });
  // searchField.focus();
}

// Winner stuff:

function addWinnerToDom(selector, winnerColor) {
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
  yellow.innerHTML = "";
  greenHeading.textContent = "";
  green.innerHTML = "";
  polkaHeading.textContent = "";
  polka.innerHTML = "";
  winnersButtonContainer.classList.toggle("hidden");
  riderListContainer.classList.toggle("hidden");
  console.log(winners);
}

resetButtonWinners.addEventListener("click", resetWinners);

function nextAfterWinners() {
  winnersContainer.classList.toggle("hidden");
  selectedRidersContainer.classList.toggle("hidden");
  riderListContainer.classList.toggle("hidden");
  showModal(
    "Gelukt! Kies nu je 15 renners, gevolgd door je reserves (maximaal 7)",
    "Na de eerste 15 gekozen renners gaat de eerstvolgende die je aanklikt automatisch naar de reserves.",
    "Naar de lijst"
  );
}

nextButtonTwo.addEventListener("click", nextAfterWinners);

// Submit button enable

function activateSubmitButton() {
  if (selectedRiders.length < 15) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

function showChosenRiders(riders, showReserve) {
  let count = riders.length;
  if (!showReserve) {
    riderCount.innerHTML = `${count} van 15`;
    selectedRidersUl.innerHTML = "";
    riders.forEach((rider) => {
      selectedRidersUl.insertAdjacentHTML(
        "beforeend",
        `<li class="li-rider-selected" id=${rider.id}>
        <span>${rider.name}</span>
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
        <span>${rider.name}</span>
        </li>`
      );
    });
  }
  activateSubmitButton();
}

showSelectableRiders(riders);

// Button actions:

searchField.addEventListener("keyup", () => {
  list.innerHTML = "";
  let filteredRiders = filterArrayBySearchTag(riders, searchField.value);
  showSelectableRiders(filteredRiders);
});

deleteButton.addEventListener("click", (event) => {
  selectedRiders.pop();
  showChosenRiders(selectedRiders);
  showSelectableRiders(riders);
});

deleteReserveButton.addEventListener("click", (event) => {
  reserveRiders.pop();
  showChosenRiders(reserveRiders, true);
  showSelectableRiders(riders);
});

resetButton.addEventListener("click", () => {
  selectedRiders = [];
  reserveRiders = [];
  showChosenRiders(selectedRiders, true);
  showChosenRiders(selectedRiders, false);
  showSelectableRiders(riders);
});

// Submit to API:

function redirect() {
  window.location.replace("https://tourtoto.netlify.app/");
}

submitButton.addEventListener("click", () => {
  finalModal.classList.toggle("hidden");
  finalOverlay.classList.toggle("hidden");
});

finalCancelButton.addEventListener("click", () => {
  // location.reload();
  finalModal.classList.toggle("hidden");
  finalOverlay.classList.toggle("hidden");
});

finalConfirmButton.addEventListener("click", (event) => {
  event.preventDefault();

  API.post("", {
    playerInfo,
    selectedRiders,
    reserveRiders,
    winners,
  }).then((data) => {
    console.log(data);
    finalModal.classList.toggle("hidden");
    finalOverlay.classList.toggle("hidden");
    modalButton.addEventListener("click", redirect);
    showModal(
      "Je lijst is verzonden!",
      "Wanneer we alle lijsten hebben verwerkt krijg je een mail.",
      "Sluiten"
    );
    if (data.error) {
      // there was an error
      console.log(data.error);
      window.alert("Er gaat wat mis, probeer het later opnieuw");
      return;
    }
  });
});

// Search function

const filterArrayBySearchTag = function (array, tag) {
  // with array of objects:
  return array.filter(function (item) {
    return item.name.toLowerCase().includes(tag.toLowerCase());
  });
};
