if(process.env.NODE_ENV === 'production'){
    module.exports = require('./database');
} else {
    module.exports = require('./database_dev');
}
