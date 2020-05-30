const { Router } = require('express');
const router = Router();
const firebase = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json')

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://appointmeter.firebaseio.com/',
});

const db = firebase.database();

// router.get('/', (req, res) => {
//     console.log('index working');
//     db.ref('users').once('value', (snapshot) => {
//         return data = snapshot.val();
//     })
//     res.send({users: data});
// })

router.post('/signup/users', (req, res) => {
    console.log(req.body);
    res.send(req.body);
    db.ref('users').push(req.body);
})

router.post('/login/users', (req, res) => {
    // const snapshot = req.body;
    db.ref('users').once('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    })
    // res.send({users: data});
})

module.exports = router;