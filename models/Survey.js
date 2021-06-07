const { model, Schema } = require("mongoose")

const surveySchema = new Schema({
    name: String,
    phone: String,
    college: String,
    codechef_id: String,
    whatsapp: String,
    branch: String,
    semester: String,
    submitted: String
})

module.exports = model('Survey', surveySchema)