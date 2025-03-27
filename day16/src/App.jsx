import { useState, useEffect } from "react";
import Card from "./Card";

const App = () => {

  // const getData = () =>{
  //   const pr1 = fetch("https://dummyjson.com/products");
  //   pr1.then((res) => {
  //     const pr2 = res.json();
  //     pr2.then((data) => {
  //       console.log("Data : ", data);
  //     })
  //   }).catch((err) => {
  //     console.log("Error Occurred : ", err);
  //   })
  // }

  const [data, setData] = useState({});
  const [currPage, setCurrPage] = useState(0);

  useEffect(() => {
    getData();
  }, [currPage])

  const getData = async () => {
    try{
      const res = await fetch("https://dummyjson.com/products");
      const d = await res.json();
      console.log(d)
      setData(d);
    } catch(err){
      console.log(err.message)
    }
  }

  const totalPages = Math.ceil(data.total/data.limit);
  const pages = [];

  for(let i = 0; i < totalPages; i++){
    pages.push(i+1);
  }

  return (
    <>
    <select onChange={(e) => (
      setCurrPage(e.target.value)
    )}>
      {pages.map((pageNumber) => (
        <option>{pageNumber}</option>
      ))}
    </select>
    <div className="container">
      {data?.products?.map((e) => (
        <Card 
         title={e.title}
         price={e.price}
         thumbnail={e.thumbnail}
        />
      ))}
    </div>
    </>
  )
}

export default App