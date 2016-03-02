# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160302223317) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "yard_id",      null: false
    t.integer  "requester_id", null: false
    t.text     "message"
    t.date     "start_date",   null: false
    t.date     "end_date",     null: false
    t.integer  "num_guests",   null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "bookings", ["requester_id"], name: "index_bookings_on_requester_id", using: :btree
  add_index "bookings", ["yard_id"], name: "index_bookings_on_yard_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "fname",           null: false
    t.string   "lname",           null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.text     "description"
    t.string   "location"
    t.string   "gender"
    t.date     "birthday"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "main_pic_url"
    t.string   "thumb_pic_url"
  end

  create_table "yard_photos", force: :cascade do |t|
    t.integer  "yard_id",      null: false
    t.string   "yard_pic_url", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "yard_photos", ["yard_id"], name: "index_yard_photos_on_yard_id", using: :btree

  create_table "yards", force: :cascade do |t|
    t.string   "title",         null: false
    t.integer  "user_id",       null: false
    t.text     "description"
    t.string   "location"
    t.float    "lng"
    t.float    "lat"
    t.text     "about"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.integer  "max_guest_num"
    t.boolean  "water_status"
    t.boolean  "fire_status"
    t.boolean  "toilet_status"
    t.boolean  "shower_status"
  end

  add_index "yards", ["user_id"], name: "index_yards_on_user_id", using: :btree

end
