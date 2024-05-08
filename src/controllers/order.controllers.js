import { orderValidation } from "../validations/order.validations";
import { createOrder, deleteOrder, getAll, getById, updateOrder } from "../repositories/order.repository";


export const create = async (req, res) => {
    try {
        //await orderValidation.validate(req.body)

        const order = await createOrder(req.body)
        res.status(200).send(order)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const get = async (req, res) => {
    try {
        const orders = await getAll()
        res.status(200).send(orders)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const getId = async (req, res) => {
    try {
        const order = await getById(Number(req.params.id_pedido))
        res.status(200).send(order)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const update = async (req, res) => {
    try {
        const order = await updateOrder(Number(req.params.id_pedido), req.body)
        res.status(200).send(order)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const remove = async (req,res) => {
    try {
        await deleteOrder(Number(req.params.id_pedido))
        res.status(200).send()
    } catch (e) {
        res.status(400).send(e)
    }
}