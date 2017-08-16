class House < ActiveRecord::Base
  belongs_to :user

  # before_save :default_to_zero_if_blank
  #
  # def default_to_zero_if_blank
  #   footage = 0 if footage.blank?
  #   purchase_price = 0 if purchase_price.blank?
  #   after_value = 0 if after_value.blank?
  #   down_payment = 0 if down_payment.blank?
  #   interest = 0 if interest.blank?
  #   loan_term = 0 if loan_term.blank?
  #   pmi_upfront = 0 if pmi_upfront.blank?
  #   pmi_recurring = 0 if pmi_recurring.blank?
  #   purchase_cost_total = 0 if purchase_cost_total.blank?
  #   purchase_cost_inspection = 0 if purchase_cost_inspection.blank?
  #   purchase_cost_appraisal = 0 if purchase_cost_appraisal.blank?
  #   closing_costs = 0 if closing_costs.blank?
  #   rehab_cost_exterior = 0 if rehab_cost_exterior.blank?
  #   rehab_cost_interior = 0 if rehab_cost_interior.blank?
  #   rehab_cost_electrical = 0 if rehab_cost_electrical.blank?
  #   rehab_cost_plumbing = 0 if rehab_cost_plumbing.blank?
  #   rehab_cost_appliances = 0 if rehab_cost_appliances.blank?
  #   rehab_cost_landscaping = 0 if rehab_cost_landscaping.blank?
  #   rehab_cost_misc = 0 if rehab_cost_misc.blank?
  #   income_gross_rent = 0 if income_gross_rent.blank?
  #   income_other_rent = 0 if income_other_rent.blank?
  #   expenses_total = 0 if expenses_total.blank?
  #   expenses_taxes = 0 if expenses_taxes.blank?
  #   expenses_insurance = 0 if expenses_insurance.blank?
  #   expenses_management = 0 if expenses_management.blank?
  #   expenses_maintanance = 0 if expenses_maintanance.blank?
  #   expenses_expenditures = 0 if expenses_expenditures.blank?
  #   expenses_landscaping = 0 if expenses_landscaping.blank?
  #   expenses_misc = 0 if expenses_misc.blank?
  #   assumptions_vacancy = 0 if assumptions_vacancy.blank?
  #   assumptions_appreciation = 0 if assumptions_appreciation.blank?
  #   assumptions_income_increase = 0 if assumptions_income_increase.blank?
  #   assumptions_expense_increase = 0 if assumptions_expense_increase.blank?
  #   assumptions_selling_cost = 0 if assumptions_selling_cost.blank?
  #   assumptions_land_value = 0 if assumptions_land_value.blank?
  #   amount_financed = 0 if amount_financed.blank?
  #   total_cash_needed = 0 if total_cash_needed.blank?
  #   valuation = 0 if valuation.blank?
  #   operation_income_year = 0 if operation_income_year.blank?
  #   operation_income_month = 0 if operation_income_month.blank?
  #   operation_net_operating_income_year = 0 if operation_net_operating_income_year.blank?
  #   operation_net_operating_income_month = 0 if operation_net_operating_income_month.blank?
  #   loan_payments = 0 if loan_payments.blank?
  #   operation_cash_flow_year = 0 if operation_cash_flow_year.blank?
  #   return_cap_rate = 0 if return_cap_rate.blank?
  #   return_cash_on_cash = 0 if return_cash_on_cash.blank?
  #   return_total_profit_sold = 0 if return_total_profit_sold.blank?
  #   return_return_on_investment = 0 if return_return_on_investment.blank?
  #   return_annualized_total_return = 0 if return_annualized_total_return.blank?
  #   ratios_rent_to_value = 0 if ratios_rent_to_value.blank?
  #   ratios_gross_rent_multiplier = 0 if ratios_gross_rent_multiplier.blank?
  #   ratios_debt_coverage_ratio = 0 if ratios_debt_coverage_ratio.blank?
  #   tax_loan_principle = 0 if tax_loan_principle.blank?
  #   tax_cumulative_loan_principle = 0 if tax_cumulative_loan_principle.blank?
  #   tax_loan_interest = 0 if tax_loan_interest.blank?
  #   tax_cumulative_intere = 0 if tax_cumulative_interest.blank?
  #
  # end
end
