const resultText = document.querySelector("#result-text");

const playerChoices = document.querySelectorAll(".player-choices button");

const scoreText = document.querySelector('#score-text');

const gameplayText = document.querySelector('.gameplay pre');

const jotaroTimestop = new Audio('/audio/jotaroTimestop2.mp3');

const html = document.querySelector('html');

let isAnimation = false;
playerChoices.forEach((button) => {

        if (isAnimation === false) {
            button.addEventListener("click", () => {
                let playerChoice = button.id;
                playRound(playerChoice, getComputerChoice());
                playerChoice = "";
            })
        }


})

function paintAction(humanChoice) {

    switch (humanChoice) {
        case 'timestop':
            gameplayText.textContent = 
            `
    ⣀⣼⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣄⣀⡀⠀⠀⠘⣿⣿⡸⢦⣃⡀⠇⠸⠃⡿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣂⣤⠎⠀⠀
⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣼⣅⣏⡇⠀⡇⢭⣉⠁⢰⣷⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀
⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣌⡂⠠⠞⢹⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⡾⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠛⠛⢻⣿⠟⠛⠛⣿⡿⠿⢿⣿⣿⣿⣿⣿⣷⣦⣉⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⡿⠀
⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠁⣦⠀⠈⣿⠀⠀⢠⡟⠀⠀⢸⣿⠻⣿⣿⣿⣿⣿⣿⣿⠀⢉⣿⣿⣿⣿⣿⣛⠉⠀⠀
⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⣇⣀⢀⣤⠼⢦⠀⠀⠀⣴⠟⢷⣄⣀⣤⣿⣿⣿⣿⣿⣿⡿⣿⣿⣾⣾⣿⣿⣿⣿⠿⠋⠀⠀⠀
⠀⠀⣿⣿⡿⠿⢿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣶⣼⣷⣄⢸⣧⣶⣾⣿⣿⣿⢿⣿⡿⠻⢿⡙⠶⢾⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠹⣿⣿⣄⣴⣿⣿⣿⡿⠛⢿⣁⣈⣿⣿⣿⣹⣿⣿⣿⠯⣿⡿⠿⣏⣹⣧⣌⣻⠿⠷⠒⠋⠁⢀⡼⢿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⣤⠴⢿⣿⡟⢦⣀⣠⣬⣿⣿⣿⣿⡟⠀⣹⠶⣾⠀⠀⠹⣿⡟⠻⠷⣶⣤⣤⣤⠔⠉⠀⢸⡿⠛⠻⣿⣿⣧⣀⠀⠀⠀⠀
⠀⢀⣴⣿⠿⠍⠁⢀⡜⠛⡇⠀⢹⠁⠀⠀⠀⠙⠿⠃⠀⣀⣀⣼⡀⠀⠀⠉⠀⠀⠀⠀⠈⠉⢹⠀⠀⠀⠈⣠⡾⡗⢿⣿⣿⠁⠀⠀⠀⠀
⠀⣼⣿⠇⠀⠀⠀⢹⢷⣷⡷⠀⠐⡄⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠸⠀⠀⠀⢸⣿⡆⠑⢸⣿⢻⡇⠀⠀⠀⡴
⠀⢸⣿⡆⠀⠀⠀⠸⡎⢷⣿⠀⠀⡇⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣇⡀⢸⣿⠃⠀⠀⠀⡴⠀
⠀⠂⠻⣧⠀⠀⠀⠠⡇⢼⣿⡆⠀⡇⠀⠀⠀⠀⠀⠀⠀⠈⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⠟⢁⣿⡇⠀⠀⠀⢸⠁⠀
⠀⠀⠈⠹⠟⠛⠒⠒⣿⡌⠻⡇⠀⢸⠀⠀⠀⠀⠀⣠⣤⣤⣠⣤⣶⣦⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣯⠀⢠⣾⣿⣷⣄⣠⠄⡇⠀⠀
⣄⣀⡀⠀⠀⠀⠀⠀⢸⣷⡀⣼⠀⠸⡀⠀⠀⠠⡾⠟⠛⠛⠛⠛⠋⠉⠙⠛⣛⠛⠀⠀⠀⠀⠀⠀⠀⣌⣉⣴⣿⣿⣿⣿⣿⣥⣾⡇⠀⠀
⣿⣿⣿⣿⣶⣦⣤⣤⣼⣿⣷⣼⡆⠀⣇⠀⠀⠀⠳⣄⣤⡤⠤⡶⠶⠤⣤⡤⠟⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠟⢻⣿⣿⣿⣿⠿⠟⢷⠀⠀
⣈⡉⠙⠛⠿⠿⣿⣿⣿⣿⣿⠀⣇⠀⠀⠀⠀⠀⠀⠀⠉⠙⢶⠗⠒⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠁⠀⣼⣿⣿⣿⣧⠀⠀⠘⢧⠀
⠀⠈⠉⠒⠲⠄⠀⠀⣿⣿⣿⠀⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠸⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⡞⠀⠀⠘⠉⠈⣿⣿⣿⠀⠀⠀⠀⠑
⠀⠀⠀⠀⠀⠀⠀⠀⠛⣿⣿⢰⡾⣿⢳⣄⠀⠀⠀⠀⠀⠀⠀⠹⡄⠀⠀⠀⠀⠀⠀⠀⣠⣴⣿⣿⠁⠀⠀⢀⡆⠀⣿⡟⡟⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⢸⣧⣿⣿⢸⣷⣄⠀⠀⣀⣤⣤⣤⣤⣤⣄⠀⠀⠀⣠⣾⢻⣿⣿⣟⡠⠖⠉⠉⠑⣄⢻⠧⠥⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⢸⣯⣿⣿⢸⣿⠈⣷⣴⣿⣿⣿⣿⣿⣿⣿⣷⣤⢾⣿⢸⣾⢸⣿⠟⠀⠀⠀⠀⠀⢸⣾⠐⠒⠂⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢸⡟⠻⢸⠈⢿⠀⣿⢿⣿⠿⣿⣿⣿⣿⣿⣿⣿⢹⣿⢸⣿⣿⠃⠀⠀⠀⠀⠀⠀⢈⣿⠀⠀⠀⠀⠀⠀⠀
            `
            jotaroTimestop.play();
            setTimeout(() => {

                isAnimation = true;
                returnAscii();
            }, 3000)
            setTimeout(() => {
                html.style.transition = 'filter 1.25s';
                html.style.filter = 'invert(1)'

                setTimeout(() => {
                   html.style.filter = 'invert(0%)' 
                }, 1250)

            }, 300)
    }

}

function returnAscii() {
    gameplayText.textContent=`
⠟⠁⠘⣿⣿⠛⠛⡟⠛⠛⢿⣿⣿⣿⣿⣿⡿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
⡄⠀⠀⠸⣿⡀⠀⠘⣆⠀⠘⣿⣿⣿⣿⣿⣿⣶⣶⣤⣈⠹⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣷⡾⠟⠻⠟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⡄⠀⠀⠘⣷⡀⠀⠘⣆⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠈⢿⣿⡿⠿⠟⠋⠉⡀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⡇⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣄⠀⠀⠸⣷⡀⠀⠘⡿⠃⠀⠙⠋⠉⠻⠛⠋⠀⠀⢀⣈⡁⠂⣀⣦⠀⠘⡀⠀⢧⠀⠘⣿⣿⣿⡏⠙⠿⣿⣿⡇⢀⢰⡇⠀⠀⠀⢼⣿⣿⣿⠉⠙⡏⠙⣿⣿
⣿⣿⣿⣆⠀⠀⠙⣿⡶⠂⠀⠀⢀⡀⠀⠀⠀⠀⠀⢀⠀⣈⣻⣿⡆⢉⣙⡄⠀⣇⠀⠈⣶⣶⡿⠟⠻⡁⠀⠀⣸⣿⡇⣾⠘⠇⠀⠈⠀⠈⣿⣿⡇⢠⢠⣇⣿⣟⡖
⣿⣿⣿⣿⣧⠀⠀⠈⠁⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⣿⠀⢿⣿⣿⣇⠈⢿⣷⠀⠘⠶⠒⢛⠹⣇⠐⠀⠃⠀⠀⣿⣿⡇⢿⠖⠂⠀⣀⣤⣴⣿⣿⡇⣸⢸⣿⣧⣿⣹
⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⢠⡀⠀⣿⠀⠸⣿⣿⣿⣶⣄⠹⡆⣶⠿⠛⣋⣰⣿⠀⡆⠠⠤⠃⠹⡿⠁⠀⣰⣿⣿⣿⣿⣿⣿⣿⡇⣷⠮⠭⠝⣿⣿
⣿⣿⣿⣿⣿⣿⣧⠀⠀⠈⠃⠀⠂⠀⠀⠀⣿⡇⢰⠋⠀⠀⢿⣿⣿⣿⣿⣄⠁⢹⡆⠿⣿⣿⣿⠀⢷⡤⠀⣀⣠⣤⣶⠶⠿⣿⡿⢿⣿⣿⣿⣿⠀⠇⢰⣶⣾⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⣰⣶⣄⠀⠀⠿⠃⠁⠀⠀⠀⠈⠻⡟⣿⣿⣿⣷⡀⠺⣿⣿⣿⣿⡆⢸⠀⣾⣿⣿⣿⣿⡀⠂⠀⠀⠀⠙⢿⣿⣿⣀⣠⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⠀⣰⣿⣯⣿⣿⡧⠀⠀⠀⠀⠀⠀⣀⣀⡀⠹⣿⣿⣿⣿⣷⣄⠘⣿⣿⣿⣧⠈⣁⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠉⢻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡃⣰⣿⣿⡟⢸⡟⠁⠀⠀⠀⣀⠀⠀⠀⠈⠁⠀⠙⢿⣿⣿⣿⣿⣆⡈⢻⣿⡙⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⢠⣷⠴⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡏⠿⣿⡿⢁⠎⢰⣷⡆⠀⣐⣿⣿⣦⣄⣀⣴⣶⣶⡄⠀⡉⠙⠛⠛⢷⣄⠙⣿⡌⢿⣿⣿⣿⣿⣷⡀⠀⠒⠖⠒⣤⠝⢣⣾⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡅⢐⣻⡇⡌⢠⣿⣿⠇⠀⣿⣿⣿⣿⣿⡿⠿⠿⠟⠃⠀⠻⣿⣷⣦⣤⡙⣇⠘⣿⠘⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⡀⢻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡇⠨⣽⠇⠀⠘⠛⠛⠀⢠⣿⣿⣿⣯⣤⣤⣶⣾⣿⣿⣧⠐⣌⠻⣿⣿⣇⢿⣧⣿⠀⣿⣿⣿⣿⣿⣷⢀⠀⠀⠀⠀⠀⣷⡄⢻⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣷⠈⠟⠀⣿⣿⣿⣿⢠⣿⡿⠿⠻⣿⣿⣿⠿⢿⣿⣿⣿⠀⣿⣧⡈⢿⣿⣾⣿⣏⡀⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⣿⣷⡀⠙⠿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣰⡦⣆⢸⣿⣿⣿⣿⣿⣭⣷⡄⡿⣉⣤⣶⣿⣿⣿⣿⠂⣿⣿⣿⣆⠻⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⠈⡇⠀⠀⠀⠀⣿⣿⣷⣦⣀⡀⠀⣹⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⡇⡾⢋⣴⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣧⠹⣿⣿⣿⡆⣿⣿⣿⣿⣿⣧⠐⠀⠀⠀⠈⠉⠛⣿⣿⣾⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⢴⠿⣿⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣆⠙⢿⣿⣧⠸⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠈⠀⠀⠈⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢋⠀⢠⣶⣶⣬⣉⡛⠹⠋⢠⣄⡉⠛⠛⢻⡿⠟⣻⣦⡈⠻⣷⡜⢿⣿⣿⣿⣿⣿⣷⡀⠀⠀⢶⣶⣾⣷⡄⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢁⡴⢃⣴⣿⣿⣿⣿⣿⣷⢀⠀⣿⣿⣿⣿⣶⡀⢠⣾⣿⣿⣿⡆⠹⣿⣾⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⢻⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⠀⢰⣿⣿⣿⣿⣿⣧⠈⢿⣿⣿⣿⣿⣦⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠈⠻⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⣈⣛⣿⣿⣻⣄⡛⠿⢛⣿⣿⠀⣼⣿⣿⣿⣿⣿⣿⣷⣄⠙⢿⣿⣿⣿⠃⡀⢻⣿⣽⣿⣿⣿⣿⣿⡿⠿⠿⠦⢶⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠻⠿⠛⠛⠻⠄⠉⠻⣿⣿⡏⢰⣿⣫⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⡈⠙⠾⣇⣀⠙⢿⡿⠟⢋⣩⣤⠴⠒⣠⣶⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⢴⣾⣿⣿⡶⠦⣄⠀⠀⠈⠻⢡⡿⢋⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⡈⠒⣀⣴⣶⡿⠛⣁⣂⣹⣭⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠘⠛⠛⠋⠀⠀⠀⠑⠀⠀⣠⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⢁⣴⣾⣿⣯⣤⣶⣿⣿⣿⣿⣿⣋⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠿⠿⠿⠛⠒⠦⡀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠁⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠠⣶⣿⡿⢶⠦⠀⠈⢰⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⠟⡿⠛⠁⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⠿⣯⣼⣿⣿⣿⣿⣿⣿⣿⣿
    `
}





function getComputerChoice() {
    randomVal = Math.random() * 100;
    console.log(randomVal);
    if (randomVal <= 100/3) {
        return "heart";
    }
    else if (randomVal > (100/3)*2) {
        return "ora";
    }
    else {
        return "timestop";
    }
}

function getHumanChoice() {
    console.log("Please enter your choice");
}

let humanScore = 0;
let computerScore = 0;
scoreText.textContent = `The score is ${humanScore} to ${computerScore}`;
const options = ["heart", "ora", "timestop"];

//heart loses to ora loses to timestop loses to (loop around - heart)
//thus if the human chooses the choice `after` the computer choice (in the order RPS) the human wins

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    humanChoiceIndex = options.indexOf(humanChoice);
    computerChoiceIndex = options.indexOf(computerChoice);

    if (humanChoice === computerChoice) {
        resultText.textContent = `${humanChoice} and ${computerChoice}... It's a tie! Try again:`
        return;
        }
    
    else if (humanChoiceIndex === (computerChoiceIndex+1) % options.length) {
        isAnimation = true;
        paintAction(humanChoice);
        humanScore++;
        resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;

    }
    else {
        computerScore++;
        resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;

    }
    scoreText.textContent = `The score is ${humanScore} to ${computerScore}`;

    printWinner(humanScore, computerScore);
}

function printWinner(humanScore, computerScore) {
    if (humanScore === 5) {
        scoreText.textContent = "You win!";
    }
    else if (computerScore === 5) {
        scoreText.textContent = "Dio wins...";
    }
    else {
        return;
    }
}







// function playGame() {
//     console.log("Welcome to heart ora timestop! Try your luck...");
//     for (let step = 0; step < 5; step++) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }

//     if (humanScore > computerScore) {
//         console.log(`The score is ${humanScore} to ${computerScore}! You win, human!`);
//     }
//     else {
//         console.log(`The score is ${computerScore} to ${humanScore}! You lose, human...`);
//     }
// }

// playGame();