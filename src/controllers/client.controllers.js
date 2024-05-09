import { clientValidation } from "../validations/client.validations";
import { createClient, deleteClient, getAll, getById, updateClient } from "../repositories/client.repository";


export const create = async (req, res) => {
    try {
        await clientValidation.validate(req.body)

        const client = await createClient(req.body)
        res.status(201).send(client)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const get = async (req, res) => {
    try {
        const clients = await getAll()
        res.status(302).send(clients)
    } catch (e) {
        res.status(404).send(e)
    }
}

export const getId = async (req, res) => {
    try {
        const client = await getById(Number(req.params.id_cliente))
        res.status(302).send(client)
    } catch (e) {
        res.status(404).send(e)
    }
}

export const update = async (req, res) => {
    try {
        const client = await updateClient(Number(req.params.id_cliente), req.body)
        res.status(200).send(client)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const remove = async (req,res) => {
    try {
        await deleteClient(Number(req.params.id_cliente))
        res.status(200).send()
    } catch (e) {
        res.status(404).send(e)
    }
}