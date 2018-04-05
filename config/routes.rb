Rails.application.routes.draw do
  scope '/api' do
    get :games, to: 'game_options#index'
    get :level, to: 'difficulties#index'
    get :cards, to: 'playing_cards#index'
  end
end
