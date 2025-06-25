import './App.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import CartLoader from './components/loader';
import HomePage from "./pages/HomePage";
import MobileCategory from './pages/mobiles';
import Groceries from './pages/grocery';
import { decryptObject, encryptObject } from './functions';
import { ToastContainer } from 'react-toastify';
import CategoryPage from './pages/CategoryPage';
import MobileBrands from './pages/models';
import Account from './pages/account';
import UserDetails from './components/account/UserDetails';
import AddressDetails from './components/account/AddressDetails';
import ItemDetails from './pages/product';
import CartDetails from './pages/cart';
import LoginPage from './components/LogIn';

export const LoaderContext = createContext(null);
export const LoginContext = createContext(null);
export const CategoryContext = createContext(null);
export const CompleteContext = createContext(null);

function App() {
  const [loader, setLoader] = useState(true);
  const [login, setLogin] = useState({});
  let completeInitialData = {
    login: "",
    category: "",
  }
  const [completeData, setCompleteData] = useState(completeInitialData);
  const [selectedCategory, setSelectedCategory] = useState();
 
  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader)
    }, 1000);

    const decrypted = decryptObject()
    setLogin(decrypted)
  }, [])

  useEffect(() => {
    decryptObject()
    encryptObject(login)
  }, [login])

  return (
    <CompleteContext.Provider value={{ completeData, setCompleteData }}>
      <LoaderContext.Provider value={{ loader, setLoader }}>
        <LoginContext.Provider value={{ login, setLogin }}>
          <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            <Navbar />
            {loader
              ? <CartLoader />
              : <div className="mt-2">
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path="/category/:categoryName" element={<CategoryPage />} />
                  <Route path="/category/:categoryName/:productId" element={<ItemDetails />} />
                  <Route path="/Mobiles/:brandName" element={<MobileBrands />} />
                  <Route path="/Mobiles/:brand/:modal" element={<ItemDetails />} />
                  {/* <Route path="/cart" element={<CartDetails />} /> */}
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/account" element={<Account />}>
                    <Route index element={<UserDetails />} />
                    <Route path="userDetails" element={<UserDetails />} />
                    <Route path="addressDetails" element={<AddressDetails />} />
                  </Route>
                  {/* <Route path='/mobiles-category' element={<MobileCategory />} />
                  <Route path='/grocery-category' element={<Groceries />} />
                  <Route path='/electronics-category' element={<Groceries />} />
                  <Route path='/fashion-category' element={<Groceries />} />
                  <Route path='/appliances-category' element={<Groceries />} />
                  <Route path='/furniture-category' element={<Groceries />} />
                  <Route path='/babyCare-category' element={<Groceries />} /> */}
                </Routes>
              </div>
            }
            <ToastContainer position="top-right" autoClose={1500} />
          </CategoryContext.Provider>
        </LoginContext.Provider>
      </LoaderContext.Provider>
    </CompleteContext.Provider>

  );
}

export default App;
