
let clickCount = 0;

const button = document.getElementById("testButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    clickCount++;
    message.textContent = "你已經點擊 " + clickCount + " 次！";
});
