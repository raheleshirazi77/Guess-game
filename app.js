// variabels
let user = document.getElementById('user'),
    btn = document.getElementById('btn'),
    output = document.getElementById('displayAns'),
    roundGame = 5;

// function create random number
function createNumberRandom() {
    return Math.floor(Math.random() * 101)
}
// create random number
const randomNumber = createNumberRandom()
console.log(randomNumber)

// click on the button => display answer user
btn.addEventListener('click', checkAndDisplayInfo);
// check
function checkAndDisplayInfo() {
    const inputValue = user.value;
    if (inputValue === '') {
        alert("enter your number, try again")
    } else if (isNaN(inputValue)) {
        alert("enter your number, try again")
    } else {
        output.textContent = inputValue;
        if (inputValue == randomNumber) {
            alert("you win💥")
            btn.disabeld = true;
        } else {
            if (roundGame < 0) {
                alert(`your ${roundGame} have a chance; try agein;`)
            } else {
                roundGame--
                output.textContent = `You lost the chance ${roundGame} to play`
            }
        }
    }
}

// check random number == input value


