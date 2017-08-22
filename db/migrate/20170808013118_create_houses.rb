class CreateHouses < ActiveRecord::Migration
  def change
    create_table :houses do |t|
      t.references :user, index: true, foreign_key: true
      # Housing Info
      t.string :name
      t.text :description
      t.text :address
      t.text :city
      t.text :state
      t.integer :zip
      t.text :house_type
      t.decimal :numBeds, precision: 3, scale: 1
      t.decimal :numBaths, precision: 3, scale: 1
      t.integer :footage, :default => 0
      t.integer :year
      t.string :parking
      t.integer :lot
      t.text :zoning
      t.integer :mls

      # Housing Numbers
      t.decimal :purchase_price, precision: 10, scale: 2, :default => 0
      t.decimal :after_value, precision: 10, scale: 2, :default => 0
      t.integer :down_payment, :default => 0
      t.decimal :interest, precision: 5, scale: 2, :default => 0
      t.integer :loan_term, :default => 0
      t.integer :pmi_upfront, :default => 0
      t.integer :pmi_recurring, :default => 0
      t.decimal :purchase_cost_total, precision: 10, scale: 2, :default => 0
      t.decimal :purchase_cost_inspection, precision: 10, scale: 2, :default => 0
      t.decimal :purchase_cost_appraisal, precision: 10, scale: 2, :default => 0
      t.integer :closing_costs, :default => 0
      t.decimal :rehab_cost_total, precision: 10, scale: 2, :default => 0
      t.decimal :rehab_cost_exterior, precision: 10, scale: 2, :default => 0
      t.decimal :rehab_cost_interior, precision: 10, scale: 2, :default => 0
      t.decimal :rehab_cost_electrical, precision: 10, scale: 2, :default => 0
      t.decimal :rehab_cost_plumbing, precision: 10, scale: 2, :default => 0
      t.decimal :rehab_cost_appliances, precision: 10, scale: 2, :default => 0
      t.decimal :rehab_cost_landscaping, precision: 10, scale: 2, :default => 0
      t.decimal :rehab_cost_misc, precision: 10, scale: 2, :default => 0
      t.decimal :income_gross_rent, precision: 10, scale: 2, :default => 0
      t.decimal :income_other_rent, precision: 10, scale: 2, :default => 0
      t.decimal :expenses_total, precision: 10, scale: 2, :default => 0
      t.decimal :expenses_taxes, precision: 10, scale: 2, :default => 0
      t.decimal :expenses_insurance, :default => 0
      t.integer :expenses_management, :default => 0
      t.integer :expenses_maintanance, :default => 0
      t.integer :expenses_expenditures, :default => 0
      t.decimal :expenses_landscaping, precision: 10, scale: 2, :default => 0
      t.decimal :expenses_misc, precision: 10, scale: 2, :default => 0
      t.integer :assumptions_vacancy, :default => 0
      t.integer :assumptions_appreciation, :default => 0
      t.integer :assumptions_income_increase, :default => 0
      t.integer :assumptions_expense_increase, :default => 0
      t.integer :assumptions_selling_cost, :default => 0
      t.decimal :assumptions_land_value, precision: 10, scale: 2, :default => 0
      t.decimal :amount_financed, precision: 10, scale: 2, :default => 0
      t.decimal :total_cash_needed, precision: 10, scale: 2, :default => 0
      t.decimal :valuation, precision: 10, scale: 2, :default => 0
      t.decimal :operation_income_year, precision: 10, scale: 2, :default => 0
      t.decimal :operation_income_month, precision: 10, scale: 2, :default => 0
      t.decimal :operation_net_operating_income_year, precision: 10, scale: 2, :default => 0
      t.decimal :operation_net_operating_income_month, precision: 10, scale: 2, :default => 0
      t.decimal :loan_payments, precision: 10, scale: 2, :default => 0
      t.decimal :operation_cash_flow_year, precision: 10, scale: 2, :default => 0
      t.decimal :operation_cash_flow_month, precision: 10, scale: 2, :default => 0
      t.decimal :return_cap_rate, precision: 10, scale: 2, :default => 0
      t.decimal :return_cash_on_cash, precision: 10, scale: 2, :default => 0
      t.decimal :return_total_profit_sold, precision: 10, scale: 2, :default => 0
      t.decimal :return_return_on_investment, precision: 10, scale: 2, :default => 0
      t.decimal :return_annualized_total_return, precision: 10, scale: 2, :default => 0
      t.decimal :ratios_rent_to_value, precision: 10, scale: 2, :default => 0
      t.decimal :ratios_gross_rent_multiplier, precision: 10, scale: 2, :default => 0
      t.decimal :ratios_debt_coverage_ratio, precision: 10, scale: 2, :default => 0
      t.decimal :tax_loan_principle, precision: 10, scale: 2, :default => 0
      t.decimal :tax_cumulative_loan_principle, precision: 10, scale: 2, :default => 0
      t.decimal :tax_loan_interest, precision: 10, scale: 2, :default => 0
      t.decimal :tax_cumulative_interest, precision: 10, scale: 2, :default => 0

      t.timestamps null: false

    end
  end
end
