import logo from './logo.svg';
import Header from './layouts/header';
import Home from './screens/home';
import "./App.css"
import { Footer } from './layouts/footer';
import { ProductDetail } from "./screens/productDetail";
import Login from './screens/login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './screens/register'
import { SnackbarProvider } from 'notistack';
import CheckOut from './components/checkout/checkout'
import PageNotFound from './screens/404';
function App() {
    return (
        <SnackbarProvider maxSnack={5}>
            <Header />
            <div style={{ marginTop: 100 }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/product/detail/:id' element={<ProductDetail />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/checkout' element={<CheckOut />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </div>
            <Footer />



        </SnackbarProvider>
    );
}

export default App;
