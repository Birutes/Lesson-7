var SalaryCalculator = {
	calculateSalary: function(proffession) {
		return (800 * proffession) * 70%;
	};
};


var mechanic = 1;
var developer = 4;
var doctor = 3;
var proffesor = 2;

var salary = SalaryCalculator.calculateSalary(mechanic);
console.log(salary);