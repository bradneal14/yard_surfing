class BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render json: @booking
    end
  end

  def show
  end
  

  private

  def booking_params
    params.require(:booking).permit(:message, :yard_id, :requester_id, :num_guests, :start_date, :end_date)
end
