import axios from "axios";
import { toast } from "react-toastify";
// import data from '../json/realmeModels.json'
export const generateRandomColor = () => {
    const letters = '0123456789ABCDE';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 15)];
    }
    return color;
};

export const getMobiles = async (brand) => {
    try {
        const response = await fetch(`/assets/json/mobiles/${brand}Models.json`);
console.log("response",response);

        if (!response.ok) {
            throw new Error(`Failed to load JSON: ${response.status} ${response.statusText}`);
        }

        const jsonData = await response.json();
        console.log("Fetched mobile data:", jsonData);

        return jsonData;
    } catch (err) {
        console.error("Error fetching mobile data:", err.message);
        // Optionally, rethrow or return a fallback
        throw err; // or return null;
    }
};


export const logIn = async (initialData,setLogin) => {
    try {
        const response = await axios.post("https://dummyjson.com/user/login", {
            username: initialData?.userName,
            password: initialData?.password,
            expiresInMins: 30,
        }, {
            headers: { "Content-Type": "application/json" }
        });

        // localStorage.setItem('login', JSON.stringify(response?.data));
        setLogin(response?.data)
        toast.success("Loggedin Successfully")
    } catch (error) {
        toast.error("Loggedin Successfully")
    }
};

export const fetchProducts = async ( categories, categoryData, setProducts, setLoading ) => {
    let allProducts = [];
    let skip = 0;
    const limit = 90;

    try {
        while (true) {
            const response = await axios.get('https://dummyjson.com/products', { params: { limit, skip } });
            allProducts = [...allProducts, ...response.data.products];
            skip += limit;
            if (skip >= response.data.total) break;
        }
        var temp = []
        for (let index = 0; index < allProducts.length; index++) {
            if (allProducts[index]?.category == categories[categoryData]) {
                // console.log("allProducts", allProducts[index]);
                temp = [...temp, allProducts[index]]
            }
        }
        console.log("////", temp);

        setProducts(allProducts);

    } catch (error) {
        console.error('Error fetching products:', error);
    } finally {
        setLoading(false);
    }
};

const secretKey = 'Hanvy@Sri23';

const CryptoJS = require("crypto-js");

// Function to encrypt the object
export const encryptObject=(obj) => {
    const stringifiedObj = JSON.stringify(obj); // Convert the object to a string
    const encryptedObj = CryptoJS.AES.encrypt(stringifiedObj, secretKey).toString(); // Encrypt the string
    localStorage.setItem('Object', encryptedObj); // Save to localStorage
}

// Function to decrypt the object
export const decryptObject=() => {
    const encryptedObj = localStorage.getItem('Object'); // Retrieve the encrypted object
    if (encryptedObj) {
        const bytes = CryptoJS.AES.decrypt(encryptedObj, secretKey); // Decrypt the object
        const decryptedObj = JSON.parse(bytes.toString(CryptoJS.enc.Utf8)); // Convert back to an object
        return decryptedObj;
    }
    return null; // Return null if nothing is stored
}