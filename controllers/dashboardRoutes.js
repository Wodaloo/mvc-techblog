
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const postData = await Post.findAll({

        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/newPost', withAuth, (req, res) => {
    res.redirect('newPost');

});



router.get('/edit/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {

        });

        const post = postData.get({ plain: true });

        res.render('editPost', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;