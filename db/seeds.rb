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
Park.destroy_all


demo_user = User.create([{first_name: "demo-user", last_name: "user", email: "demo@demo.com", city: "", state: "", password: "password"}])
user2 = User.create!([{first_name: "Henry David", last_name: "Thoreau", email: "walkinthewoods@fake.com", city: "Concord", state: "Massachusetts", password: "password"}])
user3 = User.create!([{first_name: "Johann Wolfgang", last_name: "von Goethe", email: "werther@naturalistfake.org", city: "Weimar", state: "Vermont", password: "password"}])
user4 = User.create!([{  first_name: "Emmylou", last_name: "Harris", email: "bluegrass@hikefake.com", city: "Nashville", state: "Tennessee", password: "password"}])


trail1 = Trail.create!(trail_name: "Angels Landing Trail",
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
                        details: "The Angels Landing Trail is a strenuous route in Zion National Park with steep drop-offs and very narrow sections. The technical route and incredible views of Zion Canyon make this hike the most popular in Zion. Start by parking at The Grotto Trailhead or taking the West Rim Shuttle to The Grotto shuttle stop. Begin by crossing a bridge over the Virgin River. The first 2-miles of the West Rim Trail are a well-maintained paved trail. Most of the path is sunny, but Refrigerator Canyon offers shade and often a cool breeze."
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
                        details: "Planning a trip to Zion to hike The Narrows should be on every outdoor enthusiast's bucket list. This route along the Riverside Walk Trail is a relatively easy and paved out and back located at the end of the Zion Canyon Scenic Drive. This route only includes the maintained trail. Those looking for a longer adventure can find the full Zion Narrows route that continues down the river past this trail's endpoint."
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
                        details: "This trail starts from Zion Lodge and crosses the bridge to a paved trail that leads to the Lower Emerald Pool and waterfalls. There are multiple pools here to soak up the sun and enjoy the variety of local flora and fauna. There are beautiful views of the valley but sometimes the water level in the pools can be low. The trail is well-maintained and there are some shady sections. It is an extremely family-friendly hike in the canyon and may be crowded on nice days."
                        lng: -112.95622,
                        lat: 37.25179,
                        waypoints: '-112.95622,37.25179;-112.95622,37.25179;-112.96569623443925,37.256845017140556;-112.96167302936777,37.25688614702615;-112.95155416784984,37.25976679368479;-112.95622,37.25179')

  photo3 = open('https://off-beaten-path-seeds.s3.us-east-2.amazonaws.com/emerald_pools_trail.jpg')
  trail3.photo.attach(io: photo3, filename: 'emerald_pools.jpg')


    trail4 = Trail.create(trail_name: "Eng, Lamsenjochhutte, Hahnenkamplspitze, Faule Eng Loop",
                        park_id: 2,
                        difficulty: "hard",
                        length: 11.8,
                        elevation_gain: 4199,
                        route_type: "Loop",
                        description: "Eng, Lamsenjochhütte, Hahnenkamplspitze, Faule Eng Loop is a 11.8 mile lightly trafficked loop trail located near Vomp, Tyrol, Austria that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking, nature trips, and bird watching.",    
                        details: "Beginning at the parking area at the Alpengasthof in the Eng (1203 meters), the trail starts on a paved walkway through part of the Ahornboden (Maple Tree Field) and the small village where there is a cheese factory and a small country store. Turn left onto the gravel road leading gently up to the first climb. Follow the signs to the Panoramaweg which will go uphill and lead past a small waterfall. The trail will then turn left into the woods. Along this route there are great views of the surrounding mountains. The Panoramaweg will eventually lead to Binsalm (1502). "
                        lng: 11.56734,
                        lat: 47.40236,
                        waypoints: '11.5490352,47.3991792;11.56734,47.40236')

  photo4 = open('https://off-beaten-path-seeds.s3.us-east-2.amazonaws.com/IMG_5948.jpeg')
  trail4.photo.attach(io: photo4, filename: 'eng.jpg')

  trail5 = Trail.create(trail_name: "Gaisalmsteig and Mariensteig via Oberaubach",
                      park_id: 2,
                      difficulty: "easy",
                      length: 5.0,
                      elevation_gain: 997,
                      route_type: "Point-to-Point",
                      description: "Gaisalmsteig and Mariensteig via Oberaubach is a 5 mile moderately trafficked point-to-point trail located near Achenkirch, Tyrol, Austria that features a lake and is good for all skill levels. The trail is primarily used for hiking, running, and bird watching.",    
                      details: "This route runs along the Achensee, which forms the natural border between the Karwendel and Rofan mountains. Since the path runs west of the Achensee, you are still in the Karwendel Mountains. On the Marienstig it goes to the Geiselalm. Bathing places invite you to take breaks and enjoy the cool water, which is why the route is particularly suitable for warm days. The return trip to the starting point can be done by boat. Parking at the starting point is possible at the Alpen Caravan Park (fees apply)."
                      lng: 11.7022,
                      lat: 47.49998,
                      waypoints: '11.70411,47.4423')

  photo5 = open('https://off-beaten-path-seeds.s3.us-east-2.amazonaws.com/IMG_6004.jpeg')
  trail5.photo.attach(io: photo5, filename: 'gaisalmstieg.jpg')




review1 = Review.create!([{author_id: 2, trail_id: 1, star_rating: 5, activity_type: 'hiking', activity_date: '2021-11-20', 
body: 'Amazing hike. I enjoyed the switchback trails and the view is truly angelic! Truly an enlightening experience'}])
review2 = Review.create!([{author_id: 3, trail_id: 3, star_rating: 5, activity_type: 'walking', activity_date: '2021-12-01', 
body: 'The emerald pools!! How romantic! Although not recommended, I ended up bathing in them due to the heat along the trail.'}])
review3 = Review.create!([{author_id: 2, trail_id: 3, star_rating: 5, activity_type: 'bird watching', activity_date: '2020-08-21', 
body: 'There are many birds along the emerald pools. It is a good path to bring your binoculars on and a lawn chair to observe.'}])
review4 = Review.create!([{author_id: 1, trail_id: 3, star_rating: 5, activity_type: 'walking', activity_date: '2020-11-21', 
body: 'This was a nice and easy walk along the emerald pools. I liked that it was a loop so the scenery was never repeated.'}])
review5 = Review.create!([{author_id: 2, trail_id: 4, star_rating: 5, activity_type: 'backpacking', activity_date: '2021-08-21', 
body: 'This trail was very strenuous and hiking along the passes required sure-footedness, but once you reach the summit of Lamsenjoch, what a sight!! I definitely recommend this hike.'}])
review6 = Review.create!([{author_id: 3, trail_id: 5, star_rating: 5, activity_type: 'backpacking', activity_date: '2020-06-15', 
body: 'The hike along the clear, blue water was absolutely lovely. It was an easy hike and there was room to sit by the water. I ended up napping in the fresh mountain air and writing in my journal. Thereafter, I rushed to the endpoint to catch the boat home.'}])
review7 = Review.create!([{author_id: 3, trail_id: 4, star_rating: 5, activity_type: 'backpacking', activity_date: '2020-010-15', 
body: 'I LOVED LOVED LOVED the mountain air, but the hike was less leisurly. I saw there was an option for via ferrata on one path, never in my life would I do that!'}])


park1 = Park.create!([{ parkName: "Zion National Park",
                        city: "Springdale",
                        state: "Utah",
                        country: "United States",
                        park_type: "national",
                        acreage: 146597,
                        park_description: "Zion National Park is a unique landscape with high cliffs, narrow gorges and a beautiful view. The park has 
                        many famous walks. Angels Landing is an intense switchback trail with truly spectacular views from the top of the canyon. 
                        Another famous hike is the unique Narrows Trail, a very long hike through a river that lies between a steep gorge. Other 
                        notable trails include the East Rim Trail to the park's highest point, the Slot Canyon Subway Trail, and the family-friendly 
                        but equally beautiful Kayenta Trail. There's also the paved Emerald Pools Trail and the more challenging West Rim Trail for 
                        backpackers.",
                        contact: "Zion National Park
                                  Springdale, UT 84767-1099
                                  For Visitor Information, call: 1-435-772-3256",
                        park_hours: "Monday - Friday: All Day
                                    Please note, however, that not all areas including the entrance and the visitor center are occupied or open. 
                                    Please also note that roads, trails and other parks in the park are closed seasonally. Shuttle buses do not run 
                                    from late November to mid-February.",
                        longitude: -112.83612,
                        latitude: 37.16124,          
                        }])

photo6 = open('https://off-beaten-path-seeds.s3.us-east-2.amazonaws.com/Zion-National-Park.jpg')
park1.photo.attach(io: photo6, filename: 'zion.jpg')

park2 = Park.create!([{ parkName: "Karwendel Nature Park",
                        city: "",
                        state: "Tyrol",
                        country: "Austria",
                        park_type: "national",
                        acreage: 179646,
                        park_description: "Karwendel Nature Park, located on the border of Bavaria and Tyrol, is Austria's largest Nature Park at 727 sq km. Known for its crystal clear rivers, high alpine meadows, and distinct rocky peaks, this park is one of Austria's most popular protected areas. The diverse landscape provides habitats for a wide range of plant and animal life, including the golden eagle. In the incredible Hall Valley,  hikers can explore the salt mines and take in the panoramic views of the region. A couple of other popular options are Gleirschklamm, Seefeld, and Scharnitz. Whether you plan on visiting in the summer or winter, Karwendel Nature Park is sure to have something to offer nature lovers all year long.",
                        contact: "For Visitor Information, call: 05245/289 14",
                        park_hours: "Monday - Friday: All Day",
                        longitude: 11.86278,
                        latitude: 48.13722,          
                        }])


photo7 = open('https://off-beaten-path-seeds.s3.us-east-2.amazonaws.com/IMG_5982.jpeg')
park2.photo.attach(io: photo7, filename: 'karwendel.jpg')