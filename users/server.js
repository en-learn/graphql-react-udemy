const express = require('express')
const app = express()

const port = process.env.PORT || 4000
app.listen(4000, () => console.log(`Listening on port ${port}`))
