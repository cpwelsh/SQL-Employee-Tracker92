
const inquirer = require('inquirer');
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    password: process.env.SQL_PASSWORD
  });
   
 
   


let departments = []

let managers = []



const prompt = [{
    type: 'list',
    name: 'menu',
    choices: ['View all departments', 'View all Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update Employee Role']
}]

function userPrompt() {
    inquirer.prompt(prompt).then(answers => {
        const selection = answers.menu
        switch (selection) {
            case 'View all departments':
                viewAllDepartments()
                break
            case 'View all Roles':
                viewAllRoles()
                break
            case 'View All Employees':
                viewAllEmployees()
                break
            case 'Add a Department':
                addADepartment()
                break
            case 'Add a Role':
                addARole()
                break
            case 'Add an Employee':
                addAnEmployee()
                break
            case 'Update Employee Role':
                updateEmployeeRole()
                break
        }
    })
}

function viewAllDepartments() {
    connection.query(
        'SELECT * FROM `departments`',
        [],
        function(err, results) {
          console.log(results);
        }
      );
}

function viewAllRoles() {

}

function viewAllEmployees() {

}

function addADepartment() {
    const departmentPrompt = [{
        type: 'input',
        name: 'department',
        message: 'What is the name of the department?'
    }]
}

function addARole() {
    const rolePrompt = [{
        type: 'input',
        name: 'role',
        message: 'What is the name of the role?'
    }, {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for this role?'
    }, {
        type: 'menu',
        name: 'roleDepartment',
        choices: departments

    }]
}

function addAnEmployee() {
    const employeePrompt = [{
        type: 'input',
        name: 'firstName',
        message: 'What is the first name of the employee?'
    },{
        type: 'input',
        name: 'lastName',
        message: 'What is the last name of the employee?'
    },{
        type: 'input',
        name: 'employeeRole',
        message: 'What is the employees role?'
    },{
        type: 'menu',
        name: 'employeeManager',
        choices: managers
    }]
}

function updateEmployeeRole() {

}

