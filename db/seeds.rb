# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# heroku run bundle exec rails db:seed

User.destroy_all
demo_user = User.create([{first_name: "demo-user", last_name: "user", email: "demo@demo.com", city: "", state: "", password: "password"}])

trail1 = Trail.create([{trail_name: "Angels Landing Trail",
                        park_id: 1,
                        difficulty: "hard",
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
                        waypoints: '-112.951224,37.259087,-112.947857,37.26936' }])

trail2 = Trail.create([{trail_name: "Zion Narrows Riverside Walk",
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
                        lng: -112.94829,
                        lat: 37.293665}])

#   id: 3,
#   first_name: "Henry David",
#   last_name: "Thoreau",
#   email: "walkinthewoods@trial.com",
#   city: "Concord",
#   state: "Massachusetts",
#   password_digest: "$2a$12$2MJOGbqNz0NHgjkY8y6xluibXhg/CtfNi1Si8RB29DJ3ZiXVV8dXC",
#   session_token: "EuoTxb2BXYaaoiO4DpuFhw",
#   created_at: Fri, 19 Nov 2021 22:16:24 UTC +00:00,
#   updated_at: Fri, 19 Nov 2021 22:16:35 UTC +00:00>,
#  #<User:0x00007fbe8e562e90
#   id: 4,
#   first_name: "Johann Wolfgang",
#   last_name: "von Goethe",
#   email: "werther@naturalist.org",
#   city: "Weimar",
#   state: "Vermont",

#  #<User:0x00007fbe8e562b98
#   id: 5,
#   first_name: "Emmylou",
#   last_name: "Harris",
#   email: "bluegrass@hike.com",
#   city: "",
#   state: "",

#  #<User:0x00007fbe8e5625a8
#   id: 6,
#   first_name: "demo-user",
#   last_name: "user",
#   email: "demo@demo.com",
#   city: "",
#   state: "",

