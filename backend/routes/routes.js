const { response } = require('express')
const express = require('express')
const router = express.Router()

const reminderTemplateCopy = require('../models/reminder')

router.post('/create', (req, res) => {
    console.log('Calling out to /api/create')

    const newReminder = new reminderTemplateCopy({
        title: req.body.title,
        body: req.body.body
    })

    newReminder.save()
    .then( data => {
        res.json(data)
        console.log('Call to /create was successful! Reponse: ')
        console.log(data)
    }).catch( e => {
        console.log('Call to /create failed. Error: ')
        response.json(e)
    })

})


module.exports = router