const { ApolloServer, PubSub } = require('apollo-server')
const mongoose = require('mongoose')

const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs')

const { MONGODB } = require('./config.js')

const PORT = process.env.PORT || 5000

const server = new ApolloServer({
    cors: {
        origin: '*',
        credentials: true
    },
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log('MongoDB Connected')
        return server.listen({port: PORT})
    }).then((res) =>{
        console.log(`Server running at ${res.url}`)
    })
    .catch(err => {
        console.log(`Unable to connect to databse ${err}`)
    })