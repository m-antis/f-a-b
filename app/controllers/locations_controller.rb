class LocationsController < ApplicationController
  before_action :set_location, only: [:show, :edit, :update, :destroy]

  # GET /locations
  # GET /locations.json
  def index
    @locations = Location.all
    @addressAmt = Location.all.length
    # @addressMarkers = addressMarkers
    @fullAddress = getFullAddress
    @orgName = getOrgName
    @orgID = getOrgID
    # @mapInfo = getLocationInfo
    @mapLats = getLatitudes
    @mapLngs = getLongitudes
  end

  # GET /locations/1
  # GET /locations/1.json
  def show
  end

  # GET /locations/new
  def new
    @location = Location.new
  end

  # GET /locations/1/edit
  def edit
  end

  # POST /locations
  # POST /locations.json
  def create
    @location = Location.new(location_params)

    respond_to do |format|
      if @location.save
        format.html { redirect_to @location, notice: 'Location was successfully created.' }
        format.json { render :show, status: :created, location: @location }
      else
        format.html { render :new }
        format.json { render json: @location.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /locations/1
  # PATCH/PUT /locations/1.json
  def update
    respond_to do |format|
      if @location.update(location_params)
        format.html { redirect_to @location, notice: 'Location was successfully updated.' }
        format.json { render :show, status: :ok, location: @location }
      else
        format.html { render :edit }
        format.json { render json: @location.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /locations/1
  # DELETE /locations/1.json
  def destroy
    @location.destroy
    respond_to do |format|
      format.html { redirect_to locations_url, notice: 'Location was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # def mission
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @location = Location.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def location_params
      params.require(:location).permit(:address, :zipcode, :state, :city, :organization_id)
    end

    # def addressMarkers
    #   locations = Location.all
    #    a = []
    #    # gather addresses from database into an array
    #      for i in locations
    #         a << "#{i.address}, #{i.zipcode}"
    #      end
    #      a
    # end

    # def getLocationInfo
    #   locations = Location.all
    #   a = []
    #     for i in locations
    #       a << "#{i.address} #{i.city}, #{i.state} #{i.zipcode}"
    #       a << "#{i.organization.name}"
    #     end
    #   locationInfo = []
    #     a.each_slice(2) do |value|
    #       locationInfo << {address: value[0], orgName: value[1]}
    #     end
    #     locationInfo
    # end
    def getLatitudes
      locations = Location.all
      n = []
        for i in locations
          n << "#{i.latitude}"
        end
        n
    end

    def getLongitudes
      locations = Location.all
      n = []
        for i in locations
          n << "#{i.longitude}"
        end
        n
    end

    def getOrgName
      locations = Location.all
      n = []
        for i in locations
          n << "#{i.organization}"
        end
        n
    end

    def getOrgID
      locations = Location.all
      id = []
        for i in locations
          id<< "#{i.organization_id}"
        end
        id
    end
end
