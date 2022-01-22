class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choice) {
        return this.answer === choice; // Contrôle si la réponse est bonne
    }
}
// QUESTIONS
let questions = [
    new Question("Combien y a t-il de couleurs dans Magic?", 
    ["3", "4", "5", "6"], 
    "5"),
    new Question("Qu'indique la capacité Vigilance sur une créature?", 
    ["Elle peut attaquer dès qu'elle arrive en jeu", "Elle peut attaquer sans s'engager", "Elle ne peut pas être détruite", "Elle  ne peut pas être bloquée"], 
    "Elle peut attaquer sans s'engager"),
    new Question("Comment s'appelle le fait de changer sa main de départ?", 
    ["Un Mulligan", "Un moule et gagne", "Un Mouligane", "Un Mulegane"],
    "Un Mulligan"),
    new Question("Qu'indique la capacité Célérité (Haste) sur Une créature?", 
    ["Elle peut attaquer dès qu'elle arrive en jeu", "Elle peut attaquer sans s'engager", "Elle ne peut pas être détruite", "Elle  ne peut pas être bloquée"], 
    "Elle peut attaquer dès qu'elle arrive en jeu"),
    new Question("Combien de cartes contient un deck de format Construit?", 
    ["40 minimum", "50 minimum", "60 minimum", "65 minimum"], 
    "60 minimum"),
    new Question("A quel moment se situe la phase d'Entretien?", 
    ["Avant la phase de dégagement", "Entre la phase de dégagement et la phase de pioche", "Entre la phase de pioche et la première phase principale", "Entre la phase principale et la phase de combat"], 
    "Entre la phase de dégagement et la phase de pioche"),
    new Question("En quelle année a été créé le jeu Magic : The Gathering?", 
    ["1991", "1992", "1993", "1994"], 
    "1993"),
    new Question("Combien d'exemplaires d'une même carte un deck peut il contenir?", 
    ["1", "2", "3", "4"], 
    "4"),
    new Question("Combien d'exemplaires d'une même carte Légendaire un deck peut il contenir?", 
    ["1", "2", "3", "4"], 
    "4"),
    new Question("A quel moment est il possible de lancer un sort de Rituel (Sorcery)?", 
    ["A n'importe quel moment pendant mon propre tour", "Pendant une des phase principale de mon propre tour", "A n'importe quel moment pendant le tour de mon adversaire", "Pendant une des phases principales du tour de mon adversaire"], 
    "Pendant une des phase principale de mon propre tour")
];
console.log(questions);

class Quiz {  // STOCKAGE
    constructor(questions) {
        this.score = 0; // Stockage du score
        this.questions = questions; // Stockage des questions
        this.currentQuestionIndex = 0; // Index de la question actuelle
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex]; // Permet d'afficher la question actuelle
    }
// SCORE ET AVANCEMENT DANS LE QUIZ
    guess(answer) {
        if (this.getCurrentQuestion().isCorrectAnswer(answer)) { // Vérifie si c'est 'true'(=== true)
            this.score++;
        }
        this.currentQuestionIndex++;
    }
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length; 
    }
}


// AFFICHAGE
const display = {
    // FONCTION D'AFFICHAGE
    elementShown: function(id, text) { // On pointe l'id et on y ajoute le texte
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    // AFFICHAGE FIN DU QUIZ
    endQuiz: function() {
        endQuizHTML = // Utilisation de `` pour injecter du contenu HTML
            `<h1>Quiz Terminé !</h1>
            <h3>Votre Score est de : ${quiz.score} / ${quiz.questions.length}</h3>`; // Récuparation dynamique des données
            this.elementShown("quiz", endQuizHTML);
            console.log(endQuiz);
    },
    // AFFICHAGE QUESTION
    question: function() {
        this.elementShown("question", quiz.getCurrentQuestion().text);
        console.log(question);
    },
    // AFFICHAGE DES CHOIX
    choices: function() {
        let choices = quiz.getCurrentQuestion().choices;
        console.log(choices);
    // PRISE EN COMPTE REPONSE UTILISATEUR
        guessHandler = (id, guess) => { //Compare la réponse utilisateur et la bonne réponse
            document.getElementById(id).onclick = function() {
                quiz.guess(guess);
                quizApp();
            }
        };
        // AFFICHAGE DES CHOIX DU TABLEAU
        for(let i = 0; i < choices.length; i++) {
            this.elementShown("choice" + i, choices[i]); // Permet de cibler  id choice0, choice1, choice2, choice3
            guessHandler("guess" + i, choices[i]); // Permet de cibler les id guess0, guess1, guess2, guess3 
        }
    },
    // AFFICHAGE PROGRESSION
    progress: function() {
        let currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.elementShown('progress', "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
        console.log(progress);
    }
}

//LOGIQUE DU JEU
quizApp = () => {
    if (quiz.hasEnded()) {
        //END
        display.endQuiz();
    } else {
        //QUESTION
        display.question();
        //CHOICES
        display.choices();
        //PROGRESS
        display.progress();
    }
}

// CREATION DU QUIZ
let quiz = new Quiz(questions);
quizApp();
console.log(quiz);

function increment(){
    if (quiz.currentQuestionIndex < (quiz.questions.length -1)) {
        quiz.currentQuestionIndex++
    }
    quizApp()
}
function decrement(){
    quiz.currentQuestionIndex = quiz.currentQuestionIndex === 0 ? 0 : quiz.currentQuestionIndex -1
    quizApp()
}



// let answerClass = 'neutral'
//     if (question.reponseUtilisateur.length > 0){
//       answerClass = value === guess.getCurrentQuestion().isCorrectAnswer(answer) ? 'correct' : value === question.reponseUtilisateur ? 'erreur' : 'attente'
//     }
//     element.setAttribute('class', answerClass)
//     element.addEventListener('click', function onClick(event, value) {
//       const v = event.target.value
//       quizz.questions[index].reponseUtilisateur = v
//       quizApp()
//     })
