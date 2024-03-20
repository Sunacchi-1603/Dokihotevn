import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [bookProduct,setBookProduct] = useState([]);

    useEffect(()=>{
        axios
        .get("https://localhost:7046/api/Product/get?categoryNavbarId=1")
        .then((response)=>{
            setBookProduct(response.data);
        })
        .catch((error)=>{
            console.error("Lỗi khi gọi API:", error);
        })
    },[])

 console.log(bookProduct);

    return (
        <DataContext.Provider value={{ }}>
            {children}
        </DataContext.Provider>
    );
};
