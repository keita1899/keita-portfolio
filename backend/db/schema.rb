# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2025_01_20_073830) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "abilities", force: :cascade do |t|
    t.text "content", null: false
    t.bigint "skill_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["skill_id"], name: "index_abilities_on_skill_id"
  end

  create_table "careers", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "organization", null: false
    t.string "detail", null: false
    t.string "start_date", null: false
    t.string "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_careers_on_user_id"
  end

  create_table "certifications", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name", null: false
    t.string "acquired_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_certifications_on_user_id"
  end

  create_table "environments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "label", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_environments_on_user_id"
  end

  create_table "features", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "portfolio_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["portfolio_id"], name: "index_features_on_portfolio_id"
  end

  create_table "hobbies", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_hobbies_on_user_id"
  end

  create_table "images", force: :cascade do |t|
    t.string "url", null: false
    t.bigint "portfolio_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["portfolio_id"], name: "index_images_on_portfolio_id"
  end

  create_table "pages", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "portfolio_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["portfolio_id"], name: "index_pages_on_portfolio_id"
  end

  create_table "portfolio_tags", force: :cascade do |t|
    t.bigint "portfolio_id", null: false
    t.bigint "tag_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["portfolio_id"], name: "index_portfolio_tags_on_portfolio_id"
    t.index ["tag_id"], name: "index_portfolio_tags_on_tag_id"
  end

  create_table "portfolios", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name", null: false
    t.string "thumbnail", null: false
    t.text "commitment", null: false
    t.text "challenges", null: false
    t.text "description", null: false
    t.string "demo_url", null: false
    t.string "github_url", null: false
    t.string "blog_url", null: false
    t.integer "duration", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_portfolios_on_user_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.integer "age", null: false
    t.date "birthday", null: false
    t.string "hometown", null: false
    t.text "description", null: false
    t.string "avatar", null: false
    t.string "github_url", null: false
    t.string "blog_url", null: false
    t.string "x_url", null: false
    t.string "qiita_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "skills", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name", null: false
    t.string "logo_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_skills_on_user_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_tags_on_name", unique: true
  end

  create_table "tech_stacks", force: :cascade do |t|
    t.string "technology", null: false
    t.string "version", null: false
    t.bigint "portfolio_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["portfolio_id"], name: "index_tech_stacks_on_portfolio_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "abilities", "skills"
  add_foreign_key "careers", "users"
  add_foreign_key "certifications", "users"
  add_foreign_key "environments", "users"
  add_foreign_key "features", "portfolios"
  add_foreign_key "hobbies", "users"
  add_foreign_key "images", "portfolios"
  add_foreign_key "pages", "portfolios"
  add_foreign_key "portfolio_tags", "portfolios"
  add_foreign_key "portfolio_tags", "tags"
  add_foreign_key "portfolios", "users"
  add_foreign_key "profiles", "users"
  add_foreign_key "skills", "users"
  add_foreign_key "tech_stacks", "portfolios"
end
