import { addressValidation } from "../validations/address.validations";
import { createAddress, deleteAddress, getAll, getById, updateAddress } from "../repositories/address.repository";


export const create = async (req, res) => {
    try {
        await addressValidation.validate(req.body)

        const address = await createAddress(req.body)
        res.status(201).send(address)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const get = async (req, res) => {
    try {
        const adresses = await getAll()
        res.status(302).send(adresses)
    } catch (e) {
        res.status(404).send(e)
    }
}

export const getId = async (req, res) => {
    try {
        const address = await getById(Number(req.params.id_endereco))
        res.status(302).send(address)
    } catch (e) {
        res.status(404).send(e)
    }
}

export const update = async (req, res) => {
    try {
        const address = await updateAddress(Number(req.params.id_endereco), req.body)
        res.status(200).send(address)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const remove = async (req,res) => {
    try {
        await deleteAddress(Number(req.params.id_endereco))
        res.status(200).send()
    } catch (e) {
        res.status(404).send(e)
    }
}