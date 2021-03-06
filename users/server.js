const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema/schema')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  }),
)

const port = process.env.PORT || 4000
app.listen(4000, () => console.log(`Listening on port ${port}`))
