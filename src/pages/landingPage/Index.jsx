import React, { useContext, useEffect, useState } from "react";
import { SpinnerCircular } from 'spinners-react';



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
import getShortlet from "../../store/shortletContext/actionCreators/getShortlet";
import {ShortletContext} from '../../store/shortletContext/ShortletProvider';
import { BASE_SHORTLET_URL_DEV, BASE_URL, BASE_URL_DEV } from "../../constants/base";

const LandingPage = () => {

  const [stateInfo, setStateInfo] = useState('all')
  const [stateInfo2, setStateInfo2] = useState('all')
  const {shortletDispatch, shortletState: {loading, data}} = useContext(ShortletContext);
  let visited = stateInfo === 'all' ? data.sort((a, b) => b.visited - a.visited).slice(0, 4) : data.sort((a, b) => b.ratingsAverage - a.ratingsAverage).filter(item => item.state === stateInfo).slice(0, 4);
  let highRate = stateInfo2 === 'all' ? data.sort((a, b) => b.ratingsAverage - a.ratingsAverage).slice(0, 4) : data.sort((a, b) => b.ratingsAverage - a.ratingsAverage).filter(item => item.state === stateInfo2).slice(0, 4);
  if(data.length === 0) {
    visited = new Array(4).fill(0);
    highRate = new Array(4).fill(0);
  }

  useEffect(() => {
    getShortlet()(shortletDispatch);
  },[])







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
            <p>Visit the most amazing Shortlets across Nigeria. </p>
              <div className={classes.buttonHolder}>
                <Button onClick={() => setStateInfo('all')} primary={stateInfo === 'all' ? true : false} btnLink={stateInfo !== 'all' ? true : false} name={"All"} />
                <Button onClick={() => setStateInfo('Lagos')} primary={stateInfo === 'Lagos' ? true : false} btnLink={stateInfo !== 'Lagos' ? true : false} name={"Lagos"} />
                <Button onClick={() => setStateInfo('Owerri')} primary={stateInfo === 'Owerri' ? true : false} btnLink={stateInfo !== 'Owerri' ? true : false} name={"Owerri"} />
                <Button onClick={() => setStateInfo('Abuja')} primary={stateInfo === 'Abuja' ? true : false} btnLink={stateInfo !== 'Abuja' ? true : false} name={"Abuja"} />
                <Button onClick={() => setStateInfo('Enugu')} primary={stateInfo === 'Enugu' ? true : false} btnLink={stateInfo !== 'Enugu' ? true : false} name={"Enugu"} />
              </div>
            </div>
            <div className={classes.shortletContainer}>
              {
                visited.map((cur, i) => {
                  return (
                    <ShortletCard
                      loading={loading}
                      key={i}
                      image={cur.image && BASE_SHORTLET_URL_DEV + cur.image?.[0]}
                      rating={cur.ratingsAverage?.toFixed(1) || 4.5}
                      header={cur.houseTitle}
                      text={cur.description?.length > 35 ? cur.description?.substring(0, 35) + "....." : cur.description }
                      amount={cur.amount}
                      big
                    />
                  )
                })

              }

              
            </div>
          </div>

          <div className={classes.bookacc}>
            <div className={classes.topbody}>
              <h3>Highest Rated Accommodation</h3>
              <p className={classes.place}>Shortlets with Highest Ratings </p>
              <div className={classes.buttonHolder}>
                <Button onClick={() => setStateInfo2('all')} primary={stateInfo2 === 'all' ? true : false} btnLink={stateInfo2 !== 'all' ? true : false} name={"All"} />
                <Button onClick={() => setStateInfo2('Lagos')} primary={stateInfo2 === 'Lagos' ? true : false} btnLink={stateInfo2 !== 'Lagos' ? true : false} name={"Lagos"} />
                <Button onClick={() => setStateInfo2('Owerri')} primary={stateInfo2 === 'Owerri' ? true : false} btnLink={stateInfo2 !== 'Owerri' ? true : false} name={"Owerri"} />
                <Button onClick={() => setStateInfo2('Abuja')} primary={stateInfo2 === 'Abuja' ? true : false} btnLink={stateInfo2 !== 'Abuja' ? true : false} name={"Abuja"} />
                <Button onClick={() => setStateInfo2('Enugu')} primary={stateInfo2 === 'Enugu' ? true : false} btnLink={stateInfo2 !== 'Enugu' ? true : false} name={"Enugu"} />
              </div>
            </div>
            <div className={classes.shortletContainer}>
              {highRate.map((cur, i) => {
                return (
                  <ShortletCard
                    key={i}
                    loading={loading}
                    big
                    image={cur.image && BASE_SHORTLET_URL_DEV + cur.image?.[0]}
                    rating={cur.ratingsAverage?.toFixed(1)}
                    header={cur.houseTitle}
                    text={cur.description?.length > 35 ? cur.description?.substring(0, 35) + "....." : cur.description}
                    amount={cur.amount}
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

export default LandingPage;
