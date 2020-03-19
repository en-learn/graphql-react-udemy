const axios = require('axios')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} = require('graphql')

const serverUrl = 'http://localhost:3000'

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, _args) {
        return axios
          .get(`${serverUrl}/companies/${parentValue.id}/users`)
          .then(res => res.data)
      },
    },
  },
})

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, _args) {
        return axios
          .get(`${serverUrl}/companies/${parentValue.companyId}`)
          .then(res => res.data)
      },
    },
  },
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(_parentValue, args) {
        return axios.get(`${serverUrl}/users/${args.id}`).then(res => res.data)
      },
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve(_parentValue, args) {
        return axios
          .get(`${serverUrl}/companies/${args.id}`)
          .then(res => res.data)
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
