const { Router } = require('express');
const router = Router();
const firebase = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json')

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://appointmeter.firebaseio.com/',
});

const db = firebase.database();

router.get('/', (req, res) => {
    console.log('index working');
    db.ref('users').once('value', (snapshot) => {
        return data = snapshot.val();
    })
    res.send({users: data});
})

router.post('/new-user', (req, res) => {
    console.log(req.body);
    db.ref('users').push(req.body);
})

module.exports = router;