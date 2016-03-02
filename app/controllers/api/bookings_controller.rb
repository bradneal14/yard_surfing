class Api::BookingsController < ApplicationController

  def create
    booking = current_user.bookings.create!(booking_params)
    render json: booking
  end

  def show
  end


  private

  def booking_params
    params.require(:booking).permit(:message, :num_guests, :start_date, :end_date)
  end
end
