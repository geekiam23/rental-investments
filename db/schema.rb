# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170808013118) do

  create_table "houses", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "name"
    t.text     "description"
    t.text     "address"
    t.text     "city"
    t.text     "state"
    t.integer  "zip"
    t.text     "house_type"
    t.decimal  "numBeds",                              precision: 3,  scale: 1
    t.decimal  "numBaths",                             precision: 3,  scale: 1
    t.integer  "footage"
    t.integer  "year"
    t.string   "parking"
    t.integer  "lot"
    t.text     "zoning"
    t.integer  "mls"
    t.decimal  "purchase_price",                       precision: 10, scale: 2
    t.decimal  "after_value",                          precision: 10, scale: 2
    t.integer  "down_payment"
    t.decimal  "interest",                             precision: 5,  scale: 2
    t.integer  "loan_term"
    t.integer  "pmi_upfront"
    t.integer  "pmi_recurring"
    t.decimal  "purchase_cost_total",                  precision: 10, scale: 2
    t.decimal  "purchase_cost_inspection",             precision: 10, scale: 2
    t.decimal  "purchase_cost_appraisal",              precision: 10, scale: 2
    t.integer  "closing_costs"
    t.decimal  "rehab_cost_total",                     precision: 10, scale: 2
    t.decimal  "rehab_cost_exterior",                  precision: 10, scale: 2
    t.decimal  "rehab_cost_interior",                  precision: 10, scale: 2
    t.decimal  "rehab_cost_electrical",                precision: 10, scale: 2
    t.decimal  "rehab_cost_plumbing",                  precision: 10, scale: 2
    t.decimal  "rehab_cost_appliances",                precision: 10, scale: 2
    t.decimal  "rehab_cost_landscaping",               precision: 10, scale: 2
    t.decimal  "rehab_cost_misc",                      precision: 10, scale: 2
    t.decimal  "income_gross_rent",                    precision: 10, scale: 2
    t.decimal  "income_other_rent",                    precision: 10, scale: 2
    t.decimal  "expenses_total",                       precision: 10, scale: 2
    t.decimal  "expenses_taxes",                       precision: 10, scale: 2
    t.decimal  "expenses_insurance"
    t.integer  "expenses_management"
    t.integer  "expenses_maintanance"
    t.integer  "expenses_expenditures"
    t.decimal  "expenses_landscaping",                 precision: 10, scale: 2
    t.decimal  "expenses_misc",                        precision: 10, scale: 2
    t.integer  "assumptions_vacancy"
    t.integer  "assumptions_appreciation"
    t.integer  "assumptions_income_increase"
    t.integer  "assumptions_expense_increase"
    t.integer  "assumptions_selling_cost"
    t.decimal  "assumptions_land_value",               precision: 10, scale: 2
    t.decimal  "amount_financed",                      precision: 10, scale: 2
    t.decimal  "total_cash_needed",                    precision: 10, scale: 2
    t.decimal  "valuation",                            precision: 10, scale: 2
    t.decimal  "operation_income_year",                precision: 10, scale: 2
    t.decimal  "operation_income_month",               precision: 10, scale: 2
    t.decimal  "operation_net_operating_income_year",  precision: 10, scale: 2
    t.decimal  "operation_net_operating_income_month", precision: 10, scale: 2
    t.decimal  "loan_payments",                        precision: 10, scale: 2
    t.decimal  "operation_cash_flow_year",             precision: 10, scale: 2
    t.decimal  "operation_cash_flow_month",            precision: 10, scale: 2
    t.decimal  "return_cap_rate",                      precision: 10, scale: 2
    t.decimal  "return_cash_on_cash",                  precision: 10, scale: 2
    t.decimal  "return_total_profit_sold",             precision: 10, scale: 2
    t.decimal  "return_return_on_investment",          precision: 10, scale: 2
    t.decimal  "return_annualized_total_return",       precision: 10, scale: 2
    t.decimal  "ratios_rent_to_value",                 precision: 10, scale: 2
    t.decimal  "ratios_gross_rent_multiplier",         precision: 10, scale: 2
    t.decimal  "ratios_debt_coverage_ratio",           precision: 10, scale: 2
    t.decimal  "tax_loan_principle",                   precision: 10, scale: 2
    t.decimal  "tax_cumulative_loan_principle",        precision: 10, scale: 2
    t.decimal  "tax_loan_interest",                    precision: 10, scale: 2
    t.decimal  "tax_cumulative_interest",              precision: 10, scale: 2
    t.datetime "created_at",                                                    null: false
    t.datetime "updated_at",                                                    null: false
  end

  add_index "houses", ["user_id"], name: "index_houses_on_user_id"

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.integer  "failed_attempts",        default: 0,  null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.string   "name"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  add_index "users", ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  add_index "users", [nil], name: "index_users_on_confirmation_token", unique: true

end
