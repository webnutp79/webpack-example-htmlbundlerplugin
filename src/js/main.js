import getDateString from "./date.js";

// Bootstrap 5
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

// Print the current time
document.querySelector(".js-content").innerHTML = `It's ${getDateString()} `;

// Display the Bootstrap modal window in Bootstrap 5
new bootstrap.Modal(document.querySelector(".js-modal"), {
  keyboard: true,
}).show();
