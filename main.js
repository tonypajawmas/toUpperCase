document
  .getElementById("upperCaseButton")
  .addEventListener("click", buttonClick);

function buttonClick() {
  let userInfo = document.getElementById("upperCaseInfo").value;
  let convertMsg = userInfo.toUpperCase();
  document.getElementById("upperCaseDisplay").innerText = convertMsg;
}
