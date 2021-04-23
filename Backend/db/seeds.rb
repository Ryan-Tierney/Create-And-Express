# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


category1 = Category.create(name: "Drawing") 
category2 = Category.create(name: "Sculpture")
category3 = Category.create(name: "Photo")
category4 = Category.create(name: "WebDesign")
category5 = Category.create(name: "Dance")
category6 = Category.create(name: "Song")
category7 = Category.create(name: "Skit")

location1 = Location.create(city: "Waveland", country: "USA")
location2 = Location.create(city: "New York City", country: "USA")
location3 = Location.create(city: "San Francisco", country: "USA")

user1 = User.create(name: "Ryan", username: "SweetTea", password: "rwt1992")
user2 = User.create(name: "Vanessa", username: "Nessa90", password: "1senough")

Creation.create(
    image: "https://i.pinimg.com/originals/3b/c4/09/3bc409491176b637edeb207a1d453b23.jpg",
    category_id: 1,
    name: 'NightSky',
    date: '4/7/2021',
    notes: 'A hand drawn picture of the night sky',
    location_id: 1,
    user_id: 1
)
Creation.create(
    image: "https://sites.create-cdn.net/siteimages/37/4/7/374765/14/5/0/14503374/1000x1000.jpg?1485815166",
    category_id: 2,
    name: 'My Dog',
    date: '4/4/2021',
    notes: 'A sculpture made of clay of my dog',
    location_id: 1,
    user_id: 2
)