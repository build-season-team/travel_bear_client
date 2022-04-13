import React from "react";
import classes from "./landing.module.css";
import Header from "../../components/UI/Header/index";
import Footer from "../../components/UI/Footer/index";
import Hero from "../../components/UI/HeroSection/HeroSection";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import ShortletCard from "../../components/UI/ShortletCard/index";
import test from "../../assets/images/test.png";
import Button from "../../components/UI/Button/index";
import WhyUs from "../../components/WhyUs/WhyUs"
import Update from "../../components/Update/update"

const landingPage = () => {
  const num = [1,2,3,4];
  return (
    <div>
      <div>
        <Header />
        <Hero />
        <SearchBar />
        <main className={classes.Acc}>
          <div className={classes.bookacc}>
            <div className={classes.topbody}>
            <h3>Most Visited Locations</h3>
            <p>Visit the most amazing places across Nigeria. </p>
              <div className={classes.buttonHolder}>
                <Button primary name={"All"} />
                <Button btnLink name={"Lagos"} />
                <Button btnLink name={"Owerri"} />
                <Button btnLink name={"Abuja"} />
                <Button btnLink name={"Enugu"} />
              </div>
            </div>
            <div className={classes.shortletContainer}>
              {num.map((cur, i) => {
                return (
                  <ShortletCard
                    key={i}
                    big
                    image={test}
                    rating={4.5}
                    header={"3 bedroom Apartment"}
                    text={"A fully furnished Apartment with Wifi"}
                    amount={"N50,000"}
                  />
                )
              })}

              
            </div>
          </div>

          <div className={classes.bookacc}>
            <div className={classes.topbody}>
              <h3>Clean Accommodation</h3>
              <p className={classes.place}>Hotel with standardized hygiene protocol.</p>
              <div className={classes.buttonHolder}>
                <Button primary name={"All"} />
                <Button btnLink name={"Lagos"} />
                <Button btnLink name={"Owerri"} />
                <Button btnLink name={"Abuja"} />
                <Button btnLink name={"Enugu"} />
              </div>
            </div>
            <div className={classes.shortletContainer}>
              {num.map((cur, i) => {
                return (
                  <ShortletCard
                    key={i}
                    big
                    image={test}
                    rating={4.5}
                    header={"3 bedroom Apartment"}
                    text={"A fully furnished Apartment with Wifi"}
                    amount={"N50,000"}
                  />
                )
              })}
              
            </div>
          </div>
        </main>
        <WhyUs />
        <Update />
        <Footer />
      </div>
    </div>
  );
};

export default landingPage;
