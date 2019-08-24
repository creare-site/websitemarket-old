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
import intro_lens   from '../assets/images/creare-site-lens-intro.gif';

import site_hyperbolic   from '../assets/images/creare-site-hyperbolic.jpg';
import site_inverse      from '../assets/images/creare-site-inverse.jpg';
import site_portofoliu   from '../assets/images/creare-site-portofoliu.jpg';
import site_prototype    from '../assets/images/creare-site-prototype.jpg';
import site_reflex       from '../assets/images/creare-site-reflex.jpg';
import site_relativity   from '../assets/images/creare-site-relativity.jpg';
import site_split_screen from '../assets/images/creare-site-split-screen.jpg';
import site_visualize    from '../assets/images/creare-site-visualize.jpg';

import site_lens         from '../assets/images/creare-site-lens.jpg';
import site_hologram     from '../assets/images/creare-site-hologram.jpg';
import site_tactile      from '../assets/images/creare-site-tactile.jpg';
import site_story        from '../assets/images/creare-site-story.jpg';
import site_construct    from '../assets/images/creare-site-construct.jpg';
import site_drift        from '../assets/images/creare-site-drift.jpg';
import site_wideangle    from '../assets/images/creare-site-wide-angle.jpg';
import site_elemental    from '../assets/images/creare-site-elemental.jpg';
import site_gravity      from '../assets/images/creare-site-gravity.jpg';
import site_optics       from '../assets/images/creare-site-optics.jpg';

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
          <br />Afla de ce suntem diferiti prin ceea si cum iti putem <b><a href="/creare-site-web">crea un site web</a></b> modern in cateva ore. 

          <br /><br />
          Servicii: <strong>Site prezentare - 99Euro</strong> (pret unic). <strong>Hosting 2Euro</strong> / luna.
          <br />Email contact:  <strong> <a href="mailto:hello@websitemarket.ro"> hello [ @ ] websitemarket.ro </a> </strong>
          </p>
        </header>

        <hr />

        <div className="row">
          <section>
            <p>
              <span className="image left">
                <img src={intro_lens} alt="Creare Site, Lens design - Un produs Websitemarket" />
              </span>
              
              <h2> <a href="/creare-site-lens">Site Prezentare</a> - Lens</h2>
              <b>Lens</b> este ultimul design disponibil in galeria site-urilor de prezentare. 
              Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
              Produsul, ca mai toate produsele WebsiteMarket este open-source, adica oricine poate vedea codul sursa.
              <br />
              <b><a href="https://creare-site-lens.websitemarket.ro/">Live demo</a></b>{' '} 
              - <b><a href="https://github.com/creare-site/creare-site-lens">codul sursa</a></b> (pentru dezvoltatori).  

          </p>
          </section>
        </div>

        <hr />
        
        <div className="row">
          <section className="tiles">

            <article className="style3">
              <span className="image">
                <img src={site_lens} alt="Site Fotografie Lens - oferit de WebsiteMarket" />
              </span>
              <a href="https://site-fotografie-lens.websitemarket.ro/">
                <h2>Site Fotografie Lens</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style4">
              <span className="image">
                <img src={site_story} alt="Site Restaurant Story - oferit de WebsiteMarket" />
              </span>
              <a href="https://site-restaurant-story.websitemarket.ro/">
                <h2>Site Restaurant Story</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style5">
              <span className="image">
                <img src={site_reflex} alt="Site Restaurant Reflex - oferit de WebsiteMarket" />
              </span>
              <a href="https://site-restaurant-reflex.websitemarket.ro/">
                <h2>Site Restaurant Reflex</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style6">
              <span className="image">
                <img src={site_elemental} alt="Site Medical Elemental - oferit de WebsiteMarket" />
              </span>
              <a href="https://site-medical-elemental.websitemarket.ro/">
                <h2>Site Medical Elemental</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style1">
              <span className="image">
                <img src={site_hyperbolic} alt="Site Medical Hyperbolic - oferit de WebsiteMarket" />
              </span>
              <a href="https://site-medical-hyperbolic.websitemarket.ro/">
                <h2>Site Medical Hyperbolic</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style2">
              <span className="image">
                <img src={site_reflex} alt="Site Medical Reflex - oferit de WebsiteMarket" />
              </span>
              <a href="https://site-medical-reflex.websitemarket.ro/">
                <h2>Site Medical Reflex</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style3">
              <span className="image">
                <img src={site_story} alt="Site Medical Story - oferit de WebsiteMarket" />
              </span>
              <a href="https://site-medical-story.websitemarket.ro/">
                <h2>Site Medical Story</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style4">
              <span className="image">
                <img src={site_split_screen} alt="Site Coming Soon - oferit de WebsiteMarket" />
              </span>
              <a href="https://site-coming-soon.websitemarket.ro/">
                <h2>Site Coming Soon</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style5">
              <span className="image">
                <img src={site_portofoliu} alt="Site Consultant Financiar - oferit de WebsiteMarket" />
              </span>
              <a href="https://site-consultant-financiar.websitemarket.ro/">
                <h2>Site Consultant Financiar</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style6">
              <span className="image">
                <img src={site_drift} alt="Site Consultant Marketing - oferit de WebsiteMarket" />
              </span>
              <a href="https://site-consultant-marketing.websitemarket.ro/">
                <h2>Site Consultant Marketing</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style1">
              <span className="image">
                <img src={site_lens} alt="Site Prezentare Lens - oferit de WebsiteMarket" />
              </span>
              <a href="/creare-site-lens">
                <h2>Site Lens</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style2">
              <span className="image">
                <img src={site_hologram} alt="Site Prezentare Hologram - oferit de WebsiteMarket" />
              </span>
              <a href="/creare-site-hologram">
                <h2>Site Hologram</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style3">
              <span className="image">
                <img src={site_tactile} alt="Site Prezentare Tactile - oferit de WebsiteMarket" />
              </span>
              <a href="/creare-site-tactile">
                <h2>Site Tactile</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style4">
              <span className="image">
                <img src={site_story} alt="Site Prezentare Story - oferit de WebsiteMarket" />
              </span>
              <a href="/creare-site-story">
                <h2>Site Story</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style5">
              <span className="image">
                <img src={site_construct} alt="Site Prezentare Construct - oferit de WebsiteMarket" />
              </span>
              <a href="/creare-site-construct">
                <h2>Site Construct</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style6">
              <span className="image">
                <img src={site_drift} alt="Site Prezentare Drift - oferit de WebsiteMarket" />
              </span>
              <a href="/creare-site-drift">
                <h2>Site Drift</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style1">
              <span className="image">
                <img src={site_wideangle} alt="Site Prezentare Wide Angle - oferit de WebsiteMarket" />
              </span>
              <a href="/creare-site-wide-angle">
                <h2>Site Wide Angle</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style2">
              <span className="image">
                <img src={site_elemental} alt="Site Prezentare Elemental - oferit de WebsiteMarket" />
              </span>
              <a href="/creare-site-elemental">
                <h2>Site Elemental</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style3">
              <span className="image">
                <img src={site_gravity} alt="Site Prezentare Gravity - oferit de WebsiteMarket" />
              </span>
              <a href="/creare-site-gravity">
                <h2>Site Gravity</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style4">
              <span className="image">
                <img src={site_optics} alt="Site Prezentare Optics - oferit de WebsiteMarket" />
              </span>
              <a href="/creare-site-optics">
                <h2>Site Optics</h2>
                <div className="content">
                  <p>
                    Pret 99Euro (hosting inclus)
                  </p>
                </div>
              </a>
            </article>

            <article className="style5">
              <span className="image">
                <img src={site_visualize} alt="Site Prezentare Visualize - oferit de WebsiteMarket" />
              </span>
              <a href="/creare-site-visualize">
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
              <a href="/creare-site-split-screen">
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
              <a href="/creare-site-relativity">
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
              <a href="/creare-site-reflex">
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
              <a href="/creare-site-prototype">
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
              <a href="/creare-site-portofoliu">
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
              <a href="/creare-site-inverse">
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
              <a href="/creare-site-hyperbolic">
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
              <a href="/creare-site-cazare-mamaia-nord">
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
              <a href="/creare-site-clinica-dentara">
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
              <a href="/creare-site-afacere">
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
              <a href="/site-portofoliu">
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
              <a href="/creare-site-dimension">
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
              <a href="/creare-site-speed">
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
              <a href="/creare-site-directive">
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
              <a href="/creare-site-grayscale">
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
