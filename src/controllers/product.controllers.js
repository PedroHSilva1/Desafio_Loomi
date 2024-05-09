import { productValidation } from "../validations/product.validations";
import { createProduct, deleteProduct, getAll, getById, updateProduct } from "../repositories/product.repository";


export const create = async (req, res) => {
    try {
        await productValidation.validate(req.body)

        const product = await createProduct(req.body)
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const get = async (req, res) => {
    try {
        const products = await getAll()
        res.status(302).send(products)
    } catch (e) {
        res.status(404).send(e)
    }
}

export const getId = async (req, res) => {
    try {
        const product = await getById(Number(req.params.id_produto))
        res.status(302).send(product)
    } catch (e) {
        res.status(404).send(e)
    }
}

export const update = async (req, res) => {
    try {
        const product = await updateProduct(Number(req.params.id_produto), req.body)
        res.status(200).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const remove = async (req,res) => {
    try {
        await deleteProduct(Number(req.params.id_produto))
        res.status(200).send()
    } catch (e) {
        res.status(404).send(e)
    }
}