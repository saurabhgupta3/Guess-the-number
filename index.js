let form = document.querySelector(".inp");
let input = document.querySelector("#inid");
let result = document.querySelector("#result");

let random = Math.floor(Math.random() * 100 + 1);

let cnt = 0;
let flag1 = 0;
let flag2 = 0;
console.log(random);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = input.value;
    if (user === "") {
        alert("Please enter a number!");
        return;
    }
    cnt += 1;
    if (user == random) {
        result.textContent = `Congrats! You guessed the number in ${cnt} times`;
        cnt = 0;
        random = Math.floor(Math.random() * 100 + 1);
    } else if (user < random) {
        if (flag1 == 0) {
            result.textContent = "Uff! the number is bigger";
            flag1 = 1;
        } else {
            result.textContent = "Abhi aur bada hai";
            flag1 = 0;
        }
    } else {
        if (flag2 == 0) {
            result.textContent = "sorry! The number is smaller";
            flag2 = 1;
        } else {
            result.textContent = "abhi aur chhota hai";
            flag2 = 0;
        }
    }
    input.value = "";
});
