document.getElementById("bold").addEventListener("click", function () {
  const input = document.getElementById("input");
  if (input.style.fontWeight === "bold") {
    input.style.fontWeight = "normal";
    bold.style.backgroundColor = "transparent";
  } else {
    input.style.fontWeight = "bold";
    bold.style.backgroundColor = "DarkTurquoise";
  }
});
document.getElementById("italic").addEventListener("click", function () {
  const input = document.getElementById("input");
  if (input.style.fontStyle === "italic") {
    input.style.fontStyle = "normal";
    italic.style.backgroundColor = "transparent";
  } else {
    input.style.fontStyle = "italic";
    italic.style.backgroundColor = "DarkTurquoise";
  }
});
document.getElementById("underline").addEventListener("click", function () {
  const input = document.getElementById("input");
  if (input.style.textDecoration === "underline") {
    input.style.textDecoration = "none";
    underline.style.backgroundColor = "transparent";
  } else {
    input.style.textDecoration = "underline";
    underline.style.backgroundColor = "DarkTurquoise";
  }
});
document.getElementById("left").addEventListener("click", function () {
  const input = document.getElementById("input");
  if (input.style.textAlign === "left") {
    input.style.textAlign = "justify";
    left.style.backgroundColor = "transparent";
  } else {
    input.style.textAlign = "left";
    left.style.backgroundColor = "DarkTurquoise";
  }
});
document.getElementById("center").addEventListener("click", function () {
  const input = document.getElementById("input");
  if (input.style.textAlign === "center") {
    input.style.textAlign = "initial";
    center.style.backgroundColor = "transparent";
  } else {
    input.style.textAlign = "center";
    center.style.backgroundColor = "DarkTurquoise";
  }
});
document.getElementById("right").addEventListener("click", function () {
  const input = document.getElementById("input");
  if (input.style.textAlign === "right") {
    input.style.textAlign = "initial";
    right.style.backgroundColor = "transparent";
  } else {
    input.style.textAlign = "right";
    right.style.backgroundColor = "DarkTurquoise";
  }
});
document.getElementById("justify").addEventListener("click", function () {
  const input = document.getElementById("input");
  if (input.style.textAlign === "justify") {
    input.style.textAlign = "initial";
    justify.style.backgroundColor = "transparent";
  } else {
    input.style.textAlign = "justify";
    justify.style.backgroundColor = "DarkTurquoise";
  }
});

document.getElementById("font-size").addEventListener("input", function () {
  const input = document.getElementById("input");
  const fontSize = document.getElementById("font-size");
  const fontSizeValue = fontSize.value;
  input.style.fontSize = fontSizeValue + "px";
  input.style.lineHeight = (fontSizeValue * 1.4) + "px";
});

document.getElementById("alphabet").addEventListener("click", function () {
  const input = document.getElementById("input");
  const computedStyle = window.getComputedStyle(input);
  const currentTransform = computedStyle.textTransform;
  if (currentTransform === "none") {
    input.style.textTransform = "uppercase";
    alphabet.style.backgroundColor = "DeepSkyBlue";
  } else if(currentTransform === "uppercase"){
    input.style.textTransform = "lowercase";
    alphabet.style.backgroundColor = "DarkTurquoise";
  }
  else {
    input.style.textTransform = "none";
    alphabet.style.backgroundColor = "transparent";
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
  const colorInput = document.getElementById("color");
  colorInput.value = "#000000";
});
