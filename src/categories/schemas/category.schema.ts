import { Schema, model } from 'mongoose'

const categorySchema = new Schema({
    name: { type: String, required: true},
    color: {type: String, enum: ['verde','vermelho','amarelo','azul','roxo','laranja'], required: true}
}, {
    timestamps: false
});

export default model("Category", categorySchema)