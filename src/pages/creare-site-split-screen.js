import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/01.jpg';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
            Creare Site - Split Screen
        </h1>
      
        <span className="image main">
            <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/creare-site-split-screen-intro.gif"/>
        </span>
        <p>
          Website de prezentare cu un design simplu si modern.
          Alege sa fii prezent in mediul online printr-un design care arata perfect pe orice dispozitiv.
          Toate produsele WebsiteMarket sunt create pentru a fi accesibile companiilor mici care au nevoie de o prezenta in mediul online 
          cu un buget redus.
        </p>

        <hr />

        <p>
        <b><a href="https://creare-site-split-screen.websitemarket.ro/">Live demo</a></b>{' '} 
        - <b><a href="https://github.com/creare-site/creare-site-split-screen">codul sursa</a></b> (pentru dezvoltatori).  
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
