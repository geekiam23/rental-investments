class HousesController < ApplicationController

  before_action :variables, except: [:index, :new, :create, :compare]


  def variables
    @house = House.find(params[:id])
    gon.house = @house
  end

  def index
    @houses = House.all
  end

  def show
    @house = House.find(params[:id])

    respond_to do |format|
      format.html
      format.pdf do
        render pdf: "#{@house.name} - Property",
        template: "houses/show.pdf.erb",
        locals: {:house => @house},

        debug: true
        # pdf = HousePdf.new(@house)
        # send_data pdf.render,
        #   filename: "house_#{@house.name}",
        #   type: 'application/pdf',
        #   disposition: 'inline'
      end
    end
  end

  def compare
    @houses = House.find(params[:house_ids])
  end

  def new
    @house = House.new
  end

  def create
    @house = House.new(house_params)

    if @house.save
      redirect_to @house, notice: "House was saved successfully"
    else
      flash.now[:alert] = "Error creating house. Pleas try again."
      render :new
    end
  end


  def edit
    @house = House.find(params[:id])
  end

  def update
    @house = House.find(params[:id])

    @house.assign_attributes(house_params)

    if @house.save
      flash[:notice] = "House was updated"
      redirect_to @house
    else
      flash.now[:alert] = "Error saving house. Please try again."
      render :edit
    end
  end

  def destroy
    @house = House.find(params[:id])

    if @house.destroy
      flash[:notice] = "\"#{@house.name}\" was deleted successfully."
      redirect_to action :index
    else
      flash.now[:alert] = "There was an error deleting the house."
      render :show
    end
  end


  private
  def house_params
    params.require(:house).permit(:name,
    :address,
    :city,
    :state,
    :zip,
    :house_type,
    :numBeds,
    :numBaths,
    :footage,
    :year,
    :parking,
    :lot,
    :zoning,
    :mls,
    :purchase_price,
    :after_value,
    :down_payment,
    :interest,
    :loan_term,
    :pmi_upfront,
    :pmi_recurring,
    :purchase_cost_total,
    :purchase_cost_inspection,
    :purchase_cost_appraisal,
    :closing_costs,
    :rehab_cost_exterior,
    :rehab_cost_interior,
    :rehab_cost_electrical,
    :rehab_cost_plumbing,
    :rehab_cost_appliances,
    :rehab_cost_landscaping,
    :rehab_cost_misc,
    :income_gross_rent,
    :income_other_rent,
    :expenses_total,
    :expenses_taxes,
    :expenses_insurance,
    :expenses_management,
    :expenses_maintanance,
    :expenses_expenditures,
    :expenses_landscaping,
    :expenses_misc,
    :assumptions_vacancy,
    :assumptions_appreciation,
    :assumptions_income_increase,
    :assumptions_expense_increase,
    :assumptions_selling_cost,
    :assumptions_land_value,
    :amount_financed,
    :total_cash_needed,
    :valuation,
    :operation_income_year,
    :operation_income_month,
    :operation_net_operating_income_year,
    :operation_net_operating_income_month,
    :loan_payments,
    :operation_cash_flow_year,
    :operation_cash_flow_month, :return_cap_rate,
    :return_cash_on_cash,
    :return_total_profit_sold,
    :return_return_on_investment,
    :return_annualized_total_return,
    :ratios_rent_to_value,
    :ratios_gross_rent_multiplier,
    :ratios_debt_coverage_ratio,
    :tax_loan_principle,
    :tax_cumulative_loan_principle,
    :tax_loan_interest,
    :tax_cumulative_interest
    )
  end


end
