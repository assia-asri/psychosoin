//build node js and express server
const express = require('express')
const app = express()

app.listen(3002, () => {
    console.log('Server running on port 3002');
})