const mongoose = require('mongoose');
const DB = 'mongodb+srv://rohankumarmenulang:languagelearn@cluster1.jrd5xyt.mongodb.net/languagelearn?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
},)
    .then(() => console.log('connection successful'))
    .catch((err) => { console.log('No connection', err); });