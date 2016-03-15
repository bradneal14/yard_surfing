# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  description     :text
#  location        :string
#  gender          :string
#  birthday        :date
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'bcrypt'

class User < ActiveRecord::Base

  validates :email, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password
  before_save :default_pic

  has_many :yards

  has_many :bookings,
    foreign_key: :requester_id,
    primary_key: :id,
    class_name: "Booking"

  has_many :host_bookings,
    through: :yards,
    source: :bookings

  after_initialize :ensure_session_token


  def default_pic
    if self.gender == "male"
      self.main_pic_url ||= "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg"
    end
    if self.gender == "female"
      self.main_pic_url ||= "http://cdn.imgs.steps.dragoart.com/how-to-draw-an-anime-girl-step-5_1_000000071791_5.png"
    else
      self.main_pic_url ||= "http://d2c4zcito95dfk.cloudfront.net/assets/default_profile_image_large-e61b362fc14b3206204a64e603d7ad80.png"
    end
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

end
