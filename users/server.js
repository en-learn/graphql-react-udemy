const express = require('express')
const expressGraphQL = require('express-graphql')

const app = express()

app.use('/graphql', expressGraphQL({
  graphiql: true
}))

const port = process.env.PORT || 4000
app.listen(4000, () => console.log(`Listening on port ${port}`))
