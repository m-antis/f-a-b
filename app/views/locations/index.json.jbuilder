json.array!(@locations) do |location|
  json.extract! location, :id, :address, :zipcode, :state, :city, :organization_id
  json.url location_url(location, format: :json)
end
