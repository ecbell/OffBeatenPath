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
#   password_digest: "$2a$12$SFMoEI18ck/L4FtIILSZuuQ5iGf/lpEb69nxst2i0tqaZSiGnc0Wq",
#   session_token: "QWOEcu59Jbnjo3hO_vuA3A",
#   created_at: Fri, 19 Nov 2021 22:25:28 UTC +00:00,
#   updated_at: Fri, 19 Nov 2021 22:25:34 UTC +00:00>,
#  #<User:0x00007fbe8e562b98
#   id: 5,
#   first_name: "Emmylou",
#   last_name: "Harris",
#   email: "bluegrass@hike.com",
#   city: "",
#   state: "",
#   password_digest: "$2a$12$2rLdVkyABdOnuq4UL1wLMOo9EieVFaFUCO44nNjtNVWDvq8e8oKti",
#   session_token: "MHZ9AQLgGSvGdxQkbb25Og",
#   created_at: Fri, 19 Nov 2021 22:27:42 UTC +00:00,
#   updated_at: Fri, 19 Nov 2021 22:27:46 UTC +00:00>,
#  #<User:0x00007fbe8e5628a0
#   id: 2,
#   first_name: "Emily",
#   last_name: "Bell",
#   email: "hikelover@parks.org",
#   city: "Birmingham",
#   state: "Alabama",
#   password_digest: "$2a$12$kABaF40u/pabO4FpA0iOiulm7DZjfNQ4ZoFqQeStcdg/6hGiWWy6W",
#   session_token: "ZJF-LmwXmNibxvS5cnm4AQ",
#   created_at: Fri, 19 Nov 2021 21:55:01 UTC +00:00,
#   updated_at: Fri, 19 Nov 2021 22:54:53 UTC +00:00>,
#  #<User:0x00007fbe8e5625a8
#   id: 6,
#   first_name: "demo-user",
#   last_name: "user",
#   email: "demo@demo.com",
#   city: "",
#   state: "",
#   password_digest: "$2a$12$um1uHD2AfW1Locm0b4DYieFxtZ37tfgNfTcTuvQxhLfhYOhYQWX4K",
#   session_token: "TFUJrWhJE6wpkQW-TtxLFw",
#   created_at: Fri, 19 Nov 2021 23:05:00 UTC +00:00,
#   updated_at: Fri, 19 Nov 2021 23:05:23 UTC +00:00>]
# (END)
