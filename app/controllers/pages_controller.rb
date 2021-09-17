class PagesController < ApplicationController
  before_action :authenticate_user!, except: %i[ twoplayers]
  before_action :set_stats, only: %i[game]

	def home
	end 


  def twoplayers
  end

end