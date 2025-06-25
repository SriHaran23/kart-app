import axios from "axios";
import { toast } from "react-toastify";
import * as Yup from "yup";

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
    console.log("brand", brand);
    try {
        const response = await fetch(`/assets/json/mobiles/${brand}Models.json`);
        if (!response.ok) {
            throw new Error(`Failed to load JSON: ${response.status} ${response.statusText}`);
        }
        const jsonData = await response.json();
        console.log("Fetched mobiles data:", jsonData);
        return jsonData;
    } catch (err) {
        console.error("Error fetching mobile data:", err.message);
        throw err; // or return null;
    }
};

export const getMobile = async (brand, model, setMobiles) => {
    try {
        const data = await fetch(`/assets/json/mobiles/${brand}Models.json`);
        if (!data.ok) {
            throw new Error(`Failed to load JSON: ${data.status} ${data.statusText}`);
        }
        const jsonData = await data.json();
        const response = jsonData?.Models.filter((el) => el?.Model === model.replaceAll('_', ' '))
        setMobiles({ ...response[0] })
        console.log("mobile data:", jsonData, response);
        // return jsonData;
    } catch (err) {
        console.error("Error fetching mobile data:", err.message);
        throw err; // or return null;
    }
};


export const logIn = async (initialData, setLogin) => {
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

export const fetchProducts = async (categories, categoryData, setProducts, setLoading) => {
    let allProducts = [];
    let skip = 0;
    const limit = 190;

    try {
        while (true) {
            const response = await axios.get('https://dummyjson.com/products', { params: { limit, skip } });
            allProducts = [...allProducts, ...response.data.products];
            skip += limit;
            if (skip >= response.data.total) break;
        }
        // var temp = []
        // for (let index = 0; index < allProducts.length; index++) {
        //     if (allProducts[index]?.category == categories[categoryData]) {
        //         temp = [...temp, allProducts[index]]
        //     }
        // }
        console.log(allProducts);
        setProducts(allProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
    } finally {
        setLoading(false);
    }
};

export const addToCart = (data) => {
    alert("hi")
    fetch("http://localhost:4000/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const loginDetails =''

export const getUsers = (details) => {
    fetch("http://localhost:4000/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
        .then(data => setUsers(data.find((el)=> el.userName==details.userName && el.password==details.password)))
}

export const addUsers = (data) => {
    fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const setUsers = (data) => {
    console.log("lal",data);
    
    fetch("http://localhost:4000/login", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const getProduct = async (id, setProduct, setLoading) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`)
        console.log("hhj", response);
        if (response) {
            setLoading(false)
        }
        setProduct({ ...response.data })
    }
    catch (error) {
        console.error('Error fetching products:', error);
    }
}




const secretKey = 'Hanvy@Sri23';

const CryptoJS = require("crypto-js");

// Function to encrypt the object
export const encryptObject = (obj) => {
    const stringifiedObj = JSON.stringify(obj); // Convert the object to a string
    const encryptedObj = CryptoJS.AES.encrypt(stringifiedObj, secretKey).toString(); // Encrypt the string
    localStorage.setItem('Object', encryptedObj); // Save to localStorage
}

// Function to decrypt the object
export const decryptObject = () => {
    const encryptedObj = localStorage.getItem('Object'); // Retrieve the encrypted object
    if (encryptedObj) {
        const bytes = CryptoJS.AES.decrypt(encryptedObj, secretKey); // Decrypt the object
        const decryptedObj = JSON.parse(bytes.toString(CryptoJS.enc.Utf8)); // Convert back to an object
        return decryptedObj;
    }
    return null; // Return null if nothing is stored
}

export const getValidationSchema = (isSignUp) =>
  Yup.object({
    userName: Yup.string()
      .required("User Name is mandatory")
      .min(3, "Please enter minimum 3 characters..."),

    email: isSignUp
      ? Yup.string()
          .email("Invalid email")
          .required("Email is mandatory")
          .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Enter valid email address"
          )
      : Yup.string().notRequired(),

    password: Yup.string()
      .required("Password is mandatory")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
        "Password should contain minimum 8 characters, 1 uppercase, 1 number, 1 special character"
      ),
  });


export const loginFormSubmit = (values) => {
    //  e.preventDefault();
    // if (isSignUp) {
    //   // e.preventDefault();
    //   // Add sign-up logic if needed
    //   console.log('Sign-up form submitted with:', loginData);
    // }
    // else {
    //   e.preventDefault(); // Prevent default form behavior
    //   console.log("hvjgf", initialData);

    //   logIn(loginData, setLogin);
    //   setLoginData(initialData)
    // }
    // const modal = document.querySelector('[data-bs-dismiss="modal"]');
    // if (modal && login) {
    //   modal.click();
    // }
    console.log(values);

}