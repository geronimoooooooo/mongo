
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://TestTest:TestTest@goldtrade.skpkklp.mongodb.net/', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')


        
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

Model.countDocuments({
    type: filter
}, (err, count) => {
    if (err) {
        console.log(`Error: ` + err)
    else
    console.log('There are %d documents', count);
    
});
Model.findOne({
    field: filter,
}).then((doc) => {
    if (!doc) {
        console.log("message")
    } else{
        
    }
});

