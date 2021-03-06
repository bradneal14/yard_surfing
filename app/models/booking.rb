class Booking < ActiveRecord::Base

  belongs_to :user,
    foreign_key: :requester_id,
    primary_key: :id,
    class_name: "User"

  belongs_to :yard

  validates :start_date, :end_date, :yard_id, :requester_id, presence: true
  validates_numericality_of :num_guests, greater_than: 0
  validate :start_date_before_end_date


  private

  def start_date_before_end_date
    return unless start_date && end_date
    errors[:start_date] << "must come before end date" if start_date > end_date
  end

end
