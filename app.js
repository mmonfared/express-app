const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.json({"user": "Mohammad", "role": "Test Automation Lead"})
})
app.listen(2562, () => {
    console.log("App is listening on port 2562")
})