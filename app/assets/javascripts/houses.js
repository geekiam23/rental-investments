$(document).ready(function() {
  var navListItems = $('ul.setup-panel li a'),
    allWells = $('.setup-content');

  allWells.hide();

  navListItems.click(function(e) {
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
var closing_cost = parseInt(gon.house.closing_costs);
var after_value = parseInt(gon.house.after_value);
var interest = parseInt(gon.house.interest);
var loan_term = parseInt(gon.house.loan_term);
var pmi_upfront = parseInt(gon.house.pmi_upfront);
var pmi_recurring = parseInt(gon.house.pmi_recurring);
var purchase_cost_total = 0;
var purchase_cost_inspection = parseInt(gon.house.purchase_cost_inspection);
var purchase_cost_appraisal = parseInt(gon.house.purchase_cost_appraisal);
var rehab_cost_exterior = parseInt(gon.house.rehab_cost_exterior);
var rehab_cost_interior = parseInt(gon.house.rehab_cost_interior);
var rehab_cost_electrical = parseInt(gon.house.rehab_cost_electrical);
var rehab_cost_plumbing = parseInt(gon.house.rehab_cost_plumbing);
var rehab_cost_appliances = parseInt(gon.house.rehab_cost_appliances);
var rehab_cost_landscaping = parseInt(gon.house.rehab_cost_landscaping);
var rehab_cost_misc = parseInt(gon.house.rehab_cost_misc);
var income_gross_rent = parseInt(gon.house.income_gross_rent);
var income_other_rent = parseInt(gon.house.income_other_rent);
var expenses_total = 0;
var rehab_cost_total = 0;
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
// var total_cash_needed = 0;
// var valuation = 0;
// var operation_income_year = 0;
// var operation_income_month = 0;
// var operation_net_operating_income_year = 0;
// var operation_net_operating_income_month = 0;
// var loan_payments = 0;
// var operation_cash_flow_year = 0;
// var operation_cash_flow_month = 0;
// var return_cap_rate = 0;
// var return_cash_on_cash = 0;
// var return_total_profit_sold = 0;
// var return_return_on_investment = 0;
// var return_annualized_total_return = 0;
// var ratios_rent_to_value = 0;
// var ratios_gross_rent_multiplier = 0;
// var ratios_debt_coverage_ratio = 0;
var tax_loan_principle = parseInt(gon.house.tax_loan_principle);
var tax_cumulative_loan_principle = parseInt(gon.house.tax_cumulative_loan_principle);
var tax_loan_interest = parseInt(gon.house.tax_loan_interest);
var tax_cumulative_interest = parseInt(gon.house.tax_cumulative_interest);
var purchase_price = parseInt(gon.house.purchase_price);
var after_value = parseInt(gon.house.after_value);
var down_payment = parseInt(gon.house.down_payment);
var amount_financed = parseInt(gon.house.amount_financed);


var calcVariables = getCalcVariables();

function getCalcVariables() {
  var closing_costs_amount = after_value * closing_cost/ 100;
  var yearly_rent = income_gross_rent * 12;
  var vacancy_decimal = assumptions_vacancy / 100;
  var vacancy_year = yearly_rent * vacancy_decimal;
  var maintanance_amount = yearly_rent * expenses_maintanance / 100;
  var expenditures_amount = yearly_rent * expenses_expenditures / 100;
  var management_amount = vacancy_year * expenses_management / 100;
  var monthlyRate = interest;
  var selling_costs = (after_value * assumptions_selling_cost) / 100;
  var total_cash_needed = down_payment + closing_costs_amount + rehab_cost_total;
  var appreciation_total = (after_value * assumptions_appreciation) / 100;
  var operation_income_year = yearly_rent - vacancy_year;
  var operation_net_operating_income_year = operation_income_year - expenses_total;
  var monthlyRate = interest;
  var amount_financed = purchase_price - down_payment;
  var down_payment_percent = purchase_price / down_payment;
  var monthlyRate = interest / 12;
  var loan_payments = amount_financed * (monthlyRate * Math.pow((1 + monthlyRate), loan_term)) / (Math.pow((1 + monthlyRate), loan_term) - 1);

  var operation_cash_flow_year = operation_net_operating_income_year - loan_payments;


  return {
    rehab_cost_total: rehab_cost_exterior + rehab_cost_interior + rehab_cost_electrical + rehab_cost_plumbing + rehab_cost_appliances + rehab_cost_landscaping + rehab_cost_misc,
    closing_costs_amount: after_value * closing_cost/ 100,
    purchase_cost_total: purchase_cost_inspection + purchase_cost_appraisal + closing_costs_amount,
    amount_financed: purchase_price - down_payment,
    down_payment_percent: purchase_price / down_payment,
    total_cash_needed: down_payment + closing_costs_amount + rehab_cost_total,
    vacancy_decimal: assumptions_vacancy / 100,
    yearly_rent: income_gross_rent * 12,
    vacancy_year: yearly_rent * vacancy_decimal,
    operation_income_year: yearly_rent - vacancy_year,
    monthly_rent_vacancy: operation_income_year / 12,
    ratios_gross_rent_multiplier: purchase_price / yearly_rent,
    maintanance_amount: yearly_rent * expenses_maintanance / 100,
    expenditures_amount: yearly_rent * expenses_expenditures / 100,
    management_amount: vacancy_year * expenses_management / 100,
    expenses_total: expenses_taxes + expenses_insurance + maintanance_amount + expenditures_amount + management_amount + expenses_landscaping,
    operation_net_operating_income_year: operation_income_year - expenses_total,
    monthlyRate: interest,
    amount_financed: purchase_price - down_payment,
    down_payment_percent: purchase_price / down_payment,
    monthlyRate: interest / 12,
    loan_payments: amount_financed * (monthlyRate * Math.pow((1 + monthlyRate), loan_term)) / (Math.pow((1 + monthlyRate), loan_term) - 1),
    operation_cash_flow_year: operation_net_operating_income_year - loan_payments,
    return_cap_rate: operation_net_operating_income_year / purchase_price,
    selling_costs: (after_value * assumptions_selling_cost) / 100,
    return_cash_on_cash: operation_cash_flow_year / total_cash_needed,
    ratios_debt_coverage_ratio: operation_net_operating_income_year / loan_payments,
    return_on_investment: (operation_cash_flow_year + after_value - amount_financed - selling_costs - total_cash_needed) / total_cash_needed,
    appreciation_total: (after_value * assumptions_appreciation) / 100,
    property_value: appreciation_total + after_value,
    ratios_rent_to_value: income_gross_rent / purchase_price * 100,
  }
}



function rehabCostTotal() {
  var rehab_cost_total = rehab_cost_exterior + rehab_cost_interior + rehab_cost_electrical + rehab_cost_plumbing + rehab_cost_appliances + rehab_cost_landscaping + rehab_cost_misc;
  $('.rehabTotal').html(rehab_cost_total);
};

function purchaseCostTotal() {
  var closing_costs_decimal = closing_cost / 100;
  var closing_costs_amount = after_value * closing_costs_decimal;
  var purchase_cost_total = purchase_cost_inspection + purchase_cost_appraisal + closing_costs_amount;
  $('.purchaseTotal').html(purchase_cost_total);
  $('.closingCostAmount').html(closing_costs_amount);
};

function amountFinanced() {
  var amount_financed = purchase_price - down_payment;
  var down_payment_percent = purchase_price / down_payment;
  $('.amountFin').html(amount_financed);
  $('.downPaymentPercent').html(down_payment_percent.toFixed(2));
};

function cashNeeded() {
  var total_cash_needed = down_payment + calcVariables.closing_costs_amount + calcVariables.rehab_cost_total;
  $('.TotalCashNeed').html(total_cash_needed);
};

function grossRentYear() {
  var vacancy_decimal = assumptions_vacancy / 100
  var yearly_rent = income_gross_rent * 12;
  var vacancy_year = yearly_rent * vacancy_decimal;
  var operation_income_year = yearly_rent - vacancy_year;
  var monthly_rent_vacancy = operation_income_year / 12;
  var ratios_gross_rent_multiplier = purchase_price / yearly_rent;
  $('.ratiosGrossRentMultiplier').html(ratios_gross_rent_multiplier.toFixed(2));
  $('.YearlyRent').html(yearly_rent);
  $('.vacancyYear').html(vacancy_year);
  $('.operationIncomeYear').html(operation_income_year);
};

function expensesTotal() {
  var maintanance_decimal = expenses_maintanance / 100;
  var maintanance_amount = calcVariables.yearly_rent * maintanance_decimal;
  var expenditures_decimal = expenses_expenditures / 100;
  var expenditures_amount = calcVariables.yearly_rent * expenditures_decimal;
  var management_decimal = expenses_management / 100;
  var management_amount = calcVariables.vacancy_year * management_decimal;
  var expenses_total = expenses_taxes + expenses_insurance + maintanance_amount + expenditures_amount + management_amount + expenses_landscaping;
  $('.maintananceAmount').html(maintanance_amount);
  $('.expendituresAmount').html(expenditures_amount);
  $('.managementAmount').html(management_amount);
  $('.ExpensesTotal1').html(expenses_total.toFixed(2));
};

function valuation1() {
  var valuation = purchase_price / footage;
  $('.valuation').html(valuation.toFixed(2));
};

function operationNetOperatingIncomeYear1() {
  var operation_net_operating_income_year = calcVariables.operation_income_year - calcVariables.expenses_total;
  $('.netOperatingIncome').html(operation_net_operating_income_year.toFixed(2));

};

function loanPayment() {
  var monthlyRate = interest / 12;
  var loan_payments = calcVariables.amount_financed * (monthlyRate * Math.pow((1 + monthlyRate), loan_term)) / (Math.pow((1 + monthlyRate), loan_term) - 1);
  $('.loanPayments').html(loan_payments.toFixed(2));
};

function cashFlowYear() {
  var operation_cash_flow_year = calcVariables.operation_net_operating_income_year - calcVariables.loan_payments;
  $('.cashFlowYear').html(operation_cash_flow_year.toFixed(2));
};

function capRate() {
  var return_cap_rate = calcVariables.operation_net_operating_income_year / purchase_price;
  $('.returnCapRate').html(return_cap_rate.toFixed(2));
};

function returnOnInvestment() {
  var return_on_investment = (calcVariables.operation_cash_flow_year + after_value - calcVariables.amount_financed - calcVariables.selling_costs - calcVariables.total_cash_needed) / calcVariables.total_cash_needed;
  $('.ratiosReturnOnInvestment').html(return_on_investment);
};

function returnCashOnCash() {
  var return_cash_on_cash = calcVariables.operation_cash_flow_year / calcVariables.total_cash_needed;
  $('.cashOnCash').html(return_cash_on_cash.toFixed(2));
};

function sellingCosts() {
  var selling_costs = (after_value * assumptions_selling_cost) / 100;
  $('.assumptionsSellingCosts').html(selling_costs);
};

function appreciationTotal() {
  var appreciation_total = (after_value * assumptions_appreciation) / 100;
  var property_value = appreciation_total + after_value;
  $('.assumptionsAppreciationTotal').html(appreciation_total);
  $('.propertyValue').html(property_value);
};

// function incomeIncrease(yearly_rent, assumptions_income_increase) {
//   yearly_rent = yearly_rent * assumptions_income_increase/100
// };

// function expenseIncrease(expenses_total, assumptions_expense_increase) {
//   expenses_total = expenses_total * assumptions_expense_increase
// };

// function vacancyYear(yearly_rent, assumptions_vacancy) {
//   vacancy_year = yearly_rent * assumptions_vacancy
// };



function rentToValue() {
  var ratios_rent_to_value = income_gross_rent / purchase_price * 100;
  $('.ratiosRentToValue').html(ratios_rent_to_value.toFixed(2));
};

function totalEquity() {
  var total_equity = calcVariables.property_value - calcVariables.amount_financed;
  $('.TotalEquity').html(total_equity);
};

function debtCoverageRatio() {
  var ratios_debt_coverage_ratio = calcVariables.operation_net_operating_income_year / calcVariables.loan_payments;
  $('.ratiosDebtCoverageRatio').html(ratios_debt_coverage_ratio);
};




function getValues() {

  var div = document.getElementById("Result");
  var projections = document.getElementById("Projections");
  var incomes = document.getElementById("Income");
  var expenses = document.getElementById("Expense");

  div.innerHTML = "";
  projections.innerHTML = "";
  incomes.innerHTML = "";
  expenses.innerHTML = "";

  var balVal = validateInputs(amount_financed);
  var intrVal = validateInputs(interest);

  if (balVal && intrVal) {
    div.innerHTML += amort(amount_financed, interest, loan_term, purchase_price, down_payment);
  } else {
    div.innerHTML += "Please Check your inputs and retry - invalid values.";
  }

  projections.innerHTML += projection(expenses_taxes, expenses_insurance, purchase_price, interest, loan_term, down_payment, closing_cost, after_value, rehab_cost_exterior, rehab_cost_interior, rehab_cost_electrical, rehab_cost_plumbing, rehab_cost_appliances, rehab_cost_landscaping, rehab_cost_misc);
  incomes.innerHTML += income(expenses_taxes, expenses_insurance);
  expenses.innerHTML += expense(expenses_taxes, expenses_insurance);


}

function projection(expenses_taxes, expenses_insurance, purchase_price, interest, loan_term, down_payment, closing_cost, after_value, rehab_cost_exterior, rehab_cost_interior, rehab_cost_electrical, rehab_cost_plumbing, rehab_cost_appliances, rehab_cost_landscaping, rehab_cost_misc) {

  // var amount_financed = purchase_price - down_payment;
  //
  // var rehab_cost_total = rehab_cost_exterior + rehab_cost_interior + rehab_cost_electrical + rehab_cost_plumbing + rehab_cost_appliances + rehab_cost_landscaping + rehab_cost_misc;
  //
  // var closing_costs_decimal = closing_cost/100;
  // var closing_costs_amount = after_value * closing_costs_decimal;
  // var total_cash_needed = down_payment + closing_costs_amount + rehab_cost_total;
  //
  // // var yearly_rent = $("#YearlyRent").val();
  // var yearly_rent = income_gross_rent * 12;
  // var vacancy_decimal = assumptions_vacancy/100
  // var vacancy_year = yearly_rent * vacancy_decimal;
  // // var operation_income_year = $("#operationIncomeYear").val();
  // var vacancy_year = yearly_rent * vacancy_decimal;
  // var operation_income_year = yearly_rent - vacancy_year;
  //
  //
  // var maintanance_decimal = expenses_maintanance/100;
  // var maintanance_amount = yearly_rent * maintanance_decimal ;
  // var expenditures_decimal = expenses_expenditures/100;
  // var expenditures_amount = yearly_rent * expenditures_decimal;
  // var management_decimal = expenses_management/100;
  // var management_amount = vacancy_year * management_decimal;
  //
  // var expenses_total = expenses_taxes + expenses_insurance + maintanance_amount + expenditures_amount + management_amount + expenses_landscaping;
  //
  //
  // // var loan_payments = $("#loanPayments").val();
  // var monthlyRate = interest/12;
  // var loan_payments = amount_financed * (monthlyRate * Math.pow((1 + monthlyRate), loan_term))/(Math.pow((1 + monthlyRate), loan_term) - 1);
  //
  //
  var appreciation_total = (after_value * assumptions_appreciation)/100;
  //
  var property_value = appreciation_total + after_value;

  // var loan_payments = $("#loanPayments").val();

  // var amount_financed = $("#amountFin").val();
  // //
  // var operation_income_year = $("#operationIncomeYear").val();
  // var property_value = $("#propertyValue").val();
  // var expenses_total = $('#ExpensesTotal1').val();
  //
  // var operation_net_operating_income_year = $("#netOperatingIncome").val();
  // var operation_cash_flow_year = $("#cashFlowYear").val();
  // var total_cash_needed = $("#TotalCashNeed").val();
  var operation_income_year = calcVariables.operation_income_year;
  var expenses_total = calcVariables.expenses_total;
  var operation_net_operating_income_year = calcVariables.operation_net_operating_income_year;
  var loan_payments = calcVariables.loan_payments;
  var property_value = calcVariables.property_value;
  var amount_financed = calcVariables.amount_financed;
  var expenses_total = calcVariables.expenses_total;
  var management_amount = calcVariables.management_amount;
  var maintanance_amount = calcVariables.maintanance_amount;
  var expenditures_amount = calcVariables.expenditures_amount;
  var total_cash_needed = calcVariables.total_cash_needed;

  var projections = ""

  projections += "<table style=background-color:#ffffff class=table ><thead><tr style=background-color:#337ab7><th>Year #</th><th>Net_Operating_Income</th><th>Cash_Flow</th><th>Property_Value</th><th>Loan_Balance</th><th>Total_Equity</th><th>Cash_On_Cash</th></tr></thead><tbody>";


  for (var count = 0; count < 31; ++count) {

    projections += "<tr>";

    projections += "<td>" + (count + 1) + "</td>";

    var net_operating_income = operation_income_year - expenses_total;
    projections += "<td> $" + net_operating_income.toFixed(2) + "</td>";


    var operation_cash_flow_year = operation_net_operating_income_year - loan_payments;
    projections += "<td> $" + operation_cash_flow_year.toFixed(2) + "</td>";

    projections += "<td> $" + property_value + "</td>";

    var amount_financed = loan_payments - interest
    projections += "<td> $" + amount_financed.toFixed(2) + "</td>";

    var total_equity = property_value - amount_financed;
    projections += "<td> $" + total_equity.toFixed(2) + "</td>";

    var return_cash_on_cash = operation_cash_flow_year / total_cash_needed;
    projections += "<td> $" + return_cash_on_cash.toFixed(2) + "</td>";

    projections += "</tr>";

    var interest = amount_financed * interest;
    var monthlyPrincipal = loan_payments - interest;
    var amount_financed = amount_financed - monthlyPrincipal;
    var expenses_total = (expenses_total * (assumptions_expense_increase / 100)) + expenses_total;
    var expenses_taxes = expenses_taxes * assumptions_expense_increase / 100 + expenses_taxes;
    var expenses_insurance = expenses_insurance * assumptions_expense_increase / 100 + expenses_insurance;
    var management_amount = management_amount * assumptions_expense_increase / 100 + management_amount;
    var maintanance_amount = maintanance_amount * assumptions_expense_increase / 100 + maintanance_amount;
    var expenditures_amount = expenditures_amount * assumptions_expense_increase / 100 + expenditures_amount;
    var property_value = (property_value * assumptions_appreciation / 100) + property_value;
  }
  projections += "</tbody></table>";

  return projections;
};

function expense(expenses_taxes, expenses_insurance) {

  var vacancy_decimal = assumptions_vacancy / 100
  var yearly_rent = income_gross_rent * 12;
  var vacancy_year = yearly_rent * vacancy_decimal;
  var maintanance_decimal = expenses_maintanance / 100;
  var maintanance_amount = yearly_rent * maintanance_decimal;
  var expenditures_decimal = expenses_expenditures / 100;
  var expenditures_amount = yearly_rent * expenditures_decimal;
  var management_decimal = expenses_management / 100;
  var management_amount = vacancy_year * management_decimal;

  var expenses_total = $('#ExpensesTotal1').val();
  // var expenses_total = expenses_taxes + expenses_insurance + maintanance_amount + expenditures_amount + management_amount + expenses_landscaping;

  var expenses = ""

  expenses += "<table style=background-color:#ffffff class=table ><thead><tr style=background-color:#337ab7><th>Year #</th><th>Property_Taxes</th><th>Insurance</th><th>Property_Management</th>" +
    "<th>Maintanance</th><th>Capital_Expenditures</th><th>Operating_Expenses</th></tr></thead><tbody>";


  for (var count = 0; count < 31; ++count) {

    expenses += "<tr>";

    expenses += "<td>" + (count + 1) + "</td>";

    expenses += "<td> $" + expenses_taxes.toFixed(2) + "</td>";

    expenses += "<td> $" + expenses_insurance.toFixed(2) + "</td>";


    expenses += "<td> $" + management_amount.toFixed(2) + "</td>";

    expenses += "<td> $" + maintanance_amount.toFixed(2) + "</td>";

    expenses += "<td> $" + expenditures_amount.toFixed(2) + "</td>";

    var expenses_total = expenses_taxes + expenses_insurance + management_amount + maintanance_amount + expenditures_amount
    expenses += "<td> $" + expenses_total.toFixed(2) + "</td>";

    expenses += "</tr>";

    var expenses_taxes = expenses_taxes * assumptions_expense_increase / 100 + expenses_taxes;
    var expenses_insurance = expenses_insurance * assumptions_expense_increase / 100 + expenses_insurance;
    var management_amount = management_amount * assumptions_expense_increase / 100 + management_amount;
    var maintanance_amount = maintanance_amount * assumptions_expense_increase / 100 + maintanance_amount;
    var expenditures_amount = expenditures_amount * assumptions_expense_increase / 100 + expenditures_amount;

  }
  expenses += "</tbody></table>";

  return expenses;
};

function income(expenses_taxes, expenses_insurance) {

  // var operation_income_year = yearly_rent - vacancy_year;
  var operation_income_year = $("#operationIncomeYear").val();

  var vacancy_decimal = assumptions_vacancy / 100
  var yearly_rent = income_gross_rent * 12;
  var vacancy_year = yearly_rent * vacancy_decimal;




  var incomes = ""

  incomes += "<table style=background-color:#ffffff class=table ><thead><tr style=background-color:#337ab7><th>Year #</th><th>Gross_Rent</th><th>Vacancy</th><th>Operating_Income</th></tr></thead><tbody>";


  for (var count = 0; count < 31; ++count) {

    incomes += "<tr>";

    incomes += "<td>" + (count + 1) + "</td>";

    incomes += "<td> $" + yearly_rent.toFixed(2) + "</td>";
    incomes += "<td> $" + vacancy_year.toFixed(2) + "</td>";

    var operating_income = yearly_rent - vacancy_year;
    incomes += "<td> $" + operating_income.toFixed(2) + "</td>";

    incomes += "</tr>";

    var yearly_rent = (yearly_rent * (assumptions_income_increase / 100)) + yearly_rent;
    var vacancy_year = yearly_rent * vacancy_decimal;
  }
  incomes += "</tbody></table>";

  return incomes;
};





function amort(amount_financed, interest, loan_term, purchase_price, down_payment) {

  var loan_term = loan_term;
  // loanPayment(amount_financed, loan_term, interest);
  var amount_financed = purchase_price - down_payment;
  var down_payment_percent = purchase_price / down_payment;
  // var amount_financed = $("#amountFin").val();

  var monthlyRate = interest / 12;
  var loan_payments = amount_financed * (monthlyRate * Math.pow((1 + monthlyRate), loan_term)) / (Math.pow((1 + monthlyRate), loan_term) - 1);
  $('.loanPayments').html(loan_payments.toFixed(2));

  var result = ""

  result += "<table style=background-color:#ffffff class=table ><thead><tr style=background-color:#337ab7><th>Month #</th><th>Balance</th>" +
    "<th>Interest</th><th>Principal</th></tr></thead><tbody>";


  for (var count = 0; count < loan_term + 1; ++count) {
    var interest = 0;

    var monthlyPrincipal = 0;

    result += "<tr>";

    result += "<td>" + (count + 1) + "</td>";


    result += "<td> $" + amount_financed.toFixed(2) + "</td>";

    var interest = amount_financed * monthlyRate;
    result += "<td> $" + interest.toFixed(2) + "</td>";

    var monthlyPrincipal = loan_payments - interest;
    result += "<td> $" + monthlyPrincipal.toFixed(2) + "</td>";

    result += "</tr>";

    var amount_financed = amount_financed - monthlyPrincipal;

  }

  result += "</tbody></table>";

  return result;
}

function validateInputs(value) {
  if ((value == null) || (value == "")) {
    return false;
  } else {
    return true;
  }
}




window.onload = function() {
  rehabCostTotal();
  valuation1();
  grossRentYear();
  expensesTotal();
  operationNetOperatingIncomeYear1();
  cashFlowYear();
  capRate();
  returnCashOnCash();
  sellingCosts();
  appreciationTotal();
  returnOnInvestment();
  rentToValue();
  debtCoverageRatio();
  totalEquity();
  amountFinanced();
  purchaseCostTotal();
  cashNeeded();
  loanPayment();
  getValues();

};
