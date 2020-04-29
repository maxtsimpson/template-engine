const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const promptFunctions = require("./lib/promptFunctions");
const banner = require("./banner")
const menuObject = require("./lib/menuObject.js")
const inquirer = require("inquirer");
const path = require("path");
const employeeRepo = require("./lib/employeeRepo")
const io = require("./lib/io");

const Rx = require("rxjs");
const { v1: uuidv1 } = require('uuid');

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let propertiesToSet = [];



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let main = function () {

    const prompts = new Rx.Subject();
    console.log(banner)

    let repo = new employeeRepo();
    let promptClass = new promptFunctions(repo,prompts);
    // promptClass.employeeRepo = repo;

    let errorCallback = error => { throw "an error has occured. please start the program again" };
    let completeCallback = complete => { console.log("questions complete") }

    let mainMenuHandler = answer => {
        let context = (answer.name.split("-")[0])
        if (answer.answer.toLowerCase() === "exit") {
            prompts.complete();
        } else {
            switch (context) {
                case "mainMenu":
                    switch (answer.answer) {
                        case "1":
                            promptClass.addEmployee(answer);
                            prompts.next(promptClass.makePrompt("please type in an employee type and press enter","addEmployeeInitial"));
                            break;
                        case "2":
                            promptClass.listCurrentEmployees();
                            let prompt = (promptClass.makePrompt(menuObject.mainMenu.msg,"mainMenu"))
                            prompts.next(prompt);
                            break;
                        case "3":
                            renderToHtml(repo);
                            break;
                        default:
                            promptClass.invalidOption();
                            break;
                    }
                    break;
                case "editEmployee":
                    promptClass.editEmployee();
                    break;
                case "addEmployeeInitial":
                case "addEmployee":
                    promptClass.addEmployee(answer);
                    break;
                default:
                    promptClass.invalidOption();
                    break;
            }
        }
    }


    inquirer.prompt(prompts).ui.process.subscribe(mainMenuHandler, errorCallback,completeCallback);
    // inquirer.prompt(prompts).ui.process.subscribe(addEmployee, errorCallback,completeCallback);

    prompts.next(promptClass.makePrompt(menuObject.mainMenu.msg, "mainMenu"));

    // After the user has input all employees desired, call the `render` function (required
    // above) and pass in an array containing all employee objects; the `render` function will
    // generate and return a block of HTML including templated divs for each employee!

    // renderedHTML = render(repo.getEmployees());

    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the
    // `output` folder. You can use the variable `outputPath` above target this location.
    // Hint: you may need to check if the `output` folder exists and create it if it
    // does not.

    // writeToFile("./output.html", renderedHTML);

    // HINT: each employee type (manager, engineer, or intern) has slightly different
    // information; write your code to ask different questions via inquirer depending on
    // employee type.

    // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
    // and Intern classes should all extend from a class named Employee; see the directions
    // for further information. Be sure to test out each class and verify it generates an 
    // object with the correct structure and methods. This structure will be crucial in order
    // for the provided `render` function to work!```
}

const renderToHtml = function (repo) {
    console.log("attempting to render")
    renderedHTML = render(repo.getEmployees());
    console.log({renderedHTML})
    io.writeToFile("./output.html", renderedHTML);
}


main();