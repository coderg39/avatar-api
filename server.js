const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())

const characters = {
    'aang':{
        'nation': 'air',
        'bending element': 'air, water, earth, fire. He\'s the mf avatar',
        'fun fact': 'can go into the avatar state'
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
    'zuko':{
        'nation': 'fire',
        'bending element': 'fire',
        'fun fact': 'is a cold swordsman',
    },
    'iroh':{
        'nation': 'fire',
        'bending element': 'fire',
        'fun fact': 'his nickname is \'The Dragon of the West\'',
    },
    'unknown': 'unknown character. please try another name'
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(req, res)=>{
    const name = req.params.name.toLowerCase()
    if (characters[name]){
        res.json(characters[name]['fun fact'])
    }else{
        res.json(characters['unknown'])
    }
    
})

app.listen(PORT)