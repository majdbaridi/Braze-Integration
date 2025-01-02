import headerImg from "../images/image-avatar.png";
import { useEffect, useRef, useState } from "react";
const Header = (props) => {
  const myRef = useRef(null);
  const [flag, setFlag] = useState(false);
  const storedCart = localStorage.getItem('cart');
  useEffect(() => {
    
    if (storedCart === 0) {
      myRef.current.style.display = "none";
    } else {
      myRef.current.style.display = "block";
    }
  }, [storedCart]);



 

  return (
      <header>
        <div className="header-div">
          <div className="header-row">
            <div className="header-col header-col1">
              <h2 className="header-heading">Laptops</h2>
            </div>
            <div className="header-col header-col2">
              <svg
                  className="hamburger"
                  onClick={() => {
                    setFlag(!flag);
                    props.cartItems[1]().classList.toggle("shadow-toggle2");
                  }}
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
              </svg>

              <ul className={`nav-list ${flag ? "nav-list-toggle" : ""}`}>
                <li className="nav-item">
                <span
                    onClick={() => {
                      setFlag(!flag);
                      props.cartItems[1]().classList.toggle("shadow-toggle2");
                    }}
                    className="close-hamburger"
                >
                  X
                </span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  Smartphones
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    New
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sale
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-col header-col3">
              <div className="cart-sec">
                <div
                    className="cart-parent"
                    onClick={() => {
                    
                      const cartBox = document.querySelector(".cart-box");
                      if (cartBox) {
                        cartBox.classList.toggle("cart-box-toggle");
                      } else {
                        console.log("Cart box not found!");
                      }
                    }}
                    
                >
                <span ref={myRef} className="cart-notification">
                  {props.cartItems[0]}
                </span>
                  <svg
                      className="cart"
                      width="22"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                        fill="#69707D"
                        fillRule="nonzero"
                    />
                  </svg>
                </div>
                <img className="header-img" src={headerImg} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;