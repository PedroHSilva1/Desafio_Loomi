import { prisma } from "../services/prisma";

export const createAddress = async (data) => {
    const address = await prisma.endereco.create({
        data,
        select:{
            id_endereco: true,
            cep: true,
            rua: true,
            bairro: true,
            cidade: true,
            estado: true,
        }
    })
    return address
}

export const getAll = async () => {
    const addresss = await prisma.endereco.findMany({
        select:{
            id_endereco: true,
            cep: true,
            rua: true,
            bairro: true,
            cidade: true,
            estado: true,
        }
    })
    return addresss
}

export const getById = async (id_endereco) => {
    const address = await prisma.endereco.findUnique({
        where:{
            id_endereco
        },
        select:{
            id_endereco: true,
            cep: true,
            rua: true,
            bairro: true,
            cidade: true,
            estado: true,
        }
    })
    return address
}

export const updateAddress = async (id_endereco, data) => {
    const address = await prisma.endereco.update({
        where:{
            id_endereco
        },
        data,
        select:{
            id_endereco: true,
            cep: true,
            rua: true,
            bairro: true,
            cidade: true,
            estado: true,
        }
    })
    return address
}

export const deleteAddress = async (id_endereco) => {
    await prisma.endereco.delete({
        where: {
            id_endereco,
        },
    })
    return
}