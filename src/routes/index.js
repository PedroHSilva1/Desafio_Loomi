
import addressRoutes from "./address.routes";
import clientRoutes from "./client.routes";
import productRoutes from "./product.routes";
import userRoutes from "./usuario.routes"

const routes = app =>{
    userRoutes(app)
    productRoutes(app)
    addressRoutes(app)
    clientRoutes(app)
}

export default routes;