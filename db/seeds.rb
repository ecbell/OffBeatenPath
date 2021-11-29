# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# json.array! @posts do |post|
#   json.partial! 'api/posts/post', post: post
# end

# heroku run bundle exec rails db:seed
require 'open-uri'

User.destroy_all
Trail.destroy_all
Review.destroy_all


demo_user = User.create([{first_name: "demo-user", last_name: "user", email: "demo@demo.com", city: "", state: "", password: "password"}])
user2 = User.create!([{first_name: "Henry David", last_name: "Thoreau", email: "walkinthewoods@fake.com", city: "Concord", state: "Massachusetts", password: "password"}])
user3 = User.create!([{first_name: "Johann Wolfgang", last_name: "von Goethe", email: "werther@naturalistfake.org", city: "Weimar", state: "Vermont", password: "password"}])
user4 = User.create!([{  first_name: "Emmylou", last_name: "Harris", email: "bluegrass@hikefake.com", city: "Nashville", state: "Tennessee", password: "password"}])


trail1 = Trail.create!(trail_name: "Angels Landing Trail",
                        park_id: 1,
                        difficulty: "difficult",
                        length: 4.4,
                        elevation_gain: 1604,
                        route_type: "Out & Back",
                        description: "The Angels Landing Trail is a strenuous
                                      route in Zion National Park with steep 
                                      drop-offs and very narrow sections. 
                                      The technical route and incredible views
                                      of Zion Canyon make this hike the most
                                      popular in Zion.",
                        lng: -112.951224,
                        lat: 37.259087,
                        waypoints:'-112.947857,37.26936')

  photo1 = open('https://off-beaten-path-seeds.s3.us-east-2.amazonaws.com/Angels_trail_landing.jpg')
  trail1.photo.attach(io: photo1, filename: 'angels_trail_landing.jpg')


trail2 = Trail.create(trail_name: "Zion Narrows Riverside Walk",
                        park_id: 1,
                        difficulty: "easy",
                        length: 1.9,
                        elevation_gain: 193,
                        route_type: "Out & Back",
                        description: "The Zion Narrows Riverside Walk is a
                                      1.9 mile heavily trafficked out and back
                                      trail located near Springdale, Utah
                                      that features a waterfall and is good for
                                      all skill levels. The trail is primarily
                                      used for hiking, walking, running, and
                                      nature trips and is best used from March
                                      until October. The Narrows should be on
                                      every outdoor enthusiast's bucket list.
                                      This route along the Riverside Walk Trail 
                                      is a relatively easy and paved
                                      out and back located at the end of the
                                      Zion Canyon Scenic Drive.",    
                        lng: -112.94762,
                        lat: 37.28516,
                        waypoints: '-112.948278,37.296651')
  
  photo2 = open('https://off-beaten-path-seeds.s3.us-east-2.amazonaws.com/zion_narrows_riverside.jpeg')
  trail2.photo.attach(io: photo2, filename: 'zion_narrows.jpg')


  trail3 = Trail.create(trail_name: "Emerald Pools Trail",
                        park_id: 1,
                        difficulty: "moderate",
                        length: 3.0,
                        elevation_gain: 620,
                        route_type: "Loop",
                        description: "Emerald Pools Trail is a 3 mile heavily trafficked loop trail located near Springdale, Utah that features a waterfall and is rated as moderate. The trail is primarily used for hiking and is best used from May until November.",    
                        lng: -112.95622,
                        lat: 37.25179,
                        waypoints: '-112.95622,37.25179;-112.95622,37.25179;-112.96569623443925,37.256845017140556;-112.96167302936777,37.25688614702615;-112.95155416784984,37.25976679368479;-112.95622,37.25179')

  photo3 = open('https://off-beaten-path-seeds.s3.us-east-2.amazonaws.com/emerald_pools_trail.jpg')
  trail3.photo.attach(io: photo3, filename: 'emerald_pools.jpg')




review1 = Review.create!([{author_id: 2, trail_id: 1, star_rating: 5, activity_type: 'hiking', activity_date: '2021-11-20', 
body: 'Amazing hike. I enjoyed the switchback trails and the view is truly angelic! Truly an enlightening experience'}])
review2 = Review.create!([{author_id: 3, trail_id: 3, star_rating: 5, activity_type: 'walking', activity_date: '2021-12-01', 
body: 'The emerald pools!! How romantic! Although not recommended, I ended up bathing in them due to the heat along the trail.'}])
review3 = Review.create!([{author_id: 2, trail_id: 3, star_rating: 5, activity_type: 'bird watching', activity_date: '2020-08-21', 
body: 'There are many birds along the emerald pools. It is a good path to bring your binoculars on and a lawn chair to observe.'}])
review4 = Review.create!([{author_id: 1, trail_id: 3, star_rating: 5, activity_type: 'walking', activity_date: '2020-11-21', 
body: 'This was a nice and easy walk along the emerald pools. I liked that it was a loop so the scenery was never repeated.'}])