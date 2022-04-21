"use strict";
function Employee(id, name, department, level, image) {
    this.id = id;
    this.fullName = name;
    this.department = department;
    this.level = level;
    this.ImageUrl = image;
    this.salary = this.monthSalary();
    this.netSalary = this.salary - (this.salary * .075);
    document.write(`<br><br><br> The employee name is ${this.fullName} and has an ID of (${this.id}). <br> He/She is a ${this.level} working with ${this.department} team. <br>His/Her salary is (${this.salary}) and his/her net salary is (${this.netSalary}).`)
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
    let salary = this.salary = Math.floor(Math.random() * (max - min)) + min;
    return salary;
}
let Ghazi_Samer = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "./images/Ghazi_Samer.png");
let Lana_Ali = new Employee("1001", "Lana Ali", "Finance", "Senior", "./images/Lana_Ali.png");
let Tamara_Ayoub = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "./images/Tamara_Ayoub.png");
let Safi_Walid = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "./images/Safi_Walid.png");
let Omar_Zaid = new Employee("1004", "Omar Zaid", "Development", "Senior", "./images/Omar_Zaid.png");
let Rana_Saleh = new Employee("1005", "Rana Saleh", "Development", "Junior", "./images/Rana_Saleh.png");
let Hadi_Ahmad = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "./images/Hadi_Ahmad.png");
