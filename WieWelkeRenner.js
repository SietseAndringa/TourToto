const selectedRidersUl = document.querySelector("#selected-riders");
const list = document.querySelector("#rider-list");

function renderFullList(players) {
  selectedRidersUl.innerHTML = "";
  const sortedPlayers = players.sort((a, b) => (a.name > b.name ? 1 : -1));
  sortedPlayers.forEach((player) => {
    selectedRidersUl.insertAdjacentHTML(
      "beforeend",
      `<li class="li-rider" id=${player.id}>
        <h4>${player.name}</h4>
        </li>`
    );
  });

  console.log(riders);

  const getLi = document.querySelectorAll("li");

  getLi.forEach((item) => {
    item.addEventListener("click", (event) => {
      list.innerHTML = "";
      getLi.forEach((item) => {
        item.classList.remove("selected");
      });
      //   get id
      // search player list for id
      const selectedPlayer = players.find(
        ({ id }) => id == event.currentTarget.id
      );
      setClass(event.currentTarget.id);
      // compare pl array to rider array
      const selectedRiders = filterTwoArrays(
        Object.values(riders),
        selectedPlayer.riders
      );
      selectedRiders.sort((a, b) => (a.name > b.name ? 1 : -1));
      selectedRiders.forEach((rider) => {
        if (rider.inCourse === true) {
          list.insertAdjacentHTML(
            "beforeend",
            `<li class="li-rider-selected" id=${rider.id}>
            <span>${rider.name}</span>
            </li>`
          );
        } else {
          list.insertAdjacentHTML(
            "beforeend",
            `<li class="li-rider-selected" id=${rider.id}>
            <span class="red">${rider.name}</span>
            </li>`
          );
        }
      });
    });
  });
}

renderFullList(players);

const filterTwoArrays = (array1, array2) =>
  array1.filter((item) => array2.includes(item.id));

function setClass(id) {
  let element = document.getElementById(id);
  element.classList.add("selected");
}
