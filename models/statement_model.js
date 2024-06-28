import {Schema, model } from "mongoose";
const statementSchema = new Schema ( {


    statementId: {type: String},
    incidentType: { enum: ['non-criminal','criminal']},
    civilianStatus: {type: String, enum: ['suspect', 'complainant', 'witness']},
    statement: {type:String},
    caseStatus: {enum: ['open', 'closed']},
    createAt: {type: Date},
    updatedAt: {type:Date},
})

export const StatementModel = model('statement', statementSchema)





























































































