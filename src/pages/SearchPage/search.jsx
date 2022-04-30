import React, { useContext, useEffect } from "react";
import classes from "./search.module.css";
import Header from "../../components/UI/Header/index";
import Button from "../../components/UI/Button";
import SearchIcon from "../../assets/images/search.svg";
import ShortletCard from "../../components/UI/ShortletCard";
import test from "../../assets/images/test.png";
import Divider from "../../components/UI/Divider";
import Footer from "../../components/UI/Footer";
import Back from "../../components/UI/Back/Back";
import BigHouse from "../../assets/images/Highrise.svg";
import Plane from "../../assets/images/Airplane.svg";
import Heart from "../../assets/images/Love.svg";
import House from "../../assets/images/Home.svg";
import Dollar from "../../assets/images/dollar-circle.svg"
import { ShortletContext } from "../../store/shortletContext/ShortletProvider";
import getShortlet from "../../store/shortletContext/actionCreators/getShortlet";
import { BASE_SHORTLET_URL, BASE_SHORTLET_URL_DEV } from "../../constants/base";

const Search = () => {
  
  const { shortletDispatch, shortletState: { loading, data } } = useContext(ShortletContext);

  useEffect(() => {
    getShortlet()(shortletDispatch);
  }, [])

  return (
    <div className={classes.body}>
      <Header />

      <main>
        <div className={classes.sidebar}>
          <div className={classes.side}>
            <p>
              Search Result for <br />
              <b>"3bedroom"</b>{" "}
            </p>
            <Back className={classes.sidebarBack} />
          </div>
          <div className={classes.search_box_input}>
            <div className={classes.input_box}>
              <input
                className={classes.search_box_input}
                placeholder={"Quick search by type, city"}
              />
              <Button primary name="" iconPosition="right" icon={SearchIcon} />
            </div>
          </div>
          <div className={classes.Budget}>
            <div className={classes.BudgetB}>
              <img src={Dollar}/>
              <p>Adjust Budget</p>
            </div>
          </div>
        </div>

        <div className={classes.mainbar}>
          <div className={classes.mainbar_header}>
            <div className={classes.mainbar_headerB}>
              <h1>Search Results</h1>
              <p>Visit the most amazing places in Nigeria.</p>
            </div>
            <Back className={classes.mainbarBack} />
          </div>
          <div className={classes.downNav}>
            <div className={classes.downNavB}>
              <div>
                <img src={BigHouse} />
                <p>Book Accomodation</p>
              </div>
              <div>
                <img src={Plane} />
                <p>Travels</p>
              </div>
              <div>
                <img src={Heart} />
                <p>Trips</p>
              </div>
              <div>
                <img src={House} />
                <p>Lease Shortlet</p>
              </div>
            </div>
          </div>
          <aside>
            <div className={classes.shortlet}>
              {data.sort((a, b) => b.ratingsAverage - a.ratingsAverage).map((cur, i) => {
                return (
                  <ShortletCard
                    key={i}
                    image={BASE_SHORTLET_URL_DEV + cur.image[0]}
                    rating={cur.ratingsAverage}
                    header={cur.houseTitle}
                    text={cur.description.length > 35 ? cur.description.substring(0, 35) + "....." : cur.description}
                    amount={cur.amount}
                  />
                );
              })}
            </div>
          </aside>
          <div className={classes.see_more}><p>See more</p></div>
        </div>
      </main>
      <div className={classes.footer}>
      <Footer/>
      </div>
    </div>
  );
};

export default Search;
