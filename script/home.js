document.getElementById("latest-payment").style.display = "block";
document.getElementById("adding-money").style.display = "none";

document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("adding-money").style.display = "block";
    document.getElementById("latest-payment").style.display = "none";
  });
