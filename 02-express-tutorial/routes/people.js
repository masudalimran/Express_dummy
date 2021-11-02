const express = require('express');
const router = express.Router();
// let {people} = require('../data')

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')

// router.get('/', getPeople)
// router.post('/', createPerson)    
// ! POST METHOD
// router.post('/postman', createPersonPostman)
// ! PUT METHOD
// router.put('/:id', updatePerson)
// ! Delete Method
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/postmane').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router