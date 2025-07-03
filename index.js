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

// Selectors:

const uitleg = document.querySelector("#uitleg");
const uitlegButton = document.querySelector("#uitleg-button");
const closeButton = document.querySelector("#close-button");
const closeButton2 = document.querySelector("#close-button-2");
const closeButton3 = document.querySelector("#close-button-3");
const greetingContainer = document.querySelector("#greeting-container");
const betalen = document.querySelector("#betalen");
const betaalButton = document.querySelector("#pay-button");
const deelnemers = document.querySelector("#deelnemers");
const deelnemersContainer = document.querySelector("#deelnemers-container");
const uitvallersContainer = document.querySelector("#uitvallers-container");
const uitKoersUl = document.querySelector("#out-of-course");
const uitvallersButton = document.querySelector("#uitvallers-button");

// Api:

const API = new FetchWrapper(
  "https://tourtoto-data-default-rtdb.firebaseio.com/players.json"
);

API.get("").then((data) => {
  Object.values(data).forEach((item) => {
    deelnemers.insertAdjacentHTML(
      "beforeend",
      `
      <li class="player-joined">${item.playerInfo.name}</li>
      `
    );
  });
});

riders.forEach((rider) => {
  if (rider.inCourse === false) {
    uitKoersUl.insertAdjacentHTML(
      "beforeend",
      `
      <li class="riders-out">
      ${rider.name} - (${rider.team})
      </li>
      `
    );
  }
});

function toggleOutCourse() {
  greetingContainer.classList.toggle("hidden");
  uitvallersContainer.classList.toggle("hidden");
}

uitvallersButton.addEventListener("click", toggleOutCourse);
closeButton3.addEventListener("click", toggleOutCourse);
