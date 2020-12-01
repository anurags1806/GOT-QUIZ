var readlineSync = require("readline-sync");
var chalk = require("chalk");

const username = readlineSync.question("What is your name? ");
console.log(chalk.red.bold("Hello " + username));
console.log("\nWelcome to " + chalk.bgBlue.underline("THE Game of Thrones QUIZ ")+" by Anurag ");

function play(ques, options, ans)
{
  console.log(chalk.green("\n"+ques));
  for(let i=0; i<options.length;i++)
    console.log(i+1 + ". " + options[i]);
  let guess = readlineSync.question(chalk.rgb(0,191,255)("Choose the correct option ~ "));

  if(guess === ans )
  {
    score++;
    console.log(chalk.yellow("Correct answer"));
  }
  else{
    console.log(chalk.red("Wrong answer"));
  }
  console.log("Current score: "+score+"\n-------------");
}

let questions = [{
  ques: "Who is the Hound ?",
  options: ["Arya Stark", "Jaquen H'ghar", "Sandor Clegane", "Gregor Clegane"],
  ans: "3"
},{
  ques: "Who was three eyed Raven ?",
  options: ["Bran Stark", "Robb Stark", "Ned Stark", "Rickeon Stark"],
  ans: "1"
},{
  ques: "Who was Mother of Dragons ?",
  options: ["Sensa Stark", "Cersei Lannister", "Daenerys Targaryen", "Lysa Arryn"],
  ans: "3"
},{
  ques: "Who was the Mad King in Game of Thrones ?",
  options: ["Robert Baratheon", "Stannis Baratheon","Joffery Baratheon","Aerys II Targaryen"],
  ans: "4"
},{
  ques: "Who killed Tywin Lannister",
  options: ["Tyrion Lannister", "Oberyn Martell", "Arya Stark", "Theon Greyjoy"],
  ans: "1"
},
{
  ques: "Who rules dragonstone before Daenerys ?",
  options: ["Stannis Baratheon", "Rhaegar Daenerys", "Khal Drogo", "Renly Baratheon"],
  ans: "1"
},
{
  ques:"How many times has sansa stark been married ?",
  options: ["One time","Two times","Three times","She's not married."],
  ans: "2"
},
{
  ques:"What is Sigil of House Baratheon ",
  options: ["Lion","Black Stag","Direwolf","Golden Rose"],
  ans: "2"
}]

let highscorers = [{
  name: "Anurag",
  score:8
},
{
  name: "Samruddhi",
  score:7
}
]

let i=0, attempted=0, score=0;
do{
  play(questions[i].ques, questions[i].options, questions[i].ans);
  i++;
  attempted++;
  let user = readlineSync.question("Press enter key to continue....to exit press 'y' and enter...");
  if(user=="y")
    break;
}
while(i<questions.length)

console.log(chalk.inverse("Congrats! You completed the quiz.\n"))
console.log(chalk.bgRed("Final score: " + score +"/"+attempted));


if(score>=highscorers[0].score){
  console.log(chalk.rgb(255,192,203).bold("Yayy you got a high score"));
  console.log(
chalk.bold.hsl(244,50,90)("\n\nIf you have reached till maximum score,\n\nlet me know on Twitter ")
+
chalk.bgMagenta("@18anurag06.")
)
}

console.log(chalk.bold("\nHere are the top scorers so far:"));
for(let i=0; i<highscorers.length; i++)
{
  console.log(">" + highscorers[i].name + ": " + highscorers[i].score);  
}
