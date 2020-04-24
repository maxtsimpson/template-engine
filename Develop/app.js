const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const banner = require("./banner")
const menuObject = require("../Develop/menuObject.js")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Rx = require("rxjs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const writeToFile = function (fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The html file has been generated!');
    });
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let main = function () {

    console.log(banner)

    const prompts = new Rx.Subject();
    let i = 0;

    let makePrompt = function (msg,menuName) {
        return {
            type: 'input',
            name: `${menuName}-${i}`,
            message: `${msg}\n`,
        };
    }

    inquirer.prompt(prompts).ui.process.subscribe(answer => {
        console.log({answer});
        

        if (answer.answer.toLowerCase() === "exit") {
            prompts.complete();
        } else {
            i++;
            switch (answer.name.split("-")[0]) {
                case "mainMenu":
                        switch (answer.name.split("-")[1]) {
                            case "1":
                                    addEmployee();
                                break;
                            case "2":
                                    listCurrentEmployees();
                                break;
                            case "3":
                                    renderToHtml();
                                break;
                            default:
                                    invalidOption();
                                break;
                        }
                    break;
            
                case "employeeList":
                        editEmployee();
    
                default:
                        invalidOption();
                    break;
            }
            // prompts.next(makePrompt(menuObject.mainMenu,"mainMenu"));
        }
    },
        error => { throw new Error("an error has occured. please start the program again") },
        complete => console.log("questions complete")
    );
    
    prompts.next(makePrompt(menuObject.mainMenu,"mainMenu"));

    // After the user has input all employees desired, call the `render` function (required
    // above) and pass in an array containing all employee objects; the `render` function will
    // generate and return a block of HTML including templated divs for each employee!

    // renderedHTML = render(employeesArray);

    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the
    // `output` folder. You can use the variable `outputPath` above target this location.
    // Hint: you may need to check if the `output` folder exists and create it if it
    // does not.

    // writeToFile(outputPath, renderedHTML);

    // HINT: each employee type (manager, engineer, or intern) has slightly different
    // information; write your code to ask different questions via inquirer depending on
    // employee type.

    // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
    // and Intern classes should all extend from a class named Employee; see the directions
    // for further information. Be sure to test out each class and verify it generates an 
    // object with the correct structure and methods. This structure will be crucial in order
    // for the provided `render` function to work!```
}

main();