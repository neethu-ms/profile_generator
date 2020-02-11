const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileGenerator = function(rl, callback) {
  let surveyInput = "";
  rl.question("What's your name? ", (answer) => {
    surveyInput += "This is " + answer + ". ";
    rl.question("What's an activity you like doing? ", (answer) => {
      surveyInput += "He/She like doing " + answer + ". ";
      rl.question("What do you listen to while doing that?", (answer) => {
        surveyInput += "While doing the activity he/she like to " + answer + ". ";

        rl.question("Which meal is your favourite?", (answer) => {
          surveyInput += "His/her favourite meal is " + answer + ". ";
          rl.question("What's your favourite thing to eat for that meal?", (answer) => {
            surveyInput += "Favourite thing in the meal is " + answer + ". ";
            rl.question("Which sport is your absolute favourite? ", (answer) => {
              surveyInput += "Favourite sport is " + answer + ". ";
              rl.question("What is your superpower? ", (answer) => {
                surveyInput += "His/her superpower is " + answer + ". ";
                callback(surveyInput);
              });
            });
          });
        });
      });
    });
  });

 
};


profileGenerator(rl, (surveyReport) => {
 
  console.log(surveyReport);
  rl.close();
});
//rl.close();