const mainMenuOrExit = "At any time enter 'X' to return to the main menu or 'exit' to quit"

// menuObject = {
//     mainMenu: {
//         msg: `
//             Select from the following options

//             ${mainMenuOrExit}
//         `,
//         choices: [
//             "1. Add a new employee",
//             "2. List current employees",
//             "3. Render to html"
//         ]
//     },

menuObject = {
    mainMenu: {
        msg: `
            Select from the following options

            "1. Add a new employee"
            "2. List current employees"
            "3. Render to html"

            ${mainMenuOrExit}
        `
    },

    employeeList: `

    To edit an employee enter the index number or enter 'X' to return to the main menu

    ${mainMenuOrExit}
`,

    editEmployeePrompt: `
    
    Enter an employee id

    ${mainMenuOrExit}
`,

    invalidEmployeePrompt: `
    
    The employee id was not valid. enter again

    ${mainMenuOrExit}
`
}

module.exports = menuObject;