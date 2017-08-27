class House < ActiveRecord::Base
  belongs_to :user

  def amount_financed
    purchase_price - down_payment;
  end

  def payment
    (Exonio.pmt(interest / 1200, 12 * loan_term, amount_financed) *-12)
  end

  def rentToValue
    (income_gross_rent + income_other_rent) / purchase_price * 100
  end

  def rentForYear
    (income_gross_rent + income_other_rent) * 12
  end

  def vacancyForYear
    rentForYear * assumptions_vacancy / 100;
  end

  def operation_income
    rentForYear - vacancyForYear;
  end

  def totalExpenses
    maintanance_amount = rentForYear * expenses_maintanance / 100;
    expenditures_amount = rentForYear * expenses_expenditures / 100;
    management_amount = operation_income * expenses_management / 100;
    expenses_taxes + expenses_insurance + maintanance_amount + expenditures_amount + management_amount + expenses_landscaping + expenses_misc;
  end

  def netOperatingIncome
    operation_income - totalExpenses;
  end

  def cashFlow
    if interest == 0
      cashFlow = netOperatingIncome
    else
      netOperatingIncome - payment
    end
  end

  def effectiveCapRate
    netOperatingIncome/purchase_price * 100;
  end

  def grossRentMultiplier
    purchase_price/rentForYear
  end

  def totalPurchaseCost
    closing_costs_amount = purchase_price * closing_costs / 100;
    purchase_cost_inspection + purchase_cost_appraisal + closing_costs_amount;
  end

  def totalRehabCost
    rehab_cost_exterior + rehab_cost_interior + rehab_cost_electrical + rehab_cost_plumbing + rehab_cost_appliances + rehab_cost_landscaping + rehab_cost_misc;
  end

  def totalCashNeeded
    if interest == 0
      purchase_price + totalPurchaseCost + totalRehabCost
    else
      down_payment + totalPurchaseCost + totalRehabCost
    end
  end

  def ratioCashOnCash
    cashFlow / totalCashNeeded * 100
  end

  def totalSellingCosts
    (after_value * assumptions_selling_cost) / 100;
  end

  # def propertyValue
  #   after_value + (after_value * assumptions_appreciation) / 100;
  # end

  def totalEquity
    after_value - amount_financed;
  end

  def totalReturnOnInvestment
    if interest == 0
      "Cash"
    else
      ((cashFlow + totalEquity - totalSellingCosts - totalCashNeeded) / totalCashNeeded * 100)
    end
  end
end
