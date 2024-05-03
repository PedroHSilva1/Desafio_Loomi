import * as yup from "yup"

export const productValidation = yup.object({
    nomeproduto: yup.string().required(),
    descricao: yup.string(),
    preco: yup.string().required(),
    quantidadeestoque: yup.string().required(),
})