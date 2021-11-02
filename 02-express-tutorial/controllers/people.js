let {people} = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const createPerson = (req, res)=> {
    const { name } = req.body
    if(!name){
        return res
        .status(400)
        .json({success: false, msg:'Please provide name value'})
    }
    res
        .status(201)
        .json({success: true, person: name})
}

const createPersonPostman = (req, res)=> {
    const { name } = req.body
    if(!name){
        return res
        .status(401)
        .json({success: false, msg:'Please provide name value'})
    }
    res
        .status(201)
        .json({success: true, data: [...people, name]})
}

const updatePerson = (req, res) => {
    const {id} = req.params
    const {name} = req.body
    console.log("id: ",id, "name: ", name); 
    const user = people.find((person)=>{
        return person.id === Number(id)
    })

    if(!user){
        return res
            .status(404)
            .json({success: false, msg: `No person with id ${id} found`})
    }
    const newUser = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res
        .status(200)
        .json({success: true, data: newUser})

}

const deletePerson = (req, res)=> {
    const user = people.find((person)=> person.id === Number(req.params.id))

    if(!user){
        return res
            .status(404)
            .json({success: false, msg: `No person with id ${req.params.id} found`})
    }

    const newUser = people.filter((person)=> person.id !== Number(req.params.id)) 
    return res
        .status(200)
        .json({success: true, data: newUser})

}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}