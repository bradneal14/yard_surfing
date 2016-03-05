# == Schema Information
#
# Table name: yards
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  user_id     :integer          not null
#  description :text
#  location    :string
#  lng         :float
#  lat         :float
#  about       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Yard < ActiveRecord::Base

  belongs_to :user

  has_many :bookings

  has_many :yard_photos

  before_save :ensure_owner_pic

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
  end

  def ensure_owner_pic
    self.owner_pic_url ||= self.user.main_pic_url
  end


end
