`use strict`;
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

    let thE3 = document.createElement('th');
    headingRow.appendChild(thE3);
    thE3.textContent = 'Total Salary';

    let thE4 = document.createElement('th');
    headingRow.appendChild(thE4);
    thE4.textContent = 'Average';
}
function tableFooter() {
    let tableEl = document.getElementById('tableId');
    let footer = document.createElement('tfoot');
    tableEl.appendChild(footer);
    let rowFooter = document.createElement('tr');
    footer.appendChild(rowFooter);
    let tdEl = document.createElement('td');
    rowFooter.appendChild(tdEl);
    tdEl.textContent = 'Total';

    tdEl  = document.createElement('td');
    rowFooter.appendChild(tdEl);
    tdEl.textContent = "Total number of employees";

    tdEl = document.createElement('td');
    rowFooter.appendChild(tdEl);
    tdEl.textContent = "Total salary for all departments";

    tdEl = document.createElement('td');
    rowFooter.appendChild(tdEl);
    tdEl.textContent = "Average salary for all departments";

}
renderTable();

tableFooter();

Employee.prototype.tableBody = function () {
    for (let i = 1; i < arrayData.length; i++) {
        if(this.department=="Administration"){
            administrationNum+=i;
            administrationSalary+=this.salary;
            administrationAverage+=administrationSalary/administrationNum
        }if(this.department=="Marketing"){
            marketingNum+=i;
            marketingSalary+=this.salary;
            marketingAverage+=administrationSalary/administrationNum
        }if(this.department=="Development"){
            developmentNum+=i;
            developmentSalary+=this.salary;
            developmentAverage+=administrationSalary/administrationNum
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
