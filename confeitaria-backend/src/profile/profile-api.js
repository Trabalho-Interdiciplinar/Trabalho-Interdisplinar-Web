const express = require('express')
const ProfileService = require('./profileService')

const router = express.Router()

router.get('/profile', async(req, res) => {
    try {
        const profileService = new ProfileService()
        let profile = await profileService.fetchProfile(req.query.confeitariaId)
        res.send(profile)
    } catch (error) {
        res.sendStatus(500)
    }
})

module.exports = router