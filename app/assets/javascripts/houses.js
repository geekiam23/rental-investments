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

var footage = parseFloat(gon.house.footage);
var closing_cost = parseFloat(gon.house.closing_costs);
var after_value = parseFloat(gon.house.after_value);
var interest = parseFloat(gon.house.interest);
var loan_term = parseFloat(gon.house.loan_term) * 12;
var pmi_upfront = parseFloat(gon.house.pmi_upfront);
var pmi_recurring = parseFloat(gon.house.pmi_recurring);
var purchase_cost_total = 0;
var purchase_cost_inspection = parseFloat(gon.house.purchase_cost_inspection);
var purchase_cost_appraisal = parseFloat(gon.house.purchase_cost_appraisal);
var rehab_cost_exterior = parseFloat(gon.house.rehab_cost_exterior);
var rehab_cost_interior = parseFloat(gon.house.rehab_cost_interior);
var rehab_cost_electrical = parseFloat(gon.house.rehab_cost_electrical);
var rehab_cost_plumbing = parseFloat(gon.house.rehab_cost_plumbing);
var rehab_cost_appliances = parseFloat(gon.house.rehab_cost_appliances);
var rehab_cost_landscaping = parseFloat(gon.house.rehab_cost_landscaping);
var rehab_cost_misc = parseFloat(gon.house.rehab_cost_misc);
var income_gross_rent = parseFloat(gon.house.income_gross_rent);
var income_other_rent = parseFloat(gon.house.income_other_rent);
var expenses_total = 0;
var expenses_taxes = parseFloat(gon.house.expenses_taxes);
var expenses_insurance = parseFloat(gon.house.expenses_insurance);
var expenses_management = parseFloat(gon.house.expenses_management);
var expenses_maintanance = parseFloat(gon.house.expenses_maintanance);
var expenses_expenditures = parseFloat(gon.house.expenses_expenditures);
var expenses_landscaping = parseFloat(gon.house.expenses_landscaping);
var expenses_misc = parseFloat(gon.house.expenses_misc);
var assumptions_vacancy = parseFloat(gon.house.assumptions_vacancy);
var assumptions_appreciation = parseFloat(gon.house.assumptions_appreciation);
var assumptions_income_increase = parseFloat(gon.house.assumptions_income_increase);
var assumptions_expense_increase = parseFloat(gon.house.assumptions_expense_increase);
var assumptions_selling_cost = parseFloat(gon.house.assumptions_selling_cost);
var assumptions_land_value = parseFloat(gon.house.assumptions_land_value);
var total_cash_needed = 0;
var valuation = 0;
var operation_income_year = 0;
var operation_income_month = 0;
var operation_net_operating_income_year = 0;
var operation_net_operating_income_month = 0;
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
var tax_loan_principle = parseFloat(gon.house.tax_loan_principle);
var tax_cumulative_loan_principle = parseFloat(gon.house.tax_cumulative_loan_principle);
var tax_loan_interest = parseFloat(gon.house.tax_loan_interest);
var tax_cumulative_interest = parseFloat(gon.house.tax_cumulative_interest);
var purchase_price = parseFloat(gon.house.purchase_price);
var after_value = parseFloat(gon.house.after_value);
var down_payment = parseFloat(gon.house.down_payment);
var amount_financed = parseFloat(gon.house.amount_financed);

var calcVariables = {
  rehabCostTotal() {
    var rehab_cost_total = rehab_cost_exterior + rehab_cost_interior + rehab_cost_electrical + rehab_cost_plumbing + rehab_cost_appliances + rehab_cost_landscaping + rehab_cost_misc;
    $('.rehabTotal').html("$" + rehab_cost_total);
    return rehab_cost_total;
  },

  purchaseCostTotal() {
    var closing_costs_decimal = closing_cost / 100;
    var closing_costs_amount = purchase_price * closing_costs_decimal;
    var purchase_cost_total = purchase_cost_inspection + purchase_cost_appraisal + closing_costs_amount;
    $('.purchaseTotal').html("$" + purchase_cost_total);
    $('.closingCostAmount').html("$" + closing_costs_amount);
    return purchase_cost_total;
  },

  amountFinanced() {
    var amount_financed = purchase_price - down_payment;
    var down_payment_percent = purchase_price / down_payment;
    $('.amountFin').html("$" + amount_financed);
    $('.downPaymentPercent').html(down_payment_percent.toFixed(2) + "%");
    return amount_financed;
  },

  cashNeeded() {
    var closing_costs_decimal = closing_cost / 100;
    var closing_costs_amount = purchase_price * closing_costs_decimal;

    var rehab_cost = calcVariables.rehabCostTotal();
    var total_cash_needed = down_payment + closing_costs_amount + rehab_cost;
    $('.TotalCashNeed').html("$" + total_cash_needed);
    return total_cash_needed;
  },

  grossRentYear() {
    var vacancy_decimal = assumptions_vacancy / 100
    var yearly_rent = income_gross_rent * 12;
    var vacancy_year = yearly_rent * vacancy_decimal;
    var operation_income_year = yearly_rent - vacancy_year;
    var monthly_rent_vacancy = operation_income_year / 12;
    var ratios_gross_rent_multiplier = purchase_price / yearly_rent;
    $('.ratiosGrossRentMultiplier').html(ratios_gross_rent_multiplier.toFixed(2));
    $('.YearlyRent').html("$" + yearly_rent);
    $('.vacancyYear').html("$" + vacancy_year);
    return yearly_rent;
  },

  operationIncomeYear(){
    var yearly_rent = income_gross_rent * 12;
    var vacancy_decimal = assumptions_vacancy / 100
    var vacancy_year = yearly_rent * vacancy_decimal;
    var operation_income_year = yearly_rent - vacancy_year;
    $('.operationIncomeYear').html("$" + operation_income_year);
    return  operation_income_year
  },


  expensesTotal() {
    var year_rent = calcVariables.grossRentYear();
    var operation_income = calcVariables.operationIncomeYear();
    var vacancy_decimal = assumptions_vacancy / 100
    var vacancy_year = year_rent * vacancy_decimal;
    var maintanance_decimal = expenses_maintanance / 100;
    var maintanance_amount = year_rent * maintanance_decimal;
    var expenditures_decimal = expenses_expenditures / 100;
    var expenditures_amount = year_rent * expenditures_decimal;
    var management_decimal = expenses_management / 100;
    var management_amount = operation_income * management_decimal;
    var expenses_total = expenses_taxes + expenses_insurance + maintanance_amount + expenditures_amount + management_amount + expenses_landscaping;
    $('.maintananceAmount').html(maintanance_amount);
    $('.expendituresAmount').html(expenditures_amount);
    $('.managementAmount').html(management_amount);
    $('.ExpensesTotal1').html("$" + expenses_total.toFixed(2));
    return expenses_total
  },

  valuation1() {
    var valuation = purchase_price / footage;
    $('.valuation').html("$" + valuation.toFixed(2));
    return valuation
  },

  operationNetOperatingIncomeYear1() {
    var income_year = calcVariables.operationIncomeYear();
    var expense_total = calcVariables.expensesTotal();
    var operation_net_operating_income_year = income_year - expense_total;
    $('.netOperatingIncome').html("$" + operation_net_operating_income_year.toFixed(2));
    return operation_net_operating_income_year;
  },

  loanPayment() {
    var monthlyRate =  interest / 100 / 12;
    var balance = calcVariables.amountFinanced();

    var loan_payment_year = (balance * monthlyRate * (Math.pow(1 + monthlyRate, loan_term)) / (Math.pow(1 + monthlyRate, loan_term) - 1)) * 12;
    $('.loanPayments').html("$" + loan_payment_year.toFixed(2));
    return loan_payment_year;
  },

  cashFlowYear() {
    var net_operating_income = calcVariables.operationNetOperatingIncomeYear1();
    var loan_payment = calcVariables.loanPayment();
    var operation_cash_flow_year = net_operating_income - loan_payment;
    $('.cashFlowYear').html("$" + operation_cash_flow_year.toFixed(2));
    return operation_cash_flow_year;
  },

  capRate() {
    var net_operating_income = calcVariables.operationNetOperatingIncomeYear1();
    var return_cap_rate = net_operating_income / purchase_price * 100;
    $('.returnCapRate').html(return_cap_rate.toFixed(2) + "%");
    return return_cap_rate;
  },

  sellingCosts() {
    var selling_costs = (after_value * assumptions_selling_cost) / 100;
    $('.assumptionsSellingCosts').html(selling_costs);
    return selling_costs;
  },

  returnOnInvestment() {
    var cash_flow = calcVariables.cashFlowYear();
    var balance = calcVariables.amountFinanced();
    var selling_cost = calcVariables.sellingCosts();
    var cash_needed = calcVariables.cashNeeded();
    var return_on_investment = (cash_flow + after_value - balance - selling_cost - cash_needed) / cash_needed * 100;
    $('.ratiosReturnOnInvestment').html(return_on_investment.toFixed(2) + "%");
    return return_on_investment;
  },

  returnCashOnCash() {
    var cash_needed = calcVariables.cashNeeded();
    var cash_flow = calcVariables.cashFlowYear();
    var return_cash_on_cash = cash_flow / cash_needed*100;
    $('.cashOnCash').html(return_cash_on_cash.toFixed(2) + "%");
    return return_cash_on_cash;
  },

  appreciationTotal() {
    var appreciation_total = (after_value * assumptions_appreciation) / 100;
    var property_value = appreciation_total + after_value;
    $('.assumptionsAppreciationTotal').html(appreciation_total);
    $('.propertyValue').html(property_value);
    return appreciation_total;
  },

  rentToValue() {
    var ratios_rent_to_value = income_gross_rent / purchase_price * 100;
    $('.ratiosRentToValue').html(ratios_rent_to_value.toFixed(2) + "%");
    return ratios_rent_to_value;
  },

  propertyValue() {
    var appreciation_total = (after_value * assumptions_appreciation) / 100;
    var property_value = appreciation_total + after_value;
    return property_value;
  },

  totalEquity() {
    var balance = calcVariables.amountFinanced();
    var property_value = calcVariables.propertyValue();
    var total_equity = property_value - balance;
    $('.TotalEquity').html("$" + total_equity);
    return total_equity;
  },

  debtCoverageRatio() {
    var net_operating_income = calcVariables.operationNetOperatingIncomeYear1();
    var loan_payment = calcVariables.loanPayment();
    var ratios_debt_coverage_ratio = net_operating_income / loan_payment;
    $('.ratiosDebtCoverageRatio').html(ratios_debt_coverage_ratio.toFixed(2));
    return ratios_debt_coverage_ratio;
  }
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
    div.innerHTML += amort(interest, loan_term);
  } else {
    div.innerHTML += "Please Check your inputs and retry - invalid values.";
  }

  projections.innerHTML += projection(interest, assumptions_vacancy, income_gross_rent);
  incomes.innerHTML += income(expenses_taxes, expenses_insurance);
  expenses.innerHTML += expense(expenses_taxes, expenses_insurance);


}

function projection(interest, assumptions_vacancy, income_gross_rent) {

  var balance = calcVariables.amountFinanced();
  var income_year = calcVariables.operationIncomeYear();
  var expense_total = calcVariables.expensesTotal();
  var loan_payment = calcVariables.loanPayment();
  var property_value = calcVariables.propertyValue();
  var cash_flow = calcVariables.cashFlowYear();
  var cash_needed = calcVariables.cashNeeded();
  // var loan_term = loan_term * 12;


  var annualRate_loan =  interest / 100;
  var monthlyRate =  interest / 100/12;

  var loan_payment_year = (balance * annualRate_loan * (Math.pow(1 + annualRate_loan, loan_term)) / (Math.pow(1 + annualRate_loan, loan_term) - 1)) * 12;
  $('.loanPayments').html("$" + loan_payment_year.toFixed(2));
  var increase_yearly_rent = income_gross_rent * 12;

  var projections = ""

  projections += "<table style=background-color:#ffffff class=table ><thead><tr style=background-color:#337ab7><th>Year #</th><th>Net_Operating_Income</th><th>Cash_Flow</th><th>Property_Value</th><th>Loan_Balance</th><th>Total_Equity</th><th>Cash_On_Cash</th></tr></thead><tbody>";



  for (var count = 0; count < 30; ++count) {

    for (var month = 0; month < 12; ++month) {
      var interest_month = 0;
      var monthlyPrincipal = 0;
      var interest_month = balance * monthlyRate;
      var monthlyPrincipal = loan_payment/12 - interest_month;
      var balance = balance - monthlyPrincipal;
    }

    projections += "<tr>";

    projections += "<td>" + (count + 1) + "</td>";

    var net_operating_income = income_year - expense_total;
    projections += "<td> $" + net_operating_income.toFixed(2) + "</td>";

    var operation_cash_flow_year = net_operating_income - loan_payment;
    projections += "<td> $" + operation_cash_flow_year.toFixed(2) + "</td>";

    projections += "<td> $" + property_value.toFixed(2) + "</td>";

    projections += "<td> $" + balance.toFixed(2) + "</td>";

    var total_equity = property_value - balance;
    projections += "<td> $" + total_equity.toFixed(2) + "</td>";

    var return_cash_on_cash = operation_cash_flow_year / cash_needed*100;
    projections += "<td>" + return_cash_on_cash.toFixed(2) + "%" + "</td>";

    projections += "</tr>";

    //Calculating the assumed annual increase in income
    var vacancy_decimal = assumptions_vacancy / 100
    var increase_yearly_rent = (increase_yearly_rent * (assumptions_income_increase / 100)) + increase_yearly_rent;
    var increase_vacancy_year = increase_yearly_rent * vacancy_decimal;
    var income_year = increase_yearly_rent - increase_vacancy_year;

    //Calculating the assumed annual increase in property value
    var appreciation_total = (property_value * assumptions_appreciation) / 100;
    var property_value = appreciation_total + property_value;

    //Calculating the assumed annual increase in expense
    var expense_total = (expense_total * (assumptions_expense_increase / 100)) + expense_total;
  }
  projections += "</tbody></table>";

  return projections;
};

function expense(expenses_taxes, expenses_insurance) {

  var year_rent = calcVariables.grossRentYear();
  var operation_income = calcVariables.operationIncomeYear();
  var maintanance_decimal = expenses_maintanance / 100;
  var maintanance_amount = year_rent * maintanance_decimal;
  var expenditures_decimal = expenses_expenditures / 100;
  var expenditures_amount = year_rent * expenditures_decimal;
  var management_decimal = expenses_management / 100;
  var management_amount = operation_income * management_decimal;

  var expense_total = calcVariables.expensesTotal();

  var expenses = ""

  expenses += "<table style=background-color:#ffffff class=table ><thead><tr style=background-color:#337ab7><th>Year #</th><th>Property_Taxes</th><th>Insurance</th><th>Property_Management</th>" +
    "<th>Maintanance</th><th>Capital_Expenditures</th><th>Operating_Expenses</th></tr></thead><tbody>";


  for (var count = 0; count < 30; ++count) {

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

    var expense_total = (expense_total * (assumptions_expense_increase / 100)) + expense_total;
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


function amort(interest, loan_term) {

  var balance = calcVariables.amountFinanced();
  var loan_payment = calcVariables.loanPayment();

  var annualRate_loan =  interest / 100;

  var monthlyRate =  interest / 100/12;
  var interest_year = 0;
  var yearlyPrincipal = 0;
  var loan_terms = loan_term /12;

  var result = ""

  result += "<table style=background-color:#ffffff class=table ><thead><tr style=background-color:#337ab7><th>Month #</th><th>Balance</th>" +
    "<th>Interest</th><th>Principal</th></tr></thead><tbody>";


  for (var count = 0; count < loan_terms; ++count) {
    for (var month = 0; month < 12; ++month) {
      var interest_month = 0;
      var monthlyPrincipal = 0;
      var interest_month = balance * monthlyRate;
      var monthlyPrincipal = loan_payment/12 - interest_month;
      var interest_year = interest_year + interest_month
      var yearlyPrincipal = yearlyPrincipal + monthlyPrincipal
      var balance = balance - monthlyPrincipal;
    }

    result += "<tr>";

    result += "<td>" + (count + 1) + "</td>";

    result += "<td> $" + balance.toFixed(2) + "</td>";

    result += "<td> $" + interest_year.toFixed(2) + "</td>";

    result += "<td> $" + yearlyPrincipal.toFixed(2) + "</td>";

    result += "</tr>";
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



$(document).ready(function () {
  window.onload = function() {
    calcVariables.rehabCostTotal();
    calcVariables.valuation1();
    calcVariables.grossRentYear();
    calcVariables.expensesTotal();
    calcVariables.operationIncomeYear();
    calcVariables.operationNetOperatingIncomeYear1();
    calcVariables.cashFlowYear();
    calcVariables.capRate();
    calcVariables.returnCashOnCash();
    calcVariables.propertyValue();
    calcVariables.appreciationTotal();
    calcVariables.sellingCosts();
    calcVariables.returnOnInvestment();
    calcVariables.rentToValue();
    calcVariables.debtCoverageRatio();
    calcVariables.totalEquity();
    calcVariables.amountFinanced();
    calcVariables.purchaseCostTotal();
    calcVariables.cashNeeded();
    calcVariables.loanPayment();
    getValues();
  };
});
