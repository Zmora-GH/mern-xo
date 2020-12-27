const {Router} = require('express');
const Tag = require('../models').Tag;
const Game = require('../models').Game;
const Sequelize = require('sequelize');

const router = Router();

router.get('/tags', async (req, res) => {
    try {
        const tags = await Tag.findAll()
        res.json(tags)
    } catch (err) {
        res.status(500)
    }
});

router.post('/create', async (req, res) => {
    try {
        const {name, tags} = req.body
        // - - - >
        res.json({name, tags})
    } catch (err) {
        res.status(500)
    }
});

    // try {
    //     const {name, tags} = req.body
    //     const game = await Game.create({name})
    //     for (var i in tags) {
    //         const temp_tag = await Tag.findOrCreate( { where: {name: tags[i]}});
    //         temp_tag.addGame(game);
    //         game.addTag(temp_tag);
    //     }
    //     res.status(201).json({gameId: game.id})
    // } catch (err) {
    //     console.log(err);
    //     res.status(500)
    // }
    // console.log("> > IN CREATE: ");


router.get('/games', async (req, res) => {
    try {
        const games = await Game.findAll()
        res.json(games)
    } catch (err) {
        res.status(500)
    }
});

module.exports = router;
