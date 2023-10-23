const computer_choice_displayed = document.getElementById('computer-choice')
const user_choice_displayed = document.getElementById('user-choice')
const result_displayed = document.getElementById('result')

const possible_choice = document.querySelectorAll('button')

let user_choice
let computer_choice

possible_choice.forEach(possible_choice => possible_choice.addEventListener('click', (e) => {
    user_choice = e.target.id;
    user_choice_displayed.innerHTML = user_choice
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomnumber = Math.floor(Math.random() * 3) + 1
    // console.log(randomnumber)

    if (randomnumber === 1){
        computer_choice = 'rock'
    }
    if (randomnumber === 2){
        computer_choice = 'scissor'
    }
    if (randomnumber === 3){
        computer_choice = 'papper'
    }

computer_choice_displayed.innerHTML = computer_choice
}

function getResult(){
    if (computer_choice === user_choice){
        result = 'its a draw!'
    }
    

}