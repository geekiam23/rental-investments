require 'faker'


# Create Houses
20.times do
  house = House.create!(
    name:               Faker::Name.name,
    description:        Faker::Lorem.paragraph,
    address:            Faker::Address.street_address,
    city:               Faker::Address.city,
    state:              Faker::Address.state,
    zip:                Faker::Address.zip_code,
    house_type:               Faker::Book.title,
    numBeds:            Faker::Number.decimal(1, 1),
    numBaths:           Faker::Number.decimal(1, 1),
    footage:            Faker::Number.between(1500, 2500),
    year:               Faker::Number.between(1950, 2017),
    parking:            Faker::Book.title,
    lot:                Faker::Number.between(1500, 3000),
    zoning:             Faker::Book.title,
    mls:                Faker::Number.between(100000, 900000),
    purchase_price:     Faker::Number.between(130000, 300000),
    after_value:        Faker::Number.between(130000, 300000),
    down_payment:       Faker::Number.between(10000, 30000),
    interest:           Faker::Number.decimal(1, 2),
    loan_term:          Faker::Number.between(15, 30),
    pmi_upfront:        Faker::Number.between(1, 19),
    pmi_recurring:      Faker::Number.between(1, 19),
    purchase_cost_inspection:       Faker::Number.between(1, 1500),
    purchase_cost_appraisal:        Faker::Number.between(1, 1500),
    closing_costs:                  Faker::Number.between(1, 6),
    rehab_cost_exterior:            Faker::Number.between(300, 2000),
    rehab_cost_interior:            Faker::Number.between(300, 2000),
    rehab_cost_electrical:          Faker::Number.between(300, 2000),
    rehab_cost_plumbing:            Faker::Number.between(300, 2000),
    rehab_cost_appliances:          Faker::Number.between(300, 2000),
    rehab_cost_landscaping:         Faker::Number.between(300, 2000),
    rehab_cost_misc:                Faker::Number.between(300, 2000),
    income_gross_rent:              Faker::Number.between(2000, 3000),
    income_other_rent:              Faker::Number.between(100, 500),
    expenses_taxes:                 Faker::Number.between(100, 500),
    expenses_insurance:             Faker::Number.between(100, 500),
    expenses_management:            Faker::Number.between(1, 10),
    expenses_maintanance:           Faker::Number.between(1, 10),
    expenses_expenditures:          Faker::Number.between(1, 10),
    expenses_landscaping:           Faker::Number.between(10, 50),
    expenses_misc:                  Faker::Number.between(10, 100),
    assumptions_vacancy:            Faker::Number.between(1, 10),
    assumptions_appreciation:       Faker::Number.between(1, 5),
    assumptions_income_increase:    Faker::Number.between(1, 5),
    assumptions_expense_increase:   Faker::Number.between(1, 5),
    assumptions_selling_cost:       Faker::Number.between(1, 5),
    assumptions_land_value:         Faker::Number.between(45000, 110000)
    )
end

  puts "Seed finished"
  puts "#{User.count} users created"
  puts "#{House.count} houses created"
