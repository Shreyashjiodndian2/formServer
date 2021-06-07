const Survey = require('../../models/Survey')
const {UserInputError} = require('apollo-server')

module.exports = {
    Query: {
        async getSurvey(){
            try{
                const survey = await Survey.find()
                return survey
            }catch(err){
                throw new Error(err)
            }
        }
    },
    Mutation: {
        async createSurvey(
            _, 
            {
                surveyInput: {name, phone, college, codechef_id, whatsapp, branch, semester}
            }
        ) {
            if(name.trim() === '' || college.trim() === '' || codechef_id.trim() === '' || phone.trim() === '' || branch.trim() === '' || semester.trim() === ''){
                throw new Error('Should not be empty')
            }

            if(whatsapp === undefined){
                whatsapp = name
            }

            const code_id = await Survey.findOne({ codechef_id })

            if(code_id){
                throw new UserInputError('Already Registered', {
                    errors: {
                        codechef_id: 'Already registered'
                    }
                })
            }

            const newSurvey = new Survey({
                name,
                phone,
                college,
                codechef_id,
                whatsapp,
                branch,
                semester,
                submittedAt: new Date().toISOString()
            })

            const survey = await newSurvey.save()

            return survey
        }
    }
}