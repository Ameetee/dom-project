
function question() {
    // get correct answer
    let correctAnswers = ['Option1', 'option3', 'option2']
    // get users ansers
    let usersAnswers = [];
    let score = 0;
    // select the questions
    let question = document.getElementsByName('question');

    // looping through the questions
    for ( let i =0; i < question.length; i++) {
        // get each input for the question
        let inputs = question[1].getElementsByTagName('input');
        let answersFound = false;

        // we get the users answers and push it to the usersAnswers array
        for (let j =0; j < inputs.length; j++) {
            if ( inputs[].checked ) {
                usersAnswers.push(inputs[j].value);
                answersFound = true
            }
        }
    }
    // compare the users answers with the correct answers
    for ( let k = 0; k< correctAnswers.length; k++) {
        if ()
    }
}