"use strict";
let allEmployees = [];
function Employee(id, name, department, level, image) {
    this.id = id;
    this.fullName = name;
    this.department = department;
    this.level = level;
    this.ImageUrl = image;
    this.salary = this.monthSalary();
    this.netSalary = this.salary - (this.salary * .075);
    
    allEmployees.push(this);
}
Employee.prototype.monthSalary = function () {
    let max;
    let min;
    if (this.level == "Senior") {
        min = 1500;
        max = 2000;
    } else if (this.level == "Mid-Senior") {
        min = 1000;
        max = 1500
    } else {
        min = 500;
        max = 1000
    }
    let salary = this.salary = Math.floor(Math.random() * (max - min + 1)) + min;
    return salary;
}
let Ghazi_Samer = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "./picture/Ghazi.jpg");
let Lana_Ali = new Employee("1001", "Lana Ali", "Finance", "Senior", "./picture/Lana.jpg");
let Tamara_Ayoub = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "./picture/Tamara_Ayoub.jpg");
let Safi_Walid = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "./picture/Safi.jpg");
let Omar_Zaid = new Employee("1004", "Omar Zaid", "Development", "Senior", "./picture/Omar.jpg");
let Rana_Saleh = new Employee("1005", "Rana Saleh", "Development", "Junior", "./picture/Rana.png");
let Hadi_Ahmad = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "./picture/Hadi.png");
let myCard = document.getElementById("oldCard");

Employee.prototype.render = function () {
    let myCard = document.getElementById("oldCard");
    let conntainer = document.createElement("div");
    myCard.appendChild(conntainer);
    let image = document.createElement("img");
    image.src = this.ImageUrl;
    conntainer.appendChild(image);
    image.style.width = "12rem";
    image.style.height = "14rem";
    let info = document.createElement("p");
    info.textContent = `Name:${this.fullName} -ID: ${this.id}  Department:${this.department} -Level:${this.level} -Salary:${this.salary} -Net Salary:${this.netSalary}`;
    conntainer.appendChild(info);
    info.style.width = "20rem"   
}
document.getElementById("oldCard").style.display = "grid";
document.getElementById("oldCard").style.gridTemplateColumns = "1fr 3fr ";

for (let i = 0; i < allEmployees.length; i++) {
    allEmployees[i].render();
}
newCard.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    for (let j = 0; j < allEmployees.length; j++) {
        var newId = 1001 + j;
    }
    event.preventDefault();
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let newImg = event.target.newImg.value;
    let newEmployee = new Employee(newId, fullName, department, level, newImg);
    newEmployee.render();
    saveData(allEmployees);
}

// saveData(newEmployee);
function saveData(data) {
    let stringfiyData = JSON.stringify(data)
    localStorage.setItem("employees", stringfiyData);
}
function getData() {
    let retrievedData = localStorage.getItem("employees");
    let arrayData = JSON.parse(retrievedData);
    if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
            new Employee(arrayData[i].id, arrayData[i].fullName, arrayData[i].department, arrayData[i].level, arrayData[i].ImageUrl, arrayData[i].salary, arrayData[i].netSalary);

        }
    }

}
getData();

function renderTable() {


    let tableEl = document.getElementById("tableId");
    let header = document.createElement('thead');
    tableEl.appendChild(header);
    let headingRow = document.createElement('tr');
    header.appendChild(headingRow);

    let thEl = document.createElement('th');
    headingRow.appendChild(thEl);
    thEl.textContent = 'Department';

    let thE2 = document.createElement('th');
    headingRow.appendChild(thE2);
    thE2.textContent = '# of employees';

renderTable();

tableFooter();

E
        }if(this.department=="Finance"){
            financeNum+=i;
            financeSalary+=this.salary;
            financeAverage+=administrationSalary/administrationNum
        }
        totalNum=administrationNum+marketingNum+developmentNum+financeNum
        totalSalary=administrationSalary+marketingSalary+developmentSalary+financeSalary
        totalAverage=administrationAverage+marketingAverage+developmentAverage+financeAverage
    }
    document.getElementById("administrationNum").innerHTML = administrationNum;
}
tableBody();