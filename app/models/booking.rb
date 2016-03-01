class Booking < ActiveRecord::Base

  belongs_to :user,
    foreign_key: :requester_id,
    primary_key: :id,
    class_name: "User"

  belongs_to :yard

  validates :start_date, :end_date, :yard_id, :user_id, :num_guests, presence: true
  validate :start_date_before_end_date
  validate :requested_period_available

  end


  private

  def start_date_before_end_date
    return unless start_date && end_date
    errors[:start_date] << "must come before end date" if start_date > end_date
  end

  def requested_period_available
    unless overlapping_unbookable_period.empty?
      errors[:base] << "Requested date is not available"
    end
  end

end
