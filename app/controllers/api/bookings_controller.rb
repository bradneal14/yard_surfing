class Api::BookingsController < ApplicationController

  def create
    booking = current_user.bookings.new(booking_params)
    if booking.save
      render json: booking
    else
      render json: {errors: booking.errors.full_messages}, status: 422
    end
  end

  def show
  end


  private

  def booking_params
    params.require(:booking).permit(:message, :num_guests, :yard_id, :start_date, :end_date)
  end
end
