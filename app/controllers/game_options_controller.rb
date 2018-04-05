class GameOptionsController < ApplicationController
  def index
     render(
       status: 200,
       json: GameOption.all
     )
 end
end
