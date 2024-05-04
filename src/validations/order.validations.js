
import * as yup from "yup"

export const clientValidation = yup.object({
    id_cliente: yup.number().required(),
    totalpedido: yup.number().required(),
    statuspedido: yup.string().required().oneOf(['Recebido', 'Em preparação', 'Despachado', 'Entregue'], 'O status deve ser "Recebido", "Em preparação", "Despachado" ou "Entregue"')  
})