import { create, get, getId, update, remove } from "../controllers/address.controllers";


  
const addressRoutes = app => {
    app.post("/address", create)
    app.get("/address", get)
    app.get("/address/:id_endereco", getId)
    app.put("/address/:id_endereco", update)
    app.delete("/address/:id_endereco", remove)
}

export default addressRoutes;