
import productRoutes from "./product.routes";
import userRoutes from "./usuario.routes"

const routes = app =>{
    userRoutes(app)
    productRoutes(app)
}

export default routes;