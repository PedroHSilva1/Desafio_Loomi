-- CreateEnum
CREATE TYPE "status_pedido" AS ENUM ('Recebido', 'Em preparação', 'Despachado', 'Entregue');

-- CreateEnum
CREATE TYPE "tipo_usuario" AS ENUM ('Admin', 'Cliente');

-- CreateTable
CREATE TABLE "cliente" (
    "id_cliente" SERIAL NOT NULL,
    "id_usuario" INTEGER,
    "id_endereco" INTEGER,
    "nomecompleto" VARCHAR(100),
    "contato" VARCHAR(13),
    "status" BOOLEAN,
    "datacriacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "dataatualizacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "endereco" (
    "id_endereco" SERIAL NOT NULL,
    "cep" VARCHAR(8),
    "rua" VARCHAR(100),
    "bairro" VARCHAR(100),
    "cidade" VARCHAR(100),
    "estado" VARCHAR(2),

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id_endereco")
);

-- CreateTable
CREATE TABLE "itempedido" (
    "id_item" SERIAL NOT NULL,
    "id_pedido" INTEGER,
    "id_produto" INTEGER,
    "quantidade" INTEGER,
    "precounidade" DECIMAL,
    "subtotal" DECIMAL,

    CONSTRAINT "itempedido_pkey" PRIMARY KEY ("id_item")
);

-- CreateTable
CREATE TABLE "pedido" (
    "id_pedido" SERIAL NOT NULL,
    "id_cliente" INTEGER,
    "statuspedido" "status_pedido",
    "datapedido" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "totalpedido" DECIMAL,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id_pedido")
);

-- CreateTable
CREATE TABLE "produto" (
    "id_produto" SERIAL NOT NULL,
    "nomeproduto" VARCHAR(100),
    "descricao" TEXT,
    "preco" DECIMAL,
    "quantidadeestoque" INTEGER,
    "datacriacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "dataatualizacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id_produto")
);

-- CreateTable
CREATE TABLE "relatoriovendas" (
    "id_relatorio" SERIAL NOT NULL,
    "periodo" TIMESTAMP(6),
    "totalvendas" DECIMAL,
    "produtosvendidos" INTEGER,
    "caminhoarquivo" VARCHAR(255),

    CONSTRAINT "relatoriovendas_pkey" PRIMARY KEY ("id_relatorio")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100),
    "email" VARCHAR(100),
    "senha" VARCHAR(64),
    "datacriacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "dataatualizacao" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "tipo" "tipo_usuario",

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_id_endereco_fkey" FOREIGN KEY ("id_endereco") REFERENCES "endereco"("id_endereco") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cliente" ADD CONSTRAINT "cliente_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "itempedido" ADD CONSTRAINT "itempedido_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "pedido"("id_pedido") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "itempedido" ADD CONSTRAINT "itempedido_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produto"("id_produto") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "pedido" ADD CONSTRAINT "pedido_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION;
