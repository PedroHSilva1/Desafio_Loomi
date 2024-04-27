import bcrypt from "bcrypt"
import { userValidation } from "../validations/usuario.validations";
import { createUser, getAll, getById } from "../repositorys/usuario.repository";
import exp from "constants";

export const create = async (req, res) => {
    try {
        await userValidation.validate(req.body)

        const hashpassword = await bcrypt.hash(req.body.senha, 10)
        req.body.senha = hashpassword
        const user = await createUser(req.body)
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const get = async (req, res) => {
    try {
        const users = await getAll()
        res.status(200).send(users)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const getId = async (req, res) => {
    try {
        const user = await getById(Number(req.params.id))
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
}