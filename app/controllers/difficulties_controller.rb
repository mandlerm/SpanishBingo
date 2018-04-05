class DifficultiesController < ApplicationController
  def index
     render(
       status: 200,
       json: Difficulty.all
     )
 end
end
