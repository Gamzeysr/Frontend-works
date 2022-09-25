const form = document.getElementById("form");
const validation = document.getElementById("validation");
const number = document.getElementById("tcId");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (number.value) {
    let arr = number.value.split("");
    let arrEven = arr.filter((el, i) => i % 2 !== 1 && i < 10);
    let arrOdd = arr.filter((el, i) => i % 2 == 1 && i < 8);

    let arrEvenSum = arrEven.reduce((acc, el) => +el + acc, 0) * 7;
    let arrOddSum = arrOdd.reduce((acc, el) => +el + acc, 0);

    let digit10 = (arrEvenSum - arrOddSum) % 10;

    let digit11 =
      (arr.slice(0, 9).reduce((acc, el) => +el + acc, 0) + digit10) % 10;

    if (
      arr[0] !== "0" &&
      arr[9] == digit10 &&
      arr[10] == digit11 &&
      arr.length == 11
    ) {
      validation.innerHTML = `${number.value} is a valid TC ID`;
      document.querySelector("body").classList.add("bg-success");
      document.querySelector("h2").classList.add("text-white");
    } else {
      validation.innerHTML = `${number.value} is not a valid TC ID`;
      document.querySelector("body").classList.add("bg-danger");
      document.querySelector("h2").classList.add("text-white");
    }
  } else {
    validation.innerHTML = "Enter an ID to control!";
  }
});
number.addEventListener("click", (e) => {
  document.querySelector("body").classList.remove("bg-success");
  document.querySelector("h2").classList.remove("text-white");
  document.querySelector("body").classList.remove("bg-danger");
  validation.innerHTML = "We will never share your ID";
  number.value = "";
});