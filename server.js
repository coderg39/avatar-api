const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

const characters = {
    'aang':{
        'nation': 'air',
        'bending element': 'air, water, earth, fire. He\'s the mf avatar',
        'specialty': 'can go into the avatar state'
    },
    'katara':{
        'nation': 'water',
        'bending element': 'water',
        'fun fact': 'can blood-bend'
    },
    'sokka':{
        'nation': 'water',
        'bending element': 'not a bender',
        'fun fact': 'is a ladies\' man'
    },
    'Zuko':{
        'nation': 'fire',
        'bending element': 'fire',
        'fun fact': 'is a cold swordsman',
    },
    'iroh':{
        'nation': 'fire',
        'bending element': 'fire',
        'fun fact': 'his nickname is \"The Dragon of the West\"',
    }
}

