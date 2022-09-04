const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/eorzeagramtest')
    .then(() => console.log('[+] Connected to db'))
    .catch(e => console.error(`[!] Error connecting to db: ${e}`))