import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import loader from "react-router-dom";


import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./pages/Home";
import { productsData } from "./api/api";
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";
import Registration from "./pages/Registration";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
 <Route>


<Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={productsData}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      
      </Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/registration" element={<Registration/>}></Route>
 </Route>
        
    )
  );
  return (
    <div className="bg-gray-200">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
