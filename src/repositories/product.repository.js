import { prisma } from "../services/prisma";

export const createProduct = async (data) => {
    const product = await prisma.produto.create({
        data,
        select:{
            id_produto: true,
            nomeproduto: true,
            descricao: true,
            preco: true,
            quantidadeestoque: true,
            datacriacao: true,
            dataatualizacao: true,
        }
    })
    return product
}

export const getAll = async () => {
    const products = await prisma.produto.findMany({
        select:{
            id_produto: true,
            nomeproduto: true,
            descricao: true,
            preco: true,
            quantidadeestoque: true,
            datacriacao: true,
            dataatualizacao: true,
        }
    })
    return products
}

export const getById = async (id_produto) => {
    const product = await prisma.produto.findUnique({
        where:{
            id_produto
        },
        select:{
            id_produto: true,
            nomeproduto: true,
            descricao: true,
            preco: true,
            quantidadeestoque: true,
            datacriacao: true,
            dataatualizacao: true,
        }
    })
    return product
}

export const updateProduct = async (id_produto, data) => {
    const product = await prisma.produto.update({
        where:{
            id_produto
        },
        data,
        select:{
            id_produto: true,
            nomeproduto: true,
            descricao: true,
            preco: true,
            quantidadeestoque: true,
            datacriacao: true,
            dataatualizacao: true,
        }
    })
    return product
}

export const deleteProduct = async (id_produto) => {
    await prisma.produto.delete({
        where: {
            id_produto,
        },
    })
    return
}