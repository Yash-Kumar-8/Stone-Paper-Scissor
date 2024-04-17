let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const getCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const rndm = Math.floor((Math.random()) * 3);
    return option[rndm]

}



const playGame = (userChoice) => {


    const compChoice = getCompChoice()
    console.log("user =", userChoice);
    console.log("computer =", compChoice);

   

    if (compChoice === "rock" && userChoice === "paper") {
        userScore++;
        document.getElementById("user-choice").innerText = userChoice;
        setTimeout(() => {
            document.getElementById("user-score").innerText = userScore;
            document.getElementById("comp-choice").innerText = compChoice;
            document.getElementById("msg").innerText = "You Won ! 🎉🎉";
        }, 1000)
    }

    else if (compChoice === "rock" && userChoice === "scissor") {
        compScore++;
        document.getElementById("user-choice").innerText = userChoice;
        setTimeout(() => {
            document.getElementById("comp-score").innerText = compScore;
            document.getElementById("comp-choice").innerText = compChoice;
            document.getElementById("msg").innerText = "Computer Won ! 🖥️🖥️"
        }, 1000)
    }
    else if (compChoice === "paper" && userChoice === "scissor") {
        userScore++;
        document.getElementById("user-score").innerText = userScore;
        document.getElementById("msg").innerText = "You Won ! 🎉🎉";
        document.getElementById("user-choice").innerText = userChoice;
        setTimeout(() => {
            document.getElementById("comp-choice").innerText = compChoice;
        }, 1000)    
    }

    else if (compChoice === "paper" && userChoice === "rock") {
        compScore++;
        document.getElementById("user-choice").innerText = userChoice;
        setTimeout(() => {
            document.getElementById("comp-score").innerText = compScore;
            document.getElementById("comp-choice").innerText = compChoice;
            document.getElementById("msg").innerText = "Computer Won ! 🖥️🖥️"
        }, 1000)
    }
    
    else if (compChoice === "scissor" && userChoice === "paper") {
        compScore++;
        document.getElementById("user-choice").innerText = userChoice;
        setTimeout(() => {
            document.getElementById("comp-score").innerText = compScore;
            document.getElementById("comp-choice").innerText = compChoice;
            document.getElementById("msg").innerText = "Computer Won ! 🖥️🖥️"
        }, 1000)
    }
    
    else if (compChoice === "scissor" && userChoice === "rock") {
        userScore++;
        document.getElementById("user-choice").innerText = userChoice;
        setTimeout(() => {
            document.getElementById("user-score").innerText = userScore;
            document.getElementById("comp-choice").innerText = compChoice;
            document.getElementById("msg").innerText = "You Won ! 🎉🎉";
        }, 1000)
    }
    else if (compChoice === "rock" && userChoice === "rock") {
        document.getElementById("user-choice").innerText = userChoice;
        setTimeout(() => {
            document.getElementById("comp-choice").innerText = compChoice;
            document.getElementById("msg").innerText = "Match Tied ! 🙆‍♂️🙆‍♂️";
        }, 1000)
    }
    else if (compChoice === "paper" && userChoice === "paper") {
        document.getElementById("user-choice").innerText = userChoice;
        setTimeout(() => {
            document.getElementById("comp-choice").innerText = compChoice;
            document.getElementById("msg").innerText = "Match Tied ! 🙆‍♂️🙆‍♂️";
        }, 1000)
    }
    else if (compChoice === "scissor" && userChoice === "scissor") {
        document.getElementById("user-choice").innerText = userChoice;
        setTimeout(() => {
            document.getElementById("comp-choice").innerText = compChoice;
            document.getElementById("msg").innerText = "Match Tied ! 🙆‍♂️🙆‍♂️";
        }, 1000)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    })
}
)

