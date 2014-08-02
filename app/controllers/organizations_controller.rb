class OrganizationsController < ApplicationController
  

  def new
  		@org = Organization.new
  end

  def create
  		@org = Organization.new(org_params)
  		if @org.save
  			redirect_to new_location_path, notice: "New organization has been added."
  		else
	      flash[:alert] = "Org cannot be added. Please make sure to include an organization name."
        redirect_to new_organization_path
  		end
  end


  def edit
  end



  private

  def org_params
  		params.require(:organization).permit(:name, :website, :telephone, :for_profit?, :email)
  end

end
