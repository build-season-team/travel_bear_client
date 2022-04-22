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

const search = () => {
  const num = [1, 2, 3,4,5,6,7,8,9,10,11,12];
  return (
    <div className={classes.body}>
      <Header />
      <Divider/>
      <main>

        <div className={classes.sidebar}>
        <Back className={classes.sidebarBack}/>
          <p>Search Result for<b>"3bedroom"</b> </p>
          <div className={classes.search_box_input}>
            <div className={classes.input_box}>
              <input
                className={classes.search_box_input}
                placeholder={"Quick search by type, city"}
              />
              <Button primary name="" iconPosition="right" icon={SearchIcon} />
            </div>
          </div>
        </div>


        <div className={classes.mainbar}>
          <h1>Search Results</h1>
          <Back className={classes.mainbarBack}/>
          <p>Visit the most amazing places in Nigeria.</p>
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
                  className={classes.ShortletCard}
                />
              );
            })}
          </div>
          </aside>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default search;
