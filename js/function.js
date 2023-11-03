document.getElementById("bold").addEventListener("click", function () {
  const input = document.getElementById("input");
  if (input.style.fontWeight === "bold") {
    input.style.fontWeight = "normal";
    bold.style.backgroundColor = "transparent";
    bold.style.color = "black";
  } else {
    input.style.fontWeight = "bold";
    bold.style.backgroundColor = "purple";
    bold.style.color = "white";
  }
});
document.getElementById("italic").addEventListener("click", function () {
  const input = document.getElementById("input");
  if (input.style.fontStyle === "italic") {
    input.style.fontStyle = "normal";
    italic.style.backgroundColor = "transparent";
    italic.style.color = "black";
  } else {
    input.style.fontStyle = "italic";
    italic.style.backgroundColor = "purple";
    italic.style.color = "white";
  }
});
document.getElementById("underline").addEventListener("click", function () {
  const input = document.getElementById("input");
  if (input.style.textDecoration === "underline") {
    input.style.textDecoration = "none";
    underline.style.backgroundColor = "transparent";
    underline.style.color = "black";
  } else {
    input.style.textDecoration = "underline";
    underline.style.backgroundColor = "purple";
    underline.style.color = "white";
  }
});
document.getElementById("left").addEventListener("click", function () {
  const input = document.getElementById("input");
  if (input.style.textAlign === "left") {
    input.style.textAlign = "justify";
    left.style.backgroundColor = "transparent";
    left.style.color = "black";
  } else {
    input.style.textAlign = "left";
    left.style.backgroundColor = "purple";
    center.style.backgroundColor = "transparent";
    right.style.backgroundColor = "transparent";
    justify.style.backgroundColor = "transparent";
    center.style.color = "black";
    right.style.color = "black";
    justify.style.color = "black";
    left.style.color = "white";
  }
});
document.getElementById("center").addEventListener("click", function () {
  const input = document.getElementById("input");
  if (input.style.textAlign === "center") {
    input.style.textAlign = "initial";
    center.style.backgroundColor = "transparent";
    center.style.color = "black";
  } else {
    input.style.textAlign = "center";
    center.style.backgroundColor = "purple";
    left.style.backgroundColor = "transparent";
    right.style.backgroundColor = "transparent";
    justify.style.backgroundColor = "transparent";
    left.style.color = "black";
    right.style.color = "black";
    justify.style.color = "black";
    center.style.color = "white";
  }
});
document.getElementById("right").addEventListener("click", function () {
  const input = document.getElementById("input");
  if (input.style.textAlign === "right") {
    input.style.textAlign = "initial";
    right.style.backgroundColor = "transparent";
    right.style.color = "black";
  } else {
    input.style.textAlign = "right";
    right.style.backgroundColor = "purple";
    left.style.backgroundColor = "transparent";
    center.style.backgroundColor = "transparent";
    justify.style.backgroundColor = "transparent";
    left.style.color = "black";
    center.style.color = "black";
    justify.style.color = "black";
    right.style.color = "white";
  }
});
document.getElementById("justify").addEventListener("click", function () {
  const input = document.getElementById("input");
  if (input.style.textAlign === "justify") {
    input.style.textAlign = "initial";
    justify.style.backgroundColor = "transparent";
    justify.style.color = "black";
  } else {
    input.style.textAlign = "justify";
    justify.style.backgroundColor = "purple";
    left.style.backgroundColor = "transparent";
    right.style.backgroundColor = "transparent";
    center.style.backgroundColor = "transparent";
    left.style.color = "black";
    right.style.color = "black";
    center.style.color = "black";
    justify.style.color = "white";
  }
});

document.getElementById("font-size").addEventListener("input", function () {
  const input = document.getElementById("input");
  const fontSize = document.getElementById("font-size");
  const fontSizeValue = fontSize.value;
  input.style.fontSize = fontSizeValue + "px";
  input.style.lineHeight = fontSizeValue * 1.4 + "px";
});

document.getElementById("alphabet").addEventListener("click", function () {
  const input = document.getElementById("input");
  const computedStyle = window.getComputedStyle(input);
  const currentTransform = computedStyle.textTransform;
  if (currentTransform === "none") {
    input.style.textTransform = "uppercase";
    alphabet.style.backgroundColor = "purple";
    alphabet.style.color = "white";
  } else if (currentTransform === "uppercase") {
    input.style.textTransform = "lowercase";
    alphabet.style.backgroundColor = "purple";
    alphabet.style.color = "white";
  } else {
    input.style.textTransform = "none";
    alphabet.style.backgroundColor = "transparent";
    alphabet.style.color = "black";
  }
});

document.getElementById("color").addEventListener("input", function () {
  const input = document.getElementById("input");
  const colorInput = document.getElementById("color");
  const selectedColor = colorInput.value;
  input.style.color = selectedColor;
});

document.getElementById("reset").addEventListener("click", function () {
  const input = document.getElementById("input");
  input.style.fontWeight = "normal";
  input.style.fontStyle = "normal";
  input.style.textDecoration = "none";
  input.style.textAlign = "initial";
  input.style.textTransform = "none";
  input.value = "";

  const fontSizeInput = document.getElementById("font-size");
  fontSizeInput.value = "16";
  input.style.fontSize = "16px";
  bold.style.backgroundColor = "transparent";
  italic.style.backgroundColor = "transparent";
  underline.style.backgroundColor = "transparent";
  left.style.backgroundColor = "transparent";
  center.style.backgroundColor = "transparent";
  right.style.backgroundColor = "transparent";
  justify.style.backgroundColor = "transparent";
  alphabet.style.backgroundColor = "transparent";
  bold.style.color = "black";
  italic.style.color = "black";
  underline.style.color = "black";
  left.style.color = "black";
  center.style.color = "black";
  right.style.color = "black";
  justify.style.color = "black";
  alphabet.style.color = "black";
  const colorInput = document.getElementById("color");
  colorInput.value = "#000000";
});
