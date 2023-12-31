// LUMINENCE CALCULATOR

// Event Listener
document.getElementById("btn").addEventListener("click", showLuminence);

// Event Function
function showLuminence() {
  // Input
  let R = +document.getElementById("red").value;
  let G = +document.getElementById("green").value;
  let B = +document.getElementById("blue").value;

  console.log(R);
  console.log(G);
  console.log(B);

  // Process
  let brightness = Math.sqrt(0.299 * R ** 2 + 0.587 * G ** 2 + 0.114 * B ** 2);
  console.log(brightness);

  // Output
  document.getElementById("output").innerHTML = `Luminance = " ${brightness}`;

  document.getElementById("output").style.color = `rgb(${R}, ${G}, ${B})`;
  document.getElementById("btn").style.color = `rgb(${R}, ${G}, ${B})`;
}
