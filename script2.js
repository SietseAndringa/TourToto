// API stuff:

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
  "https://firestore.googleapis.com/v1/projects/ljo-sietse-andringa/databases/(default)/documents/tourtoto-deelnemers"
);

// Selectors:

// List:
const list = document.querySelector("#rider-list");
const riderListContainer = document.querySelector("#rider-list-container");
const searchField = document.querySelector("#search");
// Selected riders:
const selectedRidersContainer = document.querySelector("#selected-container");
const riderCount = document.querySelector("#rider-count");
const reserveCount = document.querySelector("#reserve-count");
const selectedRidersUl = document.querySelector("#selected-riders");
const reserveRidersUl = document.querySelector("#reserve-riders");
const deleteButton = document.querySelector("#delete-button");
const deleteReserveButton = document.querySelector("#delete-reserve-button");
const resetButton = document.querySelector("#reset-button");
// Player info:
const inputName = document.querySelector("#name");
const inputCity = document.querySelector("#city");
const inputMail = document.querySelector("#mail");
const inputPhone = document.querySelector("#phone");
const form = document.querySelector("#form");
const nextButtonOne = document.querySelector("#next-button-one");
const inputContainer = document.querySelector(".input-container");
// Winners stuff:
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
// Submit to Api:
const submitButton = document.querySelector("#submit-button");

// Modal stuff:

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalButton = document.querySelector("#modal-button");

const finalModal = document.querySelector(".final-modal");
const finalOverlay = document.querySelector(".final-overlay");
const finalConfirmButton = document.querySelector(
  "#final-modal-button-confirm"
);
const finalCancelButton = document.querySelector("#final-modal-button-cancel");

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

showModal(
  "Welkom, leuk dat je meedoet aan de Tourtoto 2024!",
  "Om te beginnen hebben we wat gegevens van je nodig...",
  "Ga verder"
);

submitButton.addEventListener("click", () => {
  finalModal.classList.toggle("hidden");
  finalOverlay.classList.toggle("hidden");
});

finalCancelButton.addEventListener("click", () => {
  // location.reload();
  finalModal.classList.toggle("hidden");
  finalOverlay.classList.toggle("hidden");
});
// Player info form:

form.addEventListener("submit", (event) => {
  event.preventDefault();
  information.name = inputName.value;
  information.city = inputCity.value;
  information.mail = inputMail.value;
  information.phone = inputPhone.value;
  console.log(information);
  inputContainer.classList.toggle("hidden");
  winnersContainer.classList.toggle("hidden");
  riderListContainer.classList.toggle("hidden");
  showModal(
    "Gelukt! Kies nu je eindwinnaars voor de gele-, groene- en bolletjes trui.",
    "In de rechter kolom kun je een renner uitzoeken en aanklikken. Deze renner komt dan in de linker kolom te staan. Je kunt zoeken op voor- en/of achternaam.",
    "Ga verder"
  );
});

// Push inputs into variables:

let information = {
  name: "",
  city: "",
  mail: "",
  phone: "",
};

let winners = {
  yellow: "",
  green: "",
  polka: "",
};

let selectedRiders = [];
let reserveRiders = [];

function generateAdvObj(obj) {
  let selectedRiders = {
    mapValue: {
      fields: {
        name: {
          stringValue: obj.name,
        },
        id: {
          stringValue: obj.id,
        },
      },
    },
  };
  console.log(selectedRiders);
  return selectedRiders;
}

function makeObj(name, id) {
  let obj = {
    name: name,
    id: id,
  };
  return obj;
}

function pushToArray(selectedRiders, reserveRiders, rider) {
  if (selectedRiders.length + reserveRiders.length > 21) {
    showModal("Maximum aantal renners bereikt!", "", "Sluiten");
  } else if (selectedRiders.length < 15) {
    selectedRiders.push(rider);
    renderSelectedList(selectedRiders, false);
  } else if (selectedRiders.length >= 15) {
    reserveRiders.push(rider);
    renderSelectedList(reserveRiders, true);
  }
  renderFullList(riders);
}

// Render all riders:

function renderFullList(riders) {
  list.innerHTML = "";
  riders.forEach((rider) => {
    list.insertAdjacentHTML(
      "beforeend",
      `<li class="li-rider" id=${rider.id}>
      <h4>${rider.name}</h4>
      <h5>${rider.team}</h5>
      </li>`
    );
  });

  const getLi = document.querySelectorAll("li");

  getLi.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (winners.yellow === "") {
        winners.yellow = event.currentTarget.querySelector("h4").innerHTML;
        addWinnerToDom(yellow, winners.yellow);
        yellowHeading.textContent = "Gele trui:";
        winnersHeading.textContent = "Wie gaat de GROENE TRUI winnen? ";
        winnersHeading.classList.remove("yellow");
        winnersHeading.classList.add("green");
      } else if (winners.green === "") {
        winners.green = event.currentTarget.querySelector("h4").innerHTML;
        addWinnerToDom(green, winners.green);
        greenHeading.textContent = "Groene trui:";
        winnersHeading.textContent = "Wie gaat de BOLLETJES TRUI winnen? ";
        winnersHeading.classList.remove("green");
        winnersHeading.classList.add("polka");
      } else if (winners.polka === "") {
        winners.polka = event.currentTarget.querySelector("h4").innerHTML;
        addWinnerToDom(polka, winners.polka);
        polkaHeading.textContent = "Bolletjes trui:";
        winnersHeading.textContent = "Gekozen eindwinnaars:";
        winnersHeading.classList.remove("polka");
        winnersHeading.classList.add("underline");
        winnersButtonContainer.classList.toggle("hidden");
        riderListContainer.classList.toggle("hidden");
      } else {
        let item = makeObj(
          event.currentTarget.querySelector("h4").innerHTML,
          event.currentTarget.id
        );

        pushToArray(selectedRiders, reserveRiders, item);
      }
      searchField.value = "";
      console.log(winners);
    });
  });
  searchField.focus();
}

// Render list for 15 + 7

function isDisabled() {
  if (selectedRiders.length < 15) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

function renderSelectedList(riders, showReserve) {
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
  isDisabled();
}

renderFullList(riders);

// Button actions:

searchField.addEventListener("keyup", () => {
  list.innerHTML = "";
  let filteredRiders = filterArrayBySearchTag(riders, searchField.value);
  renderFullList(filteredRiders);
});

deleteButton.addEventListener("click", (event) => {
  selectedRiders.pop();
  renderSelectedList(selectedRiders);
});

deleteReserveButton.addEventListener("click", (event) => {
  reserveRiders.pop();
  renderSelectedList(reserveRiders, true);
});

resetButton.addEventListener("click", () => {
  selectedRiders = [];
  reserveRiders = [];
  renderSelectedList(selectedRiders, true);
  renderSelectedList(selectedRiders, false);
  renderFullList(riders);
});

// Submit to API:

function redirect() {
  window.location.replace("https://tourtoto-2024.netlify.app/");
}

finalConfirmButton.addEventListener("click", (event) => {
  event.preventDefault();

  const selectedRidersObj = selectedRiders.map((item) => {
    return generateAdvObj(item);
  });

  const reserveRidersObj = reserveRiders.map((item) => {
    return generateAdvObj(item);
  });

  API.post("/", {
    fields: {
      name: { stringValue: information.name },
      city: { stringValue: information.city },
      mail: { stringValue: information.mail },
      phone: { stringValue: information.phone },
      selectedRiders: {
        arrayValue: {
          values: selectedRidersObj,
        },
      },
      reserveRiders: {
        arrayValue: {
          values: reserveRidersObj,
        },
      },
      winners: {
        mapValue: {
          fields: {
            polka: {
              stringValue: winners.polka,
            },
            yellow: {
              stringValue: winners.yellow,
            },
            green: {
              stringValue: winners.green,
            },
          },
        },
      },
    },
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

const filterArrayBySearchTag = function (array, tag) {
  // with array of objects:
  return array.filter(function (item) {
    return item.name.toLowerCase().includes(tag.toLowerCase());
  });
};

// Winner stuff:

function addWinnerToDom(selector, winnerColor) {
  selector.insertAdjacentHTML("beforeend", `<p>${winnerColor}</p>`);
  renderFullList(riders);
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
    "Na de eerste 15 gekozen renners gaat de eerstvolgende die je aanklikt automatisch naar de reserves. !--Let op--! Het is mogelijk dat een renner dubbel in de lijst komt te staan.",
    "Naar de lijst"
  );
}

nextButtonTwo.addEventListener("click", nextAfterWinners);
