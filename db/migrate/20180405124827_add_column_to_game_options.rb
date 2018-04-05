class AddColumnToGameOptions < ActiveRecord::Migration[5.1]
  def change
    add_column :game_options, :db_name, :string
  end
end
