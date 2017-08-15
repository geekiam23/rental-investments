class HousesController < ApplicationController
  before_action :variables, except: [:index, :new, :create]

  def variables
    @house = House.find(params[:id])
    gon.house = @house
  end

  def index
    @houses = House.all
  end

  def show
    @house = House.find(params[:id])
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
    params.fetch(:house, {}).permit(:name)
  end
end
