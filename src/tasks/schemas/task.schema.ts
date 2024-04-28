import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
    // _id: { type: objectId },
    // task_id: { type: string },
    title: String,
    description: String,
    creation_date: { type: Date, default: Date.now},
    conclusion_date: { type: Date},
    type: String,
    category: {
        name: String,
        color: { type: String, enum: ['verde','vermelho','amarelo','azul','roxo','laranja'], required: true}
    },
    status: { type: String, enum: ['verde','vermelho','amarelo','azul','roxo','laranja'], required: true},
    author: String
}, {
    timestamps: false
});

export default model("Task", taskSchema)