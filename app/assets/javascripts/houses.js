$(document).ready(function() {
  var navListItems = $('ul.setup-panel li a'),
      allWells = $('.setup-content');

  allWells.hide();

  navListItems.click(function(e){
    e.preventDefault();
    var $target = $($(this).attr('href')),
      $item = $(this).closest('li');

    if (!$item.hasClass('disabled')) {
      navListItems.closest('li').removeClass('active');
      $item.addClass('active');
      allWells.hide();
      $target.show();
    }
  });

  $('ul.setup-panel li.active a').trigger('click');

  $('#activate-step-2').on('click', function(e) {
    $('ul.setup-panel li:eq(1)').removeClass('disabled');
    $('ul.setup-panel li a[href="#step-2"]').trigger('click');
    $(this).remove();
  })

  $('#activate-step-3').on('click', function(e) {
    $('ul.setup-panel li:eq(2)').removeClass('disabled');
    $('ul.setup-panel li a[href="#step-3"]').trigger('click');
    $(this).remove();
  })

  $('#activate-step-4').on('click', function(e) {
    $('ul.setup-panel li:eq(3)').removeClass('disabled');
    $('ul.setup-panel li a[href="#step-4"]').trigger('click');
    $(this).remove();
  })

  $('#activate-step-5').on('click', function(e) {
    $('ul.setup-panel li:eq(4)').removeClass('disabled');
    $('ul.setup-panel li a[href="#step-5"]').trigger('click');
    $(this).remove();
  })

  $('#activate-step-6').on('click', function(e) {
    $('ul.setup-panel li:eq(5)').removeClass('disabled');
    $('ul.setup-panel li a[href="#step-6"]').trigger('click');
    $(this).remove();
  })

  $('#activate-step-7').on('click', function(e) {
    $('ul.setup-panel li:eq(6)').removeClass('disabled');
    $('ul.setup-panel li a[href="#step-7"]').trigger('click');
    $(this).remove();
  })
});

console.log(gon.house);

var footage = parseInt(gon.house.footage);
var after_value = parseInt(gon.house.after_value);
var interest = parseInt(gon.house.interest);
var loan_term = parseInt(gon.house.loan_term);
var pmi_upfront = parseInt(gon.house.pmi_upfront);
var pmi_recurring = parseInt(gon.house.pmi_recurring);
var purchase_cost_total = parseInt(gon.house.purchase_cost_total);
var purchase_cost_inspection = parseInt(gon.house.purchase_cost_inspection);
var purchase_cost_appraisal = parseInt(gon.house.purchase_cost_appraisal);
var closing_costs = parseInt(gon.house.closing_costs);
var rehab_cost_exterior = parseInt(gon.house.rehab_cost_exterior);
var rehab_cost_interior = parseInt(gon.house.rehab_cost_interior);
var rehab_cost_electrical = parseInt(gon.house.rehab_cost_electrical);
var rehab_cost_plumbing = parseInt(gon.house.rehab_cost_plumbing);
var rehab_cost_appliances = parseInt(gon.house.rehab_cost_appliances);
var rehab_cost_landscaping = parseInt(gon.house.rehab_cost_landscaping);
var rehab_cost_misc = parseInt(gon.house.rehab_cost_misc);
var income_gross_rent = parseInt(gon.house.income_gross_rent);
var income_other_rent = parseInt(gon.house.income_other_rent);
var expenses_total = parseInt(gon.house.expenses_total);
var expenses_taxes = parseInt(gon.house.expenses_taxes);
var expenses_insurance = parseInt(gon.house.expenses_insurance);
var expenses_management = parseInt(gon.house.expenses_management);
var expenses_maintanance = parseInt(gon.house.expenses_maintanance);
var expenses_expenditures = parseInt(gon.house.expenses_expenditures);
var expenses_landscaping = parseInt(gon.house.expenses_landscaping);
var expenses_misc = parseInt(gon.house.expenses_misc);
var assumptions_vacancy = parseInt(gon.house.assumptions_vacancy);
var assumptions_appreciation = parseInt(gon.house.assumptions_appreciation);
var assumptions_income_increase = parseInt(gon.house.assumptions_income_increase);
var assumptions_expense_increase = parseInt(gon.house.assumptions_expense_increase);
var assumptions_selling_cost = parseInt(gon.house.assumptions_selling_cost);
var assumptions_land_value = parseInt(gon.house.assumptions_land_value);
var total_cash_needed = 0;
var valuation = 0;
var operation_income_year = 0;
var operation_income_month = 0;
var operation_net_operating_income_year = 0;
var operation_net_operating_income_month = 0;
var loan_payments = 0;
var operation_cash_flow_year = 0;
var operation_cash_flow_month = 0;
var return_cap_rate = 0;
var return_cash_on_cash = 0;
var return_total_profit_sold = 0;
var return_return_on_investment = 0;
var return_annualized_total_return = 0;
var ratios_rent_to_value = 0;
var ratios_gross_rent_multiplier = 0;
var ratios_debt_coverage_ratio = 0;
var tax_loan_principle = parseInt(gon.house.tax_loan_principle);
var tax_cumulative_loan_principle = parseInt(gon.house.tax_cumulative_loan_principle);
var tax_loan_interest = parseInt(gon.house.tax_loan_interest);
var tax_cumulative_interest = parseInt(gon.house.tax_cumulative_interest);
var purchase_price = parseInt(gon.house.purchase_price);
var after_value = parseInt(gon.house.after_value);
var down_payment = parseInt(gon.house.down_payment);
var amount_financed = parseInt(gon.house.amount_financed);

function rehabCostTotal(rehab_cost_exterior, rehab_cost_interior, rehab_cost_electrical, rehab_cost_plumbing, rehab_cost_appliances, rehab_cost_landscaping, rehab_cost_misc) {
  rehab_cost_total = rehab_cost_exterior + rehab_cost_interior + rehab_cost_electrical + rehab_cost_plumbing + rehab_cost_appliances + rehab_cost_landscaping + rehab_cost_misc
};

function purchaseCostTotal(purchase_cost_inspection, purchase_cost_appraisal, closing_costs){
  var closing_costs_decimal = closing_costs/100;
  closing_costs_amount = after_value * closing_costs_decimal;
  purchase_cost_total = purchase_cost_inspection + purchase_cost_appraisal + closing_costs_amount;
};

function amountFinanced(purchase_price, down_payment){
  amount_financed = purchase_price - down_payment;
  down_payment_percent = purchase_price/down_payment;
};

function cashNeeded(down_payment, closing_costs, rehab_cost_total) {
  total_cash_needed = down_payment + closing_costs + rehab_cost_total;
};
console.log(total_cash_needed);

function grossRentYear(income_gross_rent, assumptions_vacancy) {
  var vacancy_decimal = assumptions_vacancy/100
  yearly_rent = income_gross_rent * 12;
  vacancy_year = yearly_rent * vacancy_decimal;
  operation_income_year = yearly_rent - vacancy_year;
  monthly_rent_vacancy = operation_income_year/12;
};

function expensesTotal(expenses_taxes, expenses_insurance, expenses_management, expenses_maintanance, expenses_expenditures, expenses_landscaping) {
  var maintanance_decimal = expenses_maintanance/100;
  var maintanance_amount = yearly_rent * maintanance_decimal ;
  var expenditures_decimal = expenses_expenditures/100;
  var expenditures_amount = yearly_rent * expenditures_decimal;
  var management_decimal = expenses_management/100;
  var management_amount = vacancy_year * management_decimal;

  expenses_total = expenses_taxes + expenses_insurance + maintanance_amount + expenditures_amount + management_amount + expenses_landscaping;
};

function valuation1(purchase_price, footage) {
  valuation = purchase_price/footage;
};

function operationNetOperatingIncomeYear1(operation_income_year, expenses_total) {
  operation_net_operating_income_year = operation_income_year - expenses_total;
};

function cashFlowYear(operation_net_operating_income_year, loan_payments) {
  operation_cash_flow_year = operation_net_operating_income_year - loan_payments
};

function capRate(operation_net_operating_income_year, purchase_price){
  return_cap_rate = operation_net_operating_income_year/purchase_price
};

function returnCashOnCash(operation_cash_flow_year, total_cash_needed) {
  return_cash_on_cash = operation_cash_flow_year/total_cash_needed
};

function sellingCosts(after_value, assumptions_selling_cost){
  selling_costs = (after_value * assumptions_selling_cost) / 100;
};

function appreciationTotal(after_value, assumptions_appreciation) {
  appreciation_total = (after_value * assumptions_appreciation)
};

function incomeIncrease(yearly_rent, assumptions_income_increase) {
  yearly_rent = yearly_rent * assumptions_income_increase/100
};

function expenseIncrease(expenses_total, assumptions_expense_increase) {
  expenses_total = expenses_total * assumptions_expense_increase
};

function vacancyYear(yearly_rent, assumptions_vacancy) {
  vacancy_year = yearly_rent * assumptions_vacancy
};

function returnOnInvestment(operation_cash_flow_year, after_value, selling_costs) {
  return_on_investment = (operation_cash_flow_year + after_value - amount_financed - selling_costs - total_cash_needed)/total_cash_needed
};

function rentToValue(income_gross_rent, purchase_price) {
  ratios_rent_to_value =  income_gross_rent / purchase_price*100
};

function grossRentMultiplier(purchase_price, yearly_rent) {
  ratios_gross_rent_multiplier = purchase_price/yearly_rent
}

function propertyValue(appreciation_total, after_value) {
  property_value = appreciation_total + after_value
};

function totalEquity(property_value, amount_financed) {
  total_equity = property_value - amount_financed
};

function loanPayment(amount_financed, loan_term, interest) {
  var monthlyRate = interest/12;
  loan_payments = amount_financed * (monthlyRate * Math.pow((1 + monthlyRate), loan_term))/(Math.pow((1 + monthlyRate), loan_term) - 1);
};

function debtCoverageRatio(operation_net_operating_income_year, loan_payments) {
  ratios_debt_coverage_ratio = operation_net_operating_income_year/loan_payments
};

function getValues(){

  var div = document.getElementById("Result");

  div.innerHTML = "";

  var balVal = validateInputs(amount_financed);
  var intrVal = validateInputs(interest);


  if (balVal && intrVal){
    div.innerHTML += amort(amount_financed, interest, loan_term);
  }
  else{
    div.innerHTML += "Please Check your inputs and retry - invalid values.";
  }

}


function amort(amount_financed, interest, loan_term){
	var monthlyRate = interest/12;

  loanPayment(amount_financed, loan_term, interest);

  var result = ""

	result += "<table style=background-color:#ffffff class=table ><thead><tr style=background-color:#337ab7><th>Month #</th><th>Balance</th>" +
        "<th>Interest</th><th>Principal</th></tr></thead><tbody>";


	for (var count = 0; count < loan_term + 1; ++count){
		var interest = 0;

		var monthlyPrincipal = 0;

		result += "<tr>";

		result += "<td>" + (count + 1) + "</td>";


		result += "<td> $" + amount_financed.toFixed(2) + "</td>";

		interest = amount_financed * monthlyRate;
		result += "<td> $" + interest.toFixed(2) + "</td>";

		monthlyPrincipal = loan_payments - interest;
		result += "<td> $" + monthlyPrincipal.toFixed(2) + "</td>";

		result += "</tr>";

    var housingArr = {};
    housingArr.amount_financed = amount_financed;
    housingArr.interest = interest;
    housingArr.monthlyPrincipal = monthlyPrincipal;

		amount_financed = amount_financed - monthlyPrincipal;

    console.log(housingArr);

	}

    result += "</tbody></table>";

    return result;
}

function validateInputs(value)
{
	if ((value == null) || (value == ""))
	{
		return false;
	}
	else
	{
		return true;
	}
}

amountFinanced(purchase_price, down_payment);
rehabCostTotal(rehab_cost_exterior, rehab_cost_interior, rehab_cost_electrical, rehab_cost_plumbing, rehab_cost_appliances, rehab_cost_landscaping, rehab_cost_misc);
purchaseCostTotal(purchase_cost_inspection, purchase_cost_appraisal, closing_costs);
cashNeeded(down_payment, closing_costs, rehab_cost_total);
grossRentYear(income_gross_rent, assumptions_vacancy);
// vacancyYear(yearly_rent, assumptions_vacancy);
expensesTotal(expenses_taxes, expenses_insurance, expenses_management, expenses_maintanance, expenses_expenditures, expenses_landscaping);
valuation1(purchase_price, footage);
operationNetOperatingIncomeYear1(operation_income_year, expenses_total);
cashFlowYear(operation_net_operating_income_year, loan_payments);
capRate(operation_net_operating_income_year, purchase_price);
returnCashOnCash(operation_cash_flow_year, total_cash_needed);
sellingCosts(after_value, assumptions_selling_cost);
appreciationTotal(after_value, assumptions_appreciation);
incomeIncrease(yearly_rent, assumptions_income_increase);
expenseIncrease(expenses_total, assumptions_expense_increase);
vacancyYear(yearly_rent, assumptions_vacancy);
returnOnInvestment(operation_cash_flow_year, after_value, selling_costs);
rentToValue(income_gross_rent, purchase_price);
grossRentMultiplier(purchase_price, yearly_rent);
loanPayment(amount_financed, loan_term, interest)
debtCoverageRatio(operation_net_operating_income_year, loan_payments);
propertyValue(appreciation_total, after_value);
totalEquity(property_value, amount_financed);
window.onload = function() {
  getValues();
  console.log(operation_cash_flow_year);

console.log(loan_payments);
};


// console.log(down_payment_percent);
