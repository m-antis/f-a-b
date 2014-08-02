# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
orgs = Organization.create([{ name: "NYCDA", website: "www.nycda.com" }, { name: "Goodwill", website: "www.goodwillnynj.org", for_profit?: false}, { name: "Salvation Army", website: "satruck.org", for_profit?: false}])

locs = Location.create([{ address: "258 Livingston Street", zipcode: "11201", state: "NY", city: "Brooklyn", organization_id: 2},
{ address: "44 West 8th Street", zipcode: "10011", state: "NY", city: "New York", organization_id: 2},
{ address: "220 East 23rd Street", zipcode: "10010", state: "NY", city: "New York", organization_id: 2},
{ address: "22 Quincy Street", zipcode: "11238", state: "NY", city: "Brooklyn", organization_id: 3},
{address: "436 Atlantic Ave", zipcode: "11217", state: "NY", city: "Brooklyn", organization_id: 3},
{ address: "90 John Street", zipcode: "10038", state:"NY", city:"New York", organization_id: 1}

	])