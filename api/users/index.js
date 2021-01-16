import express from "express";
import User from "./userModel";
import jwt from 'jsonwebtoken';
import movieModel from '../movies/movieModel';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get("/", (req, res) => {
  User.find()
  .then((users) => res.status(200).json(users))
  .catch(err => next(err));
});

// register
router.post("/", (req, res, next) => {
  User.create(req.body)
    .then((user) =>
      res.status(200).json({ success: true, token: "FakeTokenForNow" })
    )
    .catch( (error) => next(error));
});

// authenticate a user
router.post('/', async (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    res.status(401).json({
      success: false,
      msg: 'Please pass username and password',
    });
  }
  if (req.query.action === 'register') {
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    if (!pattern.test(req.body.password)) {
      res.status(401).send('The password is too weak. It should contain at 5 chars and at least 1 number and 1 char');
    } else {
      await User.create(req.body).catch(next);
      res.status(201).json({
        code: 201,
        msg: 'Successful created new user',
      });
    }
  } else {
    const user = await User.findByUserName(req.body.username).catch(next);
    if (!user) return res.status(401).json({ code: 401, msg: 'Authentication failed. User not found.' });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch && !err) {
        // if user is found and password is right create a token
        const token = jwt.sign(user.username, process.env.SECRET);
        res.status(200).json({
          success: true,
          token: 'BEARER ' + token
        });
      } else {
        res.status(401).json({
          code: 401,
          msg: 'Authentication failed. Wrong password.'
        });
      }
    });
  }
});

// Update a user
router.put("/:id", (req, res) => {
  if (req.body._id) delete req.body._id;
  User.update(
    {
      _id: req.params.id,
    },
    req.body,
    {
      upsert: false,
    })
    .then((user) => res.json(200, user))
    .catch(err => next(err));
});

router.post('/:userName/favourites', (req, res, next) => {
  const newFavourite = req.body;
  const query = {username: req.params.userName};
  if (newFavourite && newFavourite.id) {
    User.find(query).then(
      user => {
        (user.favourites)?user.favourites.push(newFavourite):user.favourites =[newFavourite];
        User.findOneAndUpdate(query, {favourites:user.favourites}, {
          new: true
        }).then(user => res.status(201).send(user));
      }
    ).catch( (error) => next(error) );
  } else {
      res.status(401).send(`Unable to find user ${req.params.userName} `)
  }

  router.get('/:userName/favourites', (req, res, next) => {
    const user = req.params.userName;
    User.find( {username: user}).then(
        user => res.status(201).send(user.favourites)
    ).catch( (error) => next(error) );
  });

});
export default router;
