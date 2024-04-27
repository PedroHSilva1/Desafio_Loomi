import { prisma } from "../services/prisma";

export const createUser = async (data) => {
    const user = await prisma.usuario.create({
        data,
        select:{
            id:true,
            nome: true,
            email: true,
            tipo: true,
            senha: false
        }
    })
    return user
}

export const getAll = async () => {
    const users = await prisma.usuario.findMany({
        select:{
            id:true,
            nome: true,
            email: true,
            tipo: true,
            senha: false
        }
    })
    return users
}

export const getById = async (id) => {
    const user = await prisma.usuario.findUnique({
        where:{
            id
        },
        select:{
            id:true,
            nome: true,
            email: true,
            tipo: true,
            senha: false
        }
    })
    return user
}