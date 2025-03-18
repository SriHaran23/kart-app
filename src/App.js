import './App.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import { createContext, useEffect, useState } from 'react';
import CartLoader from './components/loader';
import MobileCategory from './pages/mobiles';
import Groceries from './pages/grocery';
import { decryptObject, encryptObject } from './functions';

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
  const categories = {
    Groceries: "grocery",
    Mobiles: "mobiles",
    Electronics: "electronics",
    Fashion: "fashion",
    Appliances: "appliances",
    "Home & Furniture": "furniture",
    "Toys & Baby Care": "babyCare"
  };
  useEffect(() => {
    console.log("completeData", completeData)

    setTimeout(() => {
      setLoader(!loader)
    }, 4000);
    
    const decrypted = decryptObject()
    console.log("decrypted", decrypted);
  }, [])

  useEffect(() => {
    encryptObject(completeData)
  }, [completeData])

  return (
    <CompleteContext.Provider value={{ completeData, setCompleteData }}>
      <LoaderContext.Provider value={{ loader, setLoader }}>
        <LoginContext.Provider value={{ login, setLogin }}>
          <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            <Navbar />
            {loader
              ? <CartLoader />
              : <div className="">
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/mobiles-category' element={<MobileCategory />} />
                  <Route path='/grocery-category' element={<Groceries />} />
                  <Route path='/electronics-category' element={<Groceries />} />
                  <Route path='/fashion-category' element={<Groceries />} />
                  <Route path='/appliances-category' element={<Groceries />} />
                  <Route path='/furniture-category' element={<Groceries />} />
                  <Route path='/babyCare-category' element={<Groceries />} />
                </Routes>
              </div>
            }
          </CategoryContext.Provider>
        </LoginContext.Provider>
      </LoaderContext.Provider>
    </CompleteContext.Provider>

  );
}

export default App;
