import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/site-servicii-cazare.jpg';
import pic2 from '../assets/images/site-clinica-dentara.jpg';
import pic3 from '../assets/images/site-prezentare-portofoliu.jpg';
import pic4 from '../assets/images/04.jpg';
import pic5 from '../assets/images/05.jpg';
import pic6 from '../assets/images/06.jpg';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            Site-uri de prezentare. Hosting
            <br />
          </h1>
          <p>
          WebsiteMarket este o agentie de webdesign, cu sediul in Constanta care isi propune sa ajute firmele mici sa se promoveze in mediul online.
          <br />Servicii: <strong>Site prezentare - 99Euro</strong> (pret unic). <strong>Hosting 2Euro</strong> / luna.
          <br />Email contact:  <strong> <a href="mailto:hello@websitemarket.ro"> hello [ @ ] websitemarket.ro </a> </strong>
          </p>
        </header>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={pic1} alt="Site Servicii Cazare - oferit de WebsiteMarket" />
            </span>
            <a href="https://cazare-mamaia-nord.websitemarket.ro/#">
              <h2>Site Servicii Cazare</h2>
              <div className="content">
                <p>
                  Pret 99Euro (hosting inclus)
                </p>
              </div>
            </a>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic2} alt="Site Clinica Dentara - Oferit de WebsiteMarket." />
            </span>
            <a href="https://site-clinica-dentara.websitemarket.ro/">
              <h2>Site Clinica Dentara</h2>
              <div className="content">
                <p>
                  Pret 99Euro (hosting inclus)
                </p>
              </div>
            </a>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic3} alt="Site Prezentare - Oferit de WebsiteMarket" />
            </span>
            <a href="https://site-prezentare-afacere.websitemarket.ro">
              <h2>Site Prezentare</h2>
              <div className="content">
                <p>
                  Pret 99Euro (hosting inclus)
                </p>
              </div>
            </a>
          </article>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
