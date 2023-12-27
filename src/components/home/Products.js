import React from "react";
import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star"
import ApiIcon from "@mui/icons-material/Api"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight"
import FavoriteIcon from"@mui/icons-material/Favorite"
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/amazonSlice";

const Products = () => {
  const dispatch = useDispatch()
  const data = useLoaderData();
  const productsData = data.data;
 

  return (
    <div className="max-w-screen-2xl mx-auto grid  xl:gap-10 gap-6 px-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {productsData.map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto border-[1px]  rounded-md border-gray-200 py-6 z-30 hover:border-rose-600 hover:shadow-textShadow duration-200 relative flex flex-col gap-4"
        >
            <span className="text-sm capitalize italic absolute top-2 right-2 text-gray-500">{item.category}</span>
          <div className="w-full h-auto flex items-center justify-center relative group">
            <img
              className="w-36 h-36 object-contain"
              src={item.image}
              alt="productImg"
            />
            <ul className="w-full h-30 bg-gray-300 absolute bottom-[-170px] flex flex-col items-end justify-center gap-2 font-mono px-2 border-1 border-r group-hover:bottom-0 duration-700">
                <li className="productLi">
                    Compare <span><ApiIcon/></span>
                </li>
                <li className="productLi">
                    Add to Cart <span><ShoppingCartIcon/></span>
                </li>
                <li className="productLi">
                    View Deails <span><ArrowCircleRightIcon/></span>
                </li>
                <li className="productLi">
                   Add to wish List <span><FavoriteIcon/></span>
                </li>
            </ul>
          </div>
          <div className="px-4 z-20 bg-white">
            <div className="flex item-center justify-between">
              <h2 className="text-lg tracking-wide text-lg font-semibold text-amazon_blue">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                ${item.price}
              </p>
            </div>
            <div>
              <p className="text-sm  text-gray-800">
                {item.description.substring(0, 100)}...
              </p>
              <div className="text-rose-500">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              </div>
            </div>
            <div>
                <button onClick={()=>dispatch(addToCart({
                  id:item.id,
                  title:item.title,
                  description:item.description,
                  price:item.price,
                  category:item.category,
                  image:item.image,
                  quantity:1,
                }))} className='w-full font-serif font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Add to Card</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
