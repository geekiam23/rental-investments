class CreateHouses < ActiveRecord::Migration
  def change
    create_table :houses do |t|
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
      t.integer :footage
      t.integer :year
      t.string :parking
      t.integer :lot
      t.text :zoning
      t.integer :mls

      # Housing Numbers
      t.decimal :purchase_price, precision: 10, scale: 2
      t.decimal :after_value, precision: 10, scale: 2
      t.integer :down_payment
      t.decimal :interest, precision: 5, scale: 2
      t.integer :loan_term
      t.integer :pmi_upfront
      t.integer :pmi_recurring
      t.decimal :purchase_cost_total, precision: 10, scale: 2
      t.decimal :purchase_cost_inspection, precision: 10, scale: 2
      t.decimal :purchase_cost_appraisal, precision: 10, scale: 2
      t.integer :closing_costs
      t.decimal :rehab_cost_exterior, precision: 10, scale: 2
      t.decimal :rehab_cost_interior, precision: 10, scale: 2
      t.decimal :rehab_cost_electrical, precision: 10, scale: 2
      t.decimal :rehab_cost_plumbing, precision: 10, scale: 2
      t.decimal :rehab_cost_appliances, precision: 10, scale: 2
      t.decimal :rehab_cost_landscaping, precision: 10, scale: 2
      t.decimal :rehab_cost_misc, precision: 10, scale: 2
      t.decimal :income_gross_rent, precision: 10, scale: 2
      t.decimal :income_other_rent, precision: 10, scale: 2
      t.decimal :expenses_total, precision: 10, scale: 2
      t.decimal :expenses_taxes, precision: 10, scale: 2
      t.decimal :expenses_insurance
      t.integer :expenses_management
      t.integer :expenses_maintanance
      t.integer :expenses_expenditures
      t.decimal :expenses_landscaping, precision: 10, scale: 2
      t.decimal :expenses_misc, precision: 10, scale: 2
      t.integer :assumptions_vacancy
      t.integer :assumptions_appreciation
      t.integer :assumptions_income_increase
      t.integer :assumptions_expense_increase
      t.integer :assumptions_selling_cost
      t.decimal :assumptions_land_value, precision: 10, scale: 2


      t.timestamps null: false
    end
  end
end
