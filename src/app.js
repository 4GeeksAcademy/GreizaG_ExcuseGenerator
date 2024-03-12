/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let excusePhrase = document.getElementById("excuse");
  console.log(excusePhrase.innerText);
  excusePhrase.innerText = "An eagle took my bag";
};
