import { ObjectId } from "mongoose"

export interface categoryType {
    name: { type: String, required: true},
    color: {type: String, enum: ['verde','vermelho','amarelo','azul','roxo','laranja'], required: true}
}