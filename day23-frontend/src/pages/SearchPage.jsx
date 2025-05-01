import { useState } from "react"
import { useGetProducts } from "../hooks/useGetProducts";

const SearchPage = () => {
    const [searchText, setSearchText] = useState("");
    
    const { products, loading } = useGetProducts();

    return (
        <div className="p-4 m-4">
            <div className="flex gap-4">
                <input className="py-1 px-3 border-1 border-red-700 rounded-lg" 
                type="text" 
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)} />
                <button className="bg-lime-600 text-white py-1 px-3 rounded-lg cursor-pointer">Search</button>
            </div>
            <div>
                <h1 className="text-purple-600 my-6 text-xl">Products</h1>
                {loading ? <div>Loading.....</div>
                    : <div className="grid grid-cols-3 items-center justify-center gap-4">
                    {products.map(({_id, title, price, stock}) => (
                        <div key={_id}>
                            <h2>{title}</h2>
                            <h3>Rs. {price}</h3>
                            <h3>Available: {stock}</h3>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default SearchPage