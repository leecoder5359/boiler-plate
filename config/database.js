let CONNECT_URL= process.env.MONGO_URI;

module.exports = {
    'url' : CONNECT_URL,
    'db': {native_parser: true},
    'dbOptions' : {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
};
