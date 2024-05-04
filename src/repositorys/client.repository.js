import { prisma } from "../services/prisma";

export const createClient = async (data) => {
    const client = await prisma.cliente.create({
        data,
        select:{
            id_cliente: true,
            id_endereco: true,
            nomecompleto: true,
            contato: true,
            status: true,
            datacriacao: true,
            dataatualizacao: true,
        }
    })
    return client
}

export const getAll = async () => {
    const clients = await prisma.cliente.findMany({
        select:{
            id_cliente: true,
            id_endereco: true,
            nomecompleto: true,
            contato: true,
            status: true,
            datacriacao: true,
            dataatualizacao: true,
        }
    })
    return clients
}

export const getById = async (id_cliente) => {
    const client = await prisma.cliente.findUnique({
        where:{
            id_cliente
        },
        select:{
            id_cliente: true,
            id_endereco: true,
            nomecompleto: true,
            contato: true,
            status: true,
            datacriacao: true,
            dataatualizacao: true,
        }
    })
    return client
}

export const updateClient = async (id_cliente, data) => {
    const client = await prisma.cliente.update({
        where:{
            id_cliente
        },
        data,
        select:{
            id_cliente: true,
            id_endereco: true,
            nomecompleto: true,
            contato: true,
            status: true,
            datacriacao: true,
            dataatualizacao: true,
        }
    })
    return client
}

export const deleteClient = async (id_cliente) => {
    await prisma.cliente.delete({
        where: {
            id_cliente,
        },
    })
    return
}