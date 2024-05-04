
import addressRoutes from "./address.routes";
import clientRoutes from "./client.routes";
import orderRoutes from "./order.routes";
import productRoutes from "./product.routes";
import userRoutes from "./usuario.routes"

const routes = app =>{
    userRoutes(app)
    productRoutes(app)
    addressRoutes(app)
    clientRoutes(app)
    orderRoutes(app)
}

export default routes;