const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
  {
    message: "What is the title of your project?",
    name: "name"
  },
  {
    message: "Table of Contents Generated",
    name: "Table of Contents",
    type: "list",
    choices: ["Installation (#Installation), Usage(#Usage), License(#License), Contributors(#Contributors), Tests(#Tests), Questions(#Questions)"]
  },
  {
    name: "Description",
    message: "Describe your project?",
    type: "input",
  },

  {
    name: "Installation",
    message: "Installation Instructions?",
    type: "input",
  },

  {
    name: "Usage",
    message: "Usage?",
    type: "input",
  },

  {
    name: "Contributors",
    message: "Contributing People?",
    type: "input",
  },

  {
    name: "Tests",
    message: "Tests?",
    type: "input",
  },

  {
    message: "License?",
    name: "Licenses",
    type: "checkbox",
    choices: ["Unlicensed" , "MIT" , "ISC" , "Apache"]
  },

  {
    message: "GitHub Username to link Questions to?",
    name: "Questions",
    type: "input",
    message: "Email?",
    type: "input",
  },

]



const writeToFile = (data) => {
  fs.writeFile(`${data.name}.readme`, JSON.stringify(data, null, 2), (err) => {
    err ? console.error(err) : console.log("Success!");
  })
}

const askAQuestion = (questionsToAsk, cb) => {
  inquirer.prompt(questionsToAsk)
  .then(cb)
  .catch(console.error)
}



askAQuestion(questions, writeToFile);

