export interface taskType {
    title: String,
    description: String,
    creation_date: { type: Date, default: Date.now},
    conclusion_date: { type: Date},
    type: String,
    category: {
        name: String,
        color: {type: String, enum: ['verde','vermelho','amarelo','azul','roxo','laranja'], required: true}
    },
    status: { type: String, enum: ['verde','vermelho','amarelo','azul','roxo','laranja'], required: true},
    author: String
}