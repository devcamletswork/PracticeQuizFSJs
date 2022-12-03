// 1. Create a multidimensional array to hold quiz questions and answers

const questions = [
    ['Whats your name?', 'cam'],
    ['How old are you?', '34'],
    ['Where are you from?','cincinnati']
  ];
  // 2. Store the number of questions answered correctly
  
    let answersCorrect = 0;
    let answersFalse = 0;
  /* 
    3. Use a loop to cycle through each question
        - Present each question to the user
        - Compare the user's response to answer in the array
        - If the response matches the answer, the number of correctly
          answered questions increments by 1
  */
  
  for (let i = 0; i < questions.length; i++){
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);
    if (response === answer){
     answersCorrect++;
    } 
  };
  // 4. Display the number of correct answers to the user
  let html = 
      `<h1> You got ${answersCorrect} question(s) correct </h2>`;
  
  document.querySelector('main').innerHTML = html;
  alert(answersCorrect);
  