import "./Product.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import video from "../../assets/Video/video.mp4";
import BookNowModal from "../BookNowModal";
import { Link, useParams } from "react-router-dom";
import Rotate from "../rotate/Rotate";
import { addCart } from "../../features/cart/cartSlice";
import { Scooter } from "../../constants/Scooter";
import { Bike } from "../../constants/Bike";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Product = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState();
  const { id } = useParams();
  const pathname = useLocation().pathname;
  useEffect(() => {
    if (pathname.includes("e-bike")) {
      setProductData(Bike[id]);
    } else {
      setProductData(Scooter[id]);
    }
  }, [pathname]);


  console.log(productData);

  const handlecart = () => {
  
    dispatch(
      addCart({
        name: productData.name,
        id: productData.id,
        img: productData.image,
        price: productData.price,
      })
    );
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <>
      <div className="productMain">
        <video controls autoPlay>
          <source src={video} />
        </video>
        {/* <div className="videobut">
          <button onClick={handleShow}>Test Ride</button>
          <Link to={"/cart"}>
            <button onClick={handlecart}>Book Now</button>
          </Link>
        </div> */}
      </div>
     
      <BookNowModal show={show} onHide={() => setShow(false)} />

      {productData && <Rotate data={productData} />}

     
    </>
  );
};

export default Product;
