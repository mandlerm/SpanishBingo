class PlayingCardsController < ApplicationController
  def index
     render(
       status: 200,
       json: PlayingCard.all
     )
 end
end
