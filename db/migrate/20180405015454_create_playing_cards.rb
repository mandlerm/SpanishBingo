class CreatePlayingCards < ActiveRecord::Migration[5.1]
  def change
    create_table :playing_cards do |t|
      t.string :english
      t.string :spanish
      t.string :category
      t.string :image
      t.string :audio

      t.timestamps
    end
  end
end
