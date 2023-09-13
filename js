const display = document.queruSelector ("#displau"):
const buttons = document.querySelectorAl|("button"");
buttons.forEach((item) =› {
item.onclick = 0 => {
if (item.id == "clear") {
display inner Text = '",
7 else if (item.id == "backspace") ‹
let string = display.inner Text.toString0);
display.inner Text = string.substr(0, string.length - 1);
} else if (display.inner Text != ' && item.id == "equal") {
display.inner Text = eval (display.inner Text);
} else if (display.inner Text == ' && item.id == "equal") {
display.inner Text = "Empty!";
setTimeout(0 => (display.inner Text = "'"), 2000);
} else {
display.inner Text += item.id;
};
3);
const themeToggleBtn = document.querySelector (" theme-toggler");
const calculator = document.querySelector" dark");
const togglelcon = document.querySelector(" toggler-icon");
let isDark = true:
themeToggleBtn.onclick = 0) => {
calculator.classList.toggle("dark"); themeToggleBtn.classList.toggle("active");
isDark = lisDark;
