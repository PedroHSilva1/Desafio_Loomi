import { create, get, getId, update, remove } from "../controllers/client.controllers";


  
const clientRoutes = app => {
    app.post("/client", create)
    app.get("/client", get)
    app.get("/client/:id_cliente", getId)
    app.put("/client/:id_cliente", update)
    app.delete("/client/:id_cliente", remove)
}

export default clientRoutes;