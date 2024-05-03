import { create, get, getId, update, remove } from "../controllers/product.controllers";


  
const productRoutes = app => {
    app.post("/product", create)
    app.get("/product", get)
    app.get("/product/:id_produto", getId)
    app.put("/product/:id_produto", update)
    app.delete("/product/:id_produto", remove)
}

export default productRoutes;