# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Tilling Soil..."
User.destroy_all
Lease.destroy_all
Request.destroy_all



puts "🌱 Seeding Users..."

u1 = User.create(username: "Joey Faris", email: "joeyfaris1@yahoo.com", password:"password", password_confirmation: "password")
u2 = User.create(username: "Sean Mitchell", email: "seanmitchell@yahoo.com", password:"password", password_confirmation: "password")
u3 = User.create(username: "Sarah Romano", email: "sarahromano@yahoo.com", password:"password", password_confirmation: "password")
u4 = User.create(username: "Paige Brockhoff", email: "paigebrockhoff@yahoo.com", password:"password", password_confirmation: "password")
u5 = User.create(username: "Thomas Stiller", email: "thomasstiller@yahoo.com", password:"password", password_confirmation: "password")
u6 = User.create(username: "Christian Manning", email: "christianmanning@yahoo.com", password:"password", password_confirmation: "password")

puts "🌱 Seeding Leases..."

l1 = Lease.create(pdf: "https://www.aircre.com/site/wp-content/uploads/2021/01/Multi-Tenant-Office-Lease-Net.pdf", base_rent: "2150.70", nnn_expenses:"254.40", electric: "114.29", gas: "52.12", user_id: u1.id)
l1 = Lease.create(pdf: "https://www.aircre.com/site/wp-content/uploads/2021/01/Multi-Tenant-Office-Lease-Net.pdf", base_rent: "4150.03", nnn_expenses:"456.00", electric: "144.29", gas: "112.12", user_id: u2.id)

puts "🌱 Seeding Requests..."

r1 = Request.create(category: "Elevator", comment: "South entrance elevator 2 not working.", completeness: false, user_id: u6.id)
r2 = Request.create(category: "Lobby", comment: "Two chairs broken in the lobby waiting area.", completeness: false, user_id: u2.id)
r3 = Request.create(category: "Doors and Locks", comment: "The lock on the door to the stairs on floor 4 is broken.", completeness: false, user_id: u3.id)
r4 = Request.create(category: "Electrical and Lighting", comment: "Lighting fixture on floor two in the hallway is flickering.", completeness: false, user_id: u4.id)
r5 = Request.create(category: "Parking", comment: "Key pad in parking structure not functioning properly.", completeness: false, user_id: u5.id)
r6 = Request.create(category: "Patio/Outdoors", comment: "Grill not working in the north facing patio", completeness: false, user_id: u6.id)
r7 = Request.create(category: "Roof", comment: "Water leaking from the roof in Suite 255", completeness: false, user_id: u6.id)

puts r2.category
puts "COMPLETE!"