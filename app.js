const container = document.getElementById('container');
const submit = document.getElementById('submit');
const input = document.getElementById('input');

function createDivs(num) {
    container.textContent = ''; // Clear the container
    for (let i = 0; i < num * 10; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        
        // Add event listener for changing color on hover
        square.addEventListener('mouseover', function() {
            const randomColour = generateNewColor();
            square.style.backgroundColor = randomColour;
        });
    }
    container.style.width = `${num * 30}px`; // Adjust container width based on square size
}

function getInput() {
    const inputValue = parseInt(input.value);
    if (inputValue > 0 && inputValue <= 100) {
        return inputValue;
    } else {
        alert("Please enter a valid number between 1-100");
        return null; // Return null to indicate an invalid input
    }
}

function generateNewColor() {
    let hexColorRep = "#";

    for (let index = 0; index < 6; index++) {
        const randomPosition = Math.floor(Math.random() * hexCharacters.length);
        hexColorRep += getCharacter(randomPosition);
    }

    return hexColorRep;
}

submit.addEventListener('click', function() {
    const userInput = getInput();
    if (userInput !== null) {
        createDivs(userInput);
    }
});

const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function getCharacter(index) {
    return hexCharacters[index];
}