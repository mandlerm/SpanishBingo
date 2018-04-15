# 3 game category options
GameOption.create({'name' => 'Sample Game', 'db_name' => 'sample'})
GameOption.create({'name' => 'Food - coming soon', 'db_name' => 'food' })
GameOption.create({'name' => 'Things - coming soon', 'db_name' => 'things'})
# GameOption.create({'name' => 'Actions'})
# GameOption.create({'name' => 'Things'})

# 2 difficulty levels
Difficulty.create({'level'=> 'Easy'})
Difficulty.create({'level'=> 'Not quite as easy'})


# Sample game
sample_game_list = [
  ["yellow", "amarillo","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888560/spanish%20bingo%20game%201/amarillo.png' ,
    'http://res.cloudinary.com/mandlerm/video/upload/v1522888560/spanish%20bingo%20game%201/amarillo.ogg'],
  ["plane", "el avión","sample",
    'http://res.cloudinary.com/mandlerm/image/upload/v1522888490/spanish%20bingo%20game%201/avion.jpg',
    'http://res.cloudinary.com/mandlerm/video/upload/v1522888490/spanish%20bingo%20game%201/avio%CC%81n.ogg' ],
  ["blue", "azul","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888390/spanish%20bingo%20game%201/azul.png',
    'https://res.cloudinary.com/mandlerm/video/upload/v1522888390/spanish%20bingo%20game%201/azul_copy.ogg'],
  ["bicycle", "la bicicleta","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888385/spanish%20bingo%20game%201/bicycle.png',
    'https://res.cloudinary.com/mandlerm/video/upload/v1522888385/spanish%20bingo%20game%201/bicicleta.ogg'],
  ["head", "la cabeza","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888469/spanish%20bingo%20game%201/la_cabeza.png',
    'https://res.cloudinary.com/mandlerm/video/upload/v1522888469/spanish%20bingo%20game%201/la_cabeza.ogg'],
  ["white", "blanco","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888527/spanish%20bingo%20game%201/blanco.png',
    'https://res.cloudinary.com/mandlerm/video/upload/v1522888527/spanish%20bingo%20game%201/blanco.ogg'],
  ["tree", "el arbol","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888519/spanish%20bingo%20game%201/el_arbol.jpg',
    'https://res.cloudinary.com/mandlerm/video/upload/v1522888519/spanish%20bingo%20game%201/el_a%CC%81rbol.ogg'],
  ["horse", "caballo","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888483/spanish%20bingo%20game%201/el_caballo.png',
    'https://res.cloudinary.com/mandlerm/video/upload/v1522888483/spanish%20bingo%20game%201/el_caballo.ogg'],
  ["finger", "el dedo","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888425/spanish%20bingo%20game%201/el_dedo.ico',
    'https://res.cloudinary.com/mandlerm/video/upload/v1522888425/spanish%20bingo%20game%201/el_dedo.ogg'],
  ["tooth", "diente","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888506/spanish%20bingo%20game%201/el_diente.jpg',
    'https://res.cloudinary.com/mandlerm/video/upload/v1522888425/spanish%20bingo%20game%201/el_dedo.ogg'],
  ["fire", "el fuego","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888440/spanish%20bingo%20game%201/el_fuego.jpg',
    'https://res.cloudinary.com/mandlerm/video/upload/v1522888441/spanish%20bingo%20game%201/el_fuego.ogg'],
  ["cat", "el gato","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888393/spanish%20bingo%20game%201/el_gato.png',
    'https://res.cloudinary.com/mandlerm/video/upload/v1522888393/spanish%20bingo%20game%201/el_gato.ogg'],
  ["glasses", "las gafas","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888448/spanish%20bingo%20game%201/gafas.png',
    'https://res.cloudinary.com/mandlerm/video/upload/v1522888448/spanish%20bingo%20game%201/gafas.ogg'],
  ["grey", "gris","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888455/spanish%20bingo%20game%201/gris.png',
    'https://res.cloudinary.com/mandlerm/video/upload/v1522888456/spanish%20bingo%20game%201/gris.ogg'],
  ["bed", "la cama","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888363/spanish%20bingo%20game%201/la_cama.png',
    'https://res.cloudinary.com/mandlerm/video/upload/v1522888363/spanish%20bingo%20game%201/la_cama.ogg'],
  ["face", "la cara","sample",
    'https://res.cloudinary.com/mandlerm/image/upload/v1522888409/spanish%20bingo%20game%201/la_cara.jpg',
    'https://res.cloudinary.com/mandlerm/video/upload/v1522888409/spanish%20bingo%20game%201/la_cara.ogg']
]

sample_game_list.each do |english,spanish,cat,image,audio|
  PlayingCard.create(english:english, spanish:spanish, category:cat, image:image, audio:audio)
end


# sample_game_list = [
#   ["yellow", "amarillo","color",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888560/spanish%20bingo%20game%201/amarillo.png' ,
#     'http://res.cloudinary.com/mandlerm/video/upload/v1522888560/spanish%20bingo%20game%201/amarillo.ogg'],
#   ["plane", "el avión","thing",
#     'http://res.cloudinary.com/mandlerm/image/upload/v1522888490/spanish%20bingo%20game%201/avion.jpg',
#     'http://res.cloudinary.com/mandlerm/video/upload/v1522888490/spanish%20bingo%20game%201/avio%CC%81n.ogg' ],
#   ["blue", "azul","color",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888390/spanish%20bingo%20game%201/azul.png',
#     'https://res.cloudinary.com/mandlerm/video/upload/v1522888390/spanish%20bingo%20game%201/azul_copy.ogg'],
#   ["bicycle", "la bicicleta","thing",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888385/spanish%20bingo%20game%201/bicycle.png',
#     'https://res.cloudinary.com/mandlerm/video/upload/v1522888385/spanish%20bingo%20game%201/bicicleta.ogg'],
#   ["head", "la cabeza","thing",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888469/spanish%20bingo%20game%201/la_cabeza.png',
#     'https://res.cloudinary.com/mandlerm/video/upload/v1522888469/spanish%20bingo%20game%201/la_cabeza.ogg'],
#   ["white", "blanco","color",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888527/spanish%20bingo%20game%201/blanco.png',
#     'https://res.cloudinary.com/mandlerm/video/upload/v1522888527/spanish%20bingo%20game%201/blanco.ogg'],
#   ["tree", "el arbol","thing",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888519/spanish%20bingo%20game%201/el_arbol.jpg',
#     'https://res.cloudinary.com/mandlerm/video/upload/v1522888519/spanish%20bingo%20game%201/el_a%CC%81rbol.ogg'],
#   ["horse", "caballo","animal",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888483/spanish%20bingo%20game%201/el_caballo.png',
#     'https://res.cloudinary.com/mandlerm/video/upload/v1522888483/spanish%20bingo%20game%201/el_caballo.ogg'],
#   ["finger", "el dedo","thing",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888425/spanish%20bingo%20game%201/el_dedo.ico',
#     'https://res.cloudinary.com/mandlerm/video/upload/v1522888425/spanish%20bingo%20game%201/el_dedo.ogg'],
#   ["tooth", "diente","thing",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888506/spanish%20bingo%20game%201/el_diente.jpg',
#     'https://res.cloudinary.com/mandlerm/video/upload/v1522888425/spanish%20bingo%20game%201/el_dedo.ogg'],
#   ["fire", "el fuego","thing",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888440/spanish%20bingo%20game%201/el_fuego.jpg',
#     'https://res.cloudinary.com/mandlerm/video/upload/v1522888441/spanish%20bingo%20game%201/el_fuego.ogg'],
#   ["cat", "el gato","animal",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888393/spanish%20bingo%20game%201/el_gato.png',
#     'https://res.cloudinary.com/mandlerm/video/upload/v1522888393/spanish%20bingo%20game%201/el_gato.ogg'],
#   ["glasses", "las gafas","glasses",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888448/spanish%20bingo%20game%201/gafas.png',
#     'https://res.cloudinary.com/mandlerm/video/upload/v1522888448/spanish%20bingo%20game%201/gafas.ogg'],
#   ["grey", "gris","color",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888455/spanish%20bingo%20game%201/gris.png',
#     'https://res.cloudinary.com/mandlerm/video/upload/v1522888456/spanish%20bingo%20game%201/gris.ogg'],
#   ["bed", "la cama","thing",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888363/spanish%20bingo%20game%201/la_cama.png',
#     'https://res.cloudinary.com/mandlerm/video/upload/v1522888363/spanish%20bingo%20game%201/la_cama.ogg'],
#   ["face", "la cara","thing",
#     'https://res.cloudinary.com/mandlerm/image/upload/v1522888409/spanish%20bingo%20game%201/la_cara.jpg',
#     'https://res.cloudinary.com/mandlerm/video/upload/v1522888409/spanish%20bingo%20game%201/la_cara.ogg']
# ]
# # Card List for Food
# food_card_list = [
#   ["apple", "la manzana","food"],
#   ["banana", "la manzana","food"],
#   ["potato", "la papa","food"],
#   ["carrot", "la zanahoria","food"],
#   ["grape", "la uva","food"],
#   ["pineapple", "la piña","food"],
#   ["strawberry", "la fresa","food"],
#   ["broccoli", "el brócoli","food"],
#   ["corn", "el maíz","food"],
#   ["peas", "el guisante","food"],
#   ["blueberry", "el arándano","food"],
#   ["orange", "la naranja","food"],
#   ["celery", "el apio","food"],
#   ["rice", "el arroz","food"],
#   ["onion", "el cebollo","food"],
#   ["lettuce", "la lechuga","food"]
# ]

#Card list for things
# thing_card_list = [
#   ["book", "el libro","things"],
#   ["car", "el carro","things"],
#   ["bike", "la bicicleta","things"],
#   ["plane", "el avión","things"],
#   ["table", "la mesa","things"],
#   ["shoe", "el zapato","things"],
#   ["ball", "la pelota","things"],
#   ["shirt", "la camisa","things"],
#   ["chair", "la silla","things"],
#   ["watch", "el reloj","things"],
#   ["glasses", "las gafas","things"],
#   ["hat", "el gorro","things"],
#   ["backpack", "la mochila","things"],
#   ["bed", "la cama","things"],
#   ["door", "el puerto","things"],
#   ["window", "la ventana","things"]
# ]
#
# #Card list for Actions
# actions_card_list = [
#   ["walk", "caminar","actions"],
#   ["run", "correr","actions"],
#   ["eat", "comer","actions"],
#   ["sleep", "dormir","actions"],
#   ["wake up", "despertarse","actions"],
#   ["lie down", "acostarse","actions"],
#   ["throw (ball)", "tirar","actions"],
#   ["drive", "conducir","actions"],
#   ["ride (bike)", "montar","actions"],
#   ["read", "leer","actions"],
#   ["write", "escribir","actions"],
#   ["kick (ball)", "golpear","actions"],
#   ["talk", "hablar","actions"],
#   ["draw", "dibujar","actions"],
#   ["drink", "beber","actions"],
#   ["sit", "sentarse","actions"]
# ]
#
# #Card list for basic words
# basic_words_list = [
#   ["hello", "hola","basic words"],
#   ["goodbye", "adiós","basic words"],
#   ["sun", "el sol","basic words"],
#   ["up", "arriba","basic words"],
#   ["down", "abajo","basic words"],
#   ["left", "la izquierda","basic words"],
#   ["right", "el derecho","basic words"],
#   ["moon", "la luna","basic words"],
#   ["stars", "ls estrellas","basic words"],
#   ["grey", "gris","basic words"],
#   ["white", "blanco","basic words"],
#   ["red", "rojo","basic words"],
#   ["blue", "azul","basic words"],
#   ["green", "verde","basic words"],
#   ["yellow", "amarillo","basic words"],
#   ["black", "negro","basic words"]
# ]

# actions_card_list.each do |english,spanish,cat|
#   PlayingCard.create(english:english, spanish:spanish, category:cat)
# end
#
# basic_words_list.each do |english,spanish,cat|
#   PlayingCard.create(english:english, spanish:spanish, category:cat)
# end
#
# food_card_list.each do |english,spanish,cat|
#   PlayingCard.create(english:english, spanish:spanish, category:cat)
# end
#
# thing_card_list.each do |english,spanish,cat|
#   PlayingCard.create(english:english, spanish:spanish, category:cat)
# end
