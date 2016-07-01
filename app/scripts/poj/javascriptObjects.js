var months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
]


function RadioForm () {
	//todo this.getCurrent value

	this.createForm = function () {
		this.select = document.createElement("select");
		this.items = [];
	}
	this.addChild = function (name) {
		console.log(name)
		this.items.push (name)
		this.select.options[this.select.options.length] = new Option(name, name);

	}
	this.addToDocument = function () {
		document.body.appendChild(this.select);
	}
	this.addToParent = function (parent) {
		parent.appendChild(this.select)
	}

}

MonthRadioForm.prototype = new RadioForm();
YearRadioForm.prototype = new RadioForm();

function MonthRadioForm () {
	this.addMonths =function() {
		var arrayLength = months.length;
		for (var i = 0; i < arrayLength; i++) {
  			this.addChild(months[i]);
		}			
	}
}

function YearRadioForm() {
	this.Test = function () {
		this.currentYear = new Date().getFullYear();
		this.currentYearInt = parseInt(this.currentYear)

		for (var j =0; j < 15; j++) {

			this.addChild(this.currentYearInt + j)
		}
	}
}






