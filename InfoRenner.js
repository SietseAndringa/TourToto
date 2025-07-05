const list = document.querySelector("#rider-list");
const searchField = document.querySelector("#search");
const selectedRidersUl = document.querySelector("#selected-riders");
const riderCount = document.querySelector("#rider-count");

function renderFullList(riders) {
  list.innerHTML = "";
  riders.forEach((rider) => {
    if (rider.inCourse) {
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
        <h5 class="in-course">Nog in koers</h5>
      </li>`
      );
    } else {
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
        <h5 class="out-course">Uitgevallen</h5>
      </li>`
      );
    }
  });

  const getLi = document.querySelectorAll("li");

  getLi.forEach((item) => {
    item.addEventListener("click", (event) => {
      selectedRidersUl.innerHTML = "";
      // console.log(event.currentTarget.querySelector("h4").innerHTML);
      // console.log(event.currentTarget.id);
      let filterResult = filterArrayById(
        players,
        parseInt(event.currentTarget.id)
      );
      // console.log(filterResult);
      let sortedResult = filterResult.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      sortedResult.forEach((player) => {
        selectedRidersUl.insertAdjacentHTML(
          "beforeend",
          `<li class="li-rider-selected" id=${player.name}>
          <span>${player.name}</span>
          </li>`
        );
      });
      riderCount.innerText = `${sortedResult.length}`;
    });
  });
}

renderFullList(riders);

searchField.addEventListener("keyup", () => {
  list.innerHTML = "";
  let filteredRiders = filterArrayBySearchTag(riders, searchField.value);
  renderFullList(filteredRiders);
});

const filterArrayBySearchTag = function (array, tag) {
  // with array of objects:
  return array.filter(function (item) {
    return item.name.toLowerCase().includes(tag.toLowerCase());
  });
};

const filterArrayById = function (array, id) {
  return array.filter(function (item) {
    return item.riders.includes(id);
  });
};
