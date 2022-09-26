const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { User } = require('./models/Users');
const mongoose = require('mongoose');
const config = require('./config/key');


console.log(process.env.NODE_ENV)
//application/x-www-form-urlencoded 데이터를 분석하여 사용
app.use(bodyParser.urlencoded({extended: true}));

//application/json 데이터를 분석하여 사용
app.use(bodyParser.json());

mongoose.connect(config.url, config.dbOptions)
    .then(() => console.log('MongoDB Connected...'))
    .catch(console.error);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/register', (req, res) => {
    //회원 가입 할때 필요한 정보들을 client에서 가져오면 DB에 넣음.

    const user = new User(req.body);

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err});
        return res.status(200).json({ success: true });
    });
})

app.get('/users', (req, res) => {
    //회원 가입 할때 필요한 정보들을 client에서 가져오면 DB에 넣음.

    User.find({})
        .then((userInfo, err) => {
            if(err) {
                console.log(err);
                return res.json({ success: false, err});
            }
            return res.status(200).json({ success: true, user: userInfo});
        });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
