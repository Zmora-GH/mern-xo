const {Router} = require('express');

const router = Router();


router.post('/signup', async (req, res) => {
    console.log('signup')
});

router.post('/signin', async (req, res) => {
    console.log('signin')
});

router.post('/logout', async (req, res) => {
    console.log('logout')
});

module.exports = router;
