class PlayingCardsController < ApplicationController
  def index
    q = params[:q]
    puts(params)
    if q.blank?
        render(
          status: 301,
          json: PlayingCard.where(category: "sample")
        )
     else render(
       status: 200,
       json: PlayingCard.where([`category = q`])
     )
   end
 end

 def show
   render(
     status: 200,
     json: PlayingCard.all()
   )
 end
end


#need to make the call dynamic - dependant upon which game button is selected.  need to pass in value
