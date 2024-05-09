import * as yup from "yup"

export const clientValidation = yup.object({
    id_usuario: yup.number().required(),
    id_endereco: yup.number(),
    nomecompleto: yup.string().required(),
    contato: yup.string().required().length(13, 'o contato deve conter codigo do país (brasil = 55), DDD e depois o número telefonico. apenas os números.'),
    status: yup.boolean().required(),
})