import React, { useEffect, useState, Suspense } from "react";
import { ErrorMsg, MainContainer, PageHeading, FavList } from "../Components/Styles/Global.style";
import ReactReadMoreReadLess from "react-read-more-read-less";

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

 
    
    const handleFavorite = (id) => {
        const newFavorites = item.map(itemName => {
          return itemName.id === id ? { ...itemName, favorite: !itemName.favorite } : itemName; 
        });
        setItem(newFavorites);
      }

      useEffect(()=>{
        loadItemsData();
    },[]);


  return (
    <>
      <PageHeading>List of products</PageHeading>
      <ErrorMsg className="errorMsg"></ErrorMsg>

      <MainContainer>
      <div className="card-columns">
          {
              item.map((itemName, index) => (
                <div className="card" key={index}>
                   <img src={itemName.image} alt={itemName.category} />
                    <div className="card-body">
                    <h5 className="card-title">{itemName.category}</h5>

                    <ReactReadMoreReadLess
                        charLimit={40}
                        readMoreText={"Read more ▼"}
                        readLessText={"Read less ▲"}
                        >
                        {itemName.description}
                     </ReactReadMoreReadLess>


                   
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Price $ - {itemName.price}</small>
                    <button className="addToCart" >Add to cart</button>
                  </div>
                    <div className="card-footer">
                        <button onClick={() => {  handleFavorite(itemName.id); }}>
                            {itemName.favorite === true ? "Remove from Fav" : "Add to Fav"}
                        </button>
                    </div>
                </div>
              ))
          }
          </div>
                
      </MainContainer>
                 <FavList>
                  <h1>Favorite list</h1>
                    <ul>
                        {item.map(itemName =>
                        itemName.favorite === true ? <li key={itemName.id}>
                            {itemName.category}</li> : null
                        )}
                    </ul>
                </FavList>
    </>
  );
};

export default Default;