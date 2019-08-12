import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/site-servicii-cazare.jpg';
import pic2 from '../assets/images/site-clinica-dentara.jpg';
import pic3 from '../assets/images/site-prezentare-portofoliu.jpg';
import pic4 from '../assets/images/site-portofoliu.jpg';
import pic5 from '../assets/images/site-prezentare-dimension.jpg';
import pic6 from '../assets/images/site-prezentare-speed.jpg';
import pic7 from '../assets/images/site-prezentare-directive.jpg';
import pic8 from '../assets/images/site-prezentare-grayscale.jpg';

// jamstack
import intro_reflex from '../assets/images/creare-site-reflex-intro.gif';

import site_hyperbolic   from '../assets/images/creare-site-hyperbolic.jpg';
import site_inverse      from '../assets/images/creare-site-inverse.jpg';
import site_portofoliu   from '../assets/images/creare-site-portofoliu.jpg';
import site_prototype    from '../assets/images/creare-site-prototype.jpg';
import site_reflex       from '../assets/images/creare-site-reflex.jpg';
import site_relativity   from '../assets/images/creare-site-relativity.jpg';
import site_split_screen from '../assets/images/creare-site-split-screen.jpg';
import site_visualize    from '../assets/images/creare-site-visualize.jpg';

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

        <hr />

        <div className="row">
          <section>
            <p>
              <span className="image left">
                <img src={intro_reflex} alt="Creare Site, Reflex design - Un produs Websitemarket" />
              </span>
              
              <h2> <a href="https://creare-site-reflex.websitemarket.ro/">Site Prezentare</a> - Reflex</h2>
              <b>Reflex</b> este ultimul design disponibil in galeria site-urilor de prezentare. 
              Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
              Produsul, ca mai toate produsele WebsiteMarket este open-source, adica oricine poate vedea codul sursa.
              <br />
              <b><a href="https://creare-site-reflex.websitemarket.ro/">Live demo</a></b>{' '} 
              - <b><a href="https://github.com/creare-site/creare-site-reflex">codul sursa</a></b> (pentru dezvoltatori).  

          </p>
          </section>
        </div>

        <hr />
        
        <div className="row">
          <section className="tiles">

            <article className="style5">
              <span className="image">
                <img src={site_visualize} alt="Site Prezentare Visualize - oferit de WebsiteMarket" />
              </span>
              <a href="https://creare-site-visualize.websitemarket.ro/">
                <h2>Site Visualize</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style6">
              <span className="image">
                <img src={site_split_screen} alt="Site Prezentare Split Screen - oferit de WebsiteMarket" />
              </span>
              <a href="https://creare-site-split-screen.websitemarket.ro/">
                <h2>Site Split Screen</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style1">
              <span className="image">
                <img src={site_relativity} alt="Site Prezentare Relativity - oferit de WebsiteMarket" />
              </span>
              <a href="https://creare-site-relativity.websitemarket.ro/">
                <h2>Site Relativity</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style2">
              <span className="image">
                <img src={site_reflex} alt="Site Prezentare Reflex - oferit de WebsiteMarket" />
              </span>
              <a href="https://creare-site-reflex.websitemarket.ro/">
                <h2>Site Reflex</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style3">
              <span className="image">
                <img src={site_prototype} alt="Site Prezentare Prototype - oferit de WebsiteMarket" />
              </span>
              <a href="https://creare-site-prototype.websitemarket.ro/">
                <h2>Site Prototype</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style4">
              <span className="image">
                <img src={site_portofoliu} alt="Site Prezentare Portofoliu - oferit de WebsiteMarket" />
              </span>
              <a href="https://creare-site-portofoliu.websitemarket.ro/">
                <h2>Site Portofoliu</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style5">
              <span className="image">
                <img src={site_hyperbolic} alt="Site Prezentare Inverse - oferit de WebsiteMarket" />
              </span>
              <a href="https://creare-site-inverse.websitemarket.ro/">
                <h2>Site Inverse</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style6">
              <span className="image">
                <img src={site_hyperbolic} alt="Site Prezentare Hyperbolic - oferit de WebsiteMarket" />
              </span>
              <a href="https://creare-site-hyperbolic.websitemarket.ro/">
                <h2>Site Hyperbolic</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

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
            <article className="style4">
              <span className="image">
                <img src={pic4} alt="Site Portofoliu - Oferit de WebsiteMarket" />
              </span>
              <a href="https://site-portofoliu.websitemarket.ro">
                <h2>Site Portofoliu</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style5">
              <span className="image">
                <img src={pic5} alt="Site Prezentare - Dimension" />
              </span>
              <a href="https://site-prezentare-dimension.websitemarket.ro/">
                <h2>Site Dimension</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style6">
              <span className="image">
                <img src={pic6} alt="Site Prezentare - Speed" />
              </span>
              <a href="https://site-prezentare-speed.websitemarket.ro/">
                <h2>Site Speed</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style1">
              <span className="image">
                <img src={pic7} alt="Site Prezentare - Speed" />
              </span>
              <a href="https://site-prezentare-directive.websitemarket.ro/">
                <h2>Site Directive</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style2">
              <span className="image">
                <img src={pic8} alt="Site Prezentare - Speed" />
              </span>
              <a href="https://site-prezentare-grayscale.websitemarket.ro/">
                <h2>Site Grayscale</h2>
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
    </div>
  </Layout>
);

export default IndexPage;
