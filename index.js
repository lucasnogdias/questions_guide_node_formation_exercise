const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Question = require('./database/Question');
const Answer = require('./database/Answer');

//Database
connection.
  authenticate()
  .then(()=>{
    console.log("Connected to the DB");
  })
  .catch((err)=>{
    console.log(err);
  })

//Telling express to use EJS as View Engine
app.set('view engine', 'ejs');

//Set up 'public' folder for static files
app.use(express.static('public'));

//Set up bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Set up server routes
app.get("/", (req, res) => {
  Question.findAll({ raw: true, order:[
    ['createdAt', 'DESC'] //ASC for ascending, DESC for descending
  ] }).then(questions => {
    res.render("index", { questions });
  });
});

app.get("/ask", (req, res) => {
  res.render("ask");
});

app.post("/save_question", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  Question.create({
    title: title,
    description: description,
  }).then(() => {
    res.redirect('/');
  });
});

app.get('/question/:id', (req, res) => {
  let id = req.params.id;
  Question.findOne({
    where: {id: id}
  }).then( question => {
    if (question){
      //Find all previous answers for this question
      Answer.findAll({
        where: {questionId: question.id},
        order: [['createdAt', 'DESC']],
      }).then( answers => {
        res.render("question", {
          question,
          answers
        });
      });
    } else {
      console.log("No question found for that ID");
      res.redirect("/");
    }
  });
});

app.post('/answer', (req, res) => {
  let body = req.body.body;
  let questionId = req.body.question;
  Answer.create({
    body,
    questionId,
  }).then(() => {
    res.redirect("/question/"+questionId);
  })
})

//Set up server listen
let port = 8080;

app.listen(port, () => {
  console.log("App running on port", port)
});