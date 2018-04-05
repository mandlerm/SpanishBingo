class PlayingCardsController < ApplicationController
  def index
     render(
       status: 200,
       json: PlayingCard.where(["category = 'sample'"])
     )
 end
end


#need to make the call dynamic - dependant upon which game button is selected.  need to pass in value
