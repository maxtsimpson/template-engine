const mainMenuOrExit = "At any time enter 'X' to return to the main menu or 'exit' to quit"

menuObject = {
mainMenu: `
    Select from the following options

    1. Add a new employee
    2. List current employees
    3. Render to html

    ${mainMenuOrExit}
`,

employeeList: `

    1. Edit an employee

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