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

