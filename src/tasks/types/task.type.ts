import { Schema } from "mongoose"

export interface taskType {
    title: String,
    description: String,
    creation_date: { type: Date, default: Date.now},
    conclusion_date: { type: Date},
    type: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category', required: false
    },
    status: { type: String, enum: ['pendente','em andamento','concluída'], required: true},
    author: { 
        type: Schema.Types.ObjectId,
        ref: 'User', required: true 
    },
}