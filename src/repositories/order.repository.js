import { prisma } from "../services/prisma";

export const createOrder = async (data) => {
    const order = await prisma.pedido.create({
        data,
        select:{
            id_pedido: true,
            id_cliente: true,
            statuspedido: true,
            datapedido: false,
            totalpedido: true,
            
        }
    })
    return order
}

export const getAll = async () => {
    const orders = await prisma.pedido.findMany({
        select:{
            id_pedido: true,
            id_cliente: true,
            statuspedido: true,
            datapedido: true,
            totalpedido: true,
        }
    })
    return orders
}

export const getById = async (id_pedido) => {
    const order = await prisma.pedido.findUnique({
        where:{
            id_pedido
        },
        select:{
            id_pedido: true,
            id_cliente: true,
            statuspedido: true,
            datapedido: true,
            totalpedido: true,
        }
    })
    return order
}

export const updateOrder = async (id_pedido, data) => {
    const order = await prisma.pedido.update({
        where:{
            id_pedido
        },
        data,
        select:{
            id_pedido: true,
            id_cliente: true,
            statuspedido: true,
            datapedido: true,
            totalpedido: true,
        }
    })
    return order
}

export const deleteOrder = async (id_pedido) => {
    await prisma.pedido.delete({
        where: {
            id_pedido,
        },
    })
    return
}