/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = [
    "The joker",
    "The thief",
    "The crow",
    "John",
    "The neighborhood",
    "My place"
  ];
  let action = [
    "slipped",
    "engolfed",
    "fell",
    "dropped",
    "trew up",
    "vanished"
  ];
  let place = [
    "at my place",
    "in the yard",
    "on the street",
    "in the car",
    "at the restaurant",
    "by the beach"
  ];
  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomPlace = Math.floor(Math.random() * place.length);
  document.querySelector(
    "#excuse"
  ).innerHTML = `${who[randomWho]} ${action[randomAction]}  ${place[randomPlace]}. So Im not gonna make it`;
};
