 import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 import Nav from './components/Nav'
 import Error from './components/Error'
 import HomePage from './pages/HomePage'
 import ShopPage from './pages/ShopPage'
 import CartPage from './pages/CartPage'
 import ViewProduct from './components/ViewProduct'
 import Checkout from './components/Checkout'

 const Routes = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<Nav />,
            errorElement:<Error />,
            children: [
                {path:'/', element:<HomePage />},
                {path:'/shop', element:<ShopPage />},
                {path:'/shop/:id', element:<ViewProduct />},
                {path:'/cart', element:<CartPage />},
                {path:'/checkout', element:<Checkout />}
            ],
        },
    ])

    return <RouterProvider router={router} />
 }  

 export default Routes