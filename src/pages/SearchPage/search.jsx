import React from "react";
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
import Dollar from "../../assets/images/dollar-circle.svg";
import DollarCircle from "../../assets/images/dollar-sign.svg";


const Search = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
          <div className={classes.adjust}>
            <div className={classes.adjustB}>
              <img src={DollarCircle}/>
              <p>Adjust Budget</p>
            </div>
              <p className={classes.sideP}>Set your budget range to help us filter your search</p>
            <div className={classes.filter}>
              <div><p><span>N</span>10,000</p></div>
               <p className={classes.dash}></p>
               <div><p><span>N</span>50,000</p></div>
            </div>
            <div className={classes.apply}>
              <p>Apply</p>
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
              {num.map((cur, i) => {
                return (
                  <ShortletCard
                    key={i}
                    image={test}
                    rating={4.5}
                    header={"3 bedroom Apartment"}
                    text={"A fully furnished Apartment with Wifi"}
                    amount={"N50,000"}
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
