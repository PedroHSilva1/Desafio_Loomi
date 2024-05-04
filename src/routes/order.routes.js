import { create, get, getId, update, remove } from "../controllers/order.controllers";


  
const orderRoutes = app => {
    app.post("/order", create)
    app.get("/order", get)
    app.get("/order/:id_pedido", getId)
    app.put("/order/:id_pedido", update)
    app.delete("/order/:id_pedido", remove)
}

export default orderRoutes;