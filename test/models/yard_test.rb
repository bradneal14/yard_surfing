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

require 'test_helper'

class YardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
