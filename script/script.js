document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let acountNumber = document.getElementById("acount-number").value;
    // let lengthAcount = acountNumber.length;
    // let convertedAcountNumber = Number(lengthAcount);

    let pinNumber = document.getElementById("pin-number").value;
    let convertedPinNumber = Number(pinNumber);
    // console.log(convertedPinNumber);

    if (acountNumber.length === 11) {
      if (convertedPinNumber) {
        window.location.href = "./home.html";
      } else {
        alert("pin thik nai");
      }
    } else {
      alert("acount number thik nai");
    }
  });
