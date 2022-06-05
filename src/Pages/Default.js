import React, { useEffect, useState } from "react";
import { ErrorMsg, MainContainer, PageHeading } from "../Components/Styles/Global.style";

const Default = () => {
    const [item, setItem] = useState([]);
    const loadItemsData = async () =>{
        try{
           await fetch(`https://fakestoreapi.com/products`)
           .then((response) => {
               return response.json();
           })
           .then((data) => {
            setItem(data);
           })
        } 
        catch(err) {
                document.querySelector(".errorMsg").innerHTML = `<p>Data not loaded, ${err}</p>`
        };
    }
    console.log(item);

    useEffect(()=>{
        loadItemsData();
    },[]);
  return (
    <>
      <PageHeading>List of product</PageHeading>
      <ErrorMsg className="errorMsg"></ErrorMsg>
      <MainContainer>
      <div className="card-columns">
          {
              item.map((itemName, index) => (
                <div className="card" key={index}>
                   <img src={itemName.image} alt={itemName.category} />
                    <div className="card-body">
                    <h5 className="card-title">{itemName.category}</h5>
                    <p className="card-text">{itemName.description.split(" ", 10).join(" ")}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Price $ - {itemName.price}</small>
                  </div>
                </div>
              ))
          }
          </div>
      </MainContainer>
    </>
  );
};

export default Default;