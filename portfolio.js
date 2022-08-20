const home = document.querySelector(`.clicker1`);
const aboutMe = document.querySelector(`.clicker2`);
const myPj = document.querySelector(`.clicker3`);
const heart = document.querySelector(`.navimg1`);
const computer = document.querySelector(`.navimg2`);
const project = document.querySelector(`.navimg3`);
heart.addEventListener("mouseover", function () {
  document.querySelector(`#homeie`).style.backgroundImage =
    "url(https://wallpaperaccess.com/full/1216317.png)";
});
home.addEventListener("mousemove", function () {
  document.querySelector(`#homeie`).style.backgroundImage = "";
});
computer.addEventListener("mousemove", function () {
  document.querySelector(`.about`).style.background = "#202020";
});
aboutMe.addEventListener("mousemove", function () {
  document.querySelector(`.about`).style.background = "";
});
project.addEventListener("mousemove", function () {
  document.querySelector(`.myProject`).style.backgroundImage =
    "url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/HjH5lgeHeix7kfhup/videoblocks-2d-animation-back-view-of-three-people-standing-in-front-of-business-graphics-team-of-men-and-women-working-on-project-together-teamwork-lifestyle-professionals_hnvpndexu_thumbnail-1080_01.png)";
  document.querySelector(`.videoContent1`).classList.add("videoContent");
  document.querySelector(`.videoContent2`).classList.add("videoContent");
});
myPj.addEventListener("mousemove", function () {
  document.querySelector(`.myProject`).style.backgroundImage = "";
  document.querySelector(`.videoContent1`).classList.remove("videoContent");
  document.querySelector(`.videoContent2`).classList.remove("videoContent");
});
