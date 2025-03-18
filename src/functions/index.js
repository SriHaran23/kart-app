import axios from "axios";

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
        const response = await fetch(`/json/mobiles/${brand}.json`);
        console.log("responseresponse", response);
        if (!response.ok) throw new Error("Failed to load JSON");

        const jsonData = await response.json();
        console.log("jsonData//", jsonData);
        return jsonData;
    } catch (err) {
        // setError("Error fetching JSON");
        console.log(err);
    }
};

export const logIn = async (initialData,password) => {
    try {
        const response = await axios.post("https://dummyjson.com/user/login", {
            username: initialData?.userName,
            password: initialData?.password,
            expiresInMins: 30,
        }, {
            headers: { "Content-Type": "application/json" }
        });

        console.log("Login Success:", response.data);
        localStorage.setItem('login', JSON.stringify(response?.data));
        return response?.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};

export const fetchProducts = async ( categories, categoryData, setProducts, setLoading ) => {
    let allProducts = [];
    let skip = 0;
    const limit = 30;

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