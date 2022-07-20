import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = (props) => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="carousel__container">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators" hidden>
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>

            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img
                  className="home__image"
                  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                  alt="Get Prime"
                  width="800"
                  height="500"
                />
                <div className="carousel-caption">
                  <h3>Amazon Prime</h3>
                  <p>Join Prime. Get Exciting Offers!!</p>
                </div>
              </div>

              <div className="item">
                <img
                  className="home__image"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/April-22/DesktopTallhero_3000x1200_2._CB623843558_.jpg"
                  alt="EveryDayEssentials"
                  width="800"
                  height="500"
                />
                <div className="carousel-caption">
                  <h3>Day to Day Essentials</h3>
                  <p>Shop all kinds basic essentials required for your Home.</p>
                </div>
              </div>

              <div className="item">
                <img
                  className="home__image"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_3000x1200._CB634376407_.jpg"
                  alt="Electronics"
                  width="800"
                  height="500"
                />
                <div className="carousel-caption">
                  <h3>Electronics</h3>
                  <p>
                    Buy all types of Electronics ranging as low as Rs. 99.00/-
                  </p>
                </div>
              </div>

              <div className="item">
                <img
                  className="home__image"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/SmallAppliances-22/Herotator-22/3000x1200-unrec-stashfin._CB633084564_.jpg"
                  alt="SmallAppliances"
                  width="500"
                  height="500"
                />
                <div className="carousel-caption">
                  <h3>Small Appliances</h3>
                  <p>SmallAppliances, Buy Home Applicances and More.</p>
                </div>
              </div>
            </div>
            <a
              className="left carousel-control navigate"
              href="#myCarousel"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control navigate"
              href="#myCarousel"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="home__row_one">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="footer">Amazon Clone Inc. @2022</div>
      </div>
    </div>
  );
};

export default Home;
