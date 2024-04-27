import * as yup from "yup"

export const userValidation = yup.object({
    nome: yup.string().required,
    email: yup.string().required().email(),
    senha: yup.string().required().min(6),
    tipo: yup.string().required()
})