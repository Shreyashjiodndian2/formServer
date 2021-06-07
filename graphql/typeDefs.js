const {gql} = require('apollo-server')

const typeDefs = gql`
    type Survey{
        id: ID!
        name: String!
        phone: String!
        college: String!
        codechef_id: String!
        whatsapp: String!
        branch: String!
        semester: String!
        submitted: String!
    }
    input SurveyInput{
        name: String!
        phone: String!
        college: String!
        codechef_id: String!
        whatsapp: String
        branch: String!
        semester: String!
    }
    type Query{
        getSurvey: [Survey]
    }
    type Mutation{
        createSurvey(surveyInput: SurveyInput): Survey!
    }
`

module.exports = typeDefs