alert(
  "It will generate random colors with their HEX code \nCreated By - Vaibhav Nagre"
);
window.onload = () => {
  const btn = document.querySelector("#btn"),
    colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"],
    len = colors.length,
    body = document.body,
    hexCode = document.querySelector("#hexCode");
  var i = 0;
  hexCode.innerHTML = "#FFFFFF";

  btn.addEventListener("click", () => {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += colors[Math.floor(Math.random() * len)];
    }
    body.style.backgroundColor = hex;
    hexCode.innerHTML = hex;
  });
};
