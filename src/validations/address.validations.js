import * as yup from "yup"

export const addressValidation = yup.object({
    cep: yup.string().required().length(8, 'O CEP deve ter exatamente 8 caracteres e apenas números'),
    rua: yup.string().required(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
    estado: yup.string().required().length(2, 'O estado deve ter exatamente 2 caracteres'),
})