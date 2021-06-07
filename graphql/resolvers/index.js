const surveyResolvers = require('./survey')

module.exports = {
    Query: {
        ...surveyResolvers.Query
    },
    Mutation: {
        ...surveyResolvers.Mutation
    }
}