//tab
let gallery = document.querySelectorAll(".gallery");
let currentTab = document.querySelectorAll(".tab");

currentTab.forEach(tabs => tabs.addEventListener("click", runEvent));

function runEvent(e) {
  let tabID = e.currentTarget.id;
  let cabinGallery = tabID.replace("t", "c");

  // reset tabs and gallery
  gallery.forEach(page => page.classList.remove("active"));
  currentTab.forEach(tabs => tabs.classList.remove("active"));

  //activate current tab
  e.currentTarget.classList.add("active");
  //show current gallery
  let currentCabinGallery = document.querySelector("#" + cabinGallery);

  currentCabinGallery.classList.add("active");
}
