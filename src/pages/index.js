import React from 'react';

import Layout from '../components/Layout';

import categ_site_gratuit      from '../assets/images/site-gratuit-websitemarket.jpg';
import categ_site_prezentare   from '../assets/images/site-prezentare-websitemarket.jpg';
import categ_design            from '../assets/images/creare-site-reflex.jpg';

import categ_site_medical      from '../assets/images/site-medical-coming-soon.jpg';
import categ_site_restaurant   from '../assets/images/site-medical-coming-soon.jpg';
import categ_site_fitness      from '../assets/images/site-fitness-parallelism.jpg';

import categ_site_pensiuni     from '../assets/images/creare-site-reflex.jpg';
import categ_site_bucuresti    from '../assets/images/creare-site-bucuresti-websitemarket.jpg';
import categ_site_soon         from '../assets/images/site-fitness-coming-soon.jpg';

// latest ..
import design_lens         from '../assets/images/creare-site-lens-intro.gif';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            Site-uri de prezentare - 49Euro
            <br />
          </h1>
          <p>
          WebsiteMarket este o agentie de webdesign, cu sediul in Constanta care isi propune sa ajute firmele mici sa se promoveze in mediul online.
          <br />Afla de ce suntem diferiti prin ceea si cum iti putem <b><a href="/creare-site-web">crea un site web</a></b> modern in cateva ore. 

          <br /><br />
          Servicii: <strong>Site prezentare - 49Euro</strong> (pret unic). <strong>Hosting 1.99 Euro</strong> / luna.
          <br />Email contact:  <strong> <a href="mailto:hello@websitemarket.ro"> hello [ @ ] websitemarket.ro </a> </strong>
          </p>
        </header>

        <hr />

        <div className="row">
          <section>
            <p>
              <span className="image left">
                <img src={design_lens} alt="Creare Site, Lens design - Un produs Websitemarket" />
              </span>
              
              <h2> <a href="/creare-site/design/lens">Site Prezentare Lens</a> - Lens</h2>
              <b>Lens</b> este ultimul design disponibil in galeria site-urilor de prezentare. 
              Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
              Produsul, ca mai toate produsele WebsiteMarket este open-source, adica oricine poate vedea codul sursa.
              <br />
              <b><a href="https://creare-site-lens.websitemarket.ro/">Live demo</a></b>
          </p>
          </section>
        </div>

        <hr />
        
        <div className="row">
          <section className="tiles">

            <article className="style1">
              <span className="image">
                <img src={categ_site_gratuit} alt="Site-uri Gratuite - Oferite de WebsiteMarket." />
              </span>
              <a href="/site-gratuit/">
                <h2>Site-uri Gratuite</h2>
                <div className="content">
                  <p>
                    WebsiteMarket
                  </p>
                </div>
              </a>
            </article>

            <article className="style2">
              <span className="image">
                <img src={categ_site_prezentare} alt="Site-uri Prezentare - Oferite de WebsiteMarket." />
              </span>
              <a href="/site-prezentare/">
                <h2>Site-uri de Prezentare</h2>
                <div className="content">
                  <p>
                    Pret 49Euro
                  </p>
                </div>
              </a>
            </article>

            <article className="style3">
              <span className="image">
                <img src={categ_design} alt="Creare Site Design - Produse WebsiteMarket." />
              </span>
              <a href="/creare-site/design/">
                <h2>Website Design</h2>
                <div className="content">
                  <p>
                    Pret 49Euro 
                  </p>
                </div>
              </a>
            </article>

            <article className="style4">
              <span className="image">
                <img src={categ_site_medical} alt="Site Medical - Produse WebsiteMarket." />
              </span>
              <a href="/site-medical/">
                <h2>Site Medical</h2>
                <div className="content">
                  <p>
                    Pret 49Euro 
                  </p>
                </div>
              </a>
            </article>

            <article className="style5">
              <span className="image">
                <img src={categ_site_restaurant} alt="Site Restaurant - Produse WebsiteMarket." />
              </span>
              <a href="/site-restaurant/">
                <h2>Site Restaurant</h2>
                <div className="content">
                  <p>
                    Pret 49Euro 
                  </p>
                </div>
              </a>
            </article>

            <article className="style6">
              <span className="image">
                <img src={categ_site_fitness} alt="Site Fitness - Produse WebsiteMarket." />
              </span>
              <a href="/site-fitness/">
                <h2>Site Fitness</h2>
                <div className="content">
                  <p>
                    Pret 49Euro 
                  </p>
                </div>
              </a>
            </article>

            <article className="style1">
              <span className="image">
                <img src={categ_site_pensiuni} alt="Site Pensiuni - Produse WebsiteMarket." />
              </span>
              <a href="/creare-site/pensiuni/">
                <h2>Site Pensiuni</h2>
                <div className="content">
                  <p>
                    Pret 49Euro 
                  </p>
                </div>
              </a>
            </article>

            <article className="style2">
              <span className="image">
                <img src={categ_site_bucuresti} alt="Site Bucuresti - Produse WebsiteMarket." />
              </span>
              <a href="/creare-site/bucuresti/">
                <h2>Site Bucuresti</h2>
                <div className="content">
                  <p>
                    Pret 49Euro 
                  </p>
                </div>
              </a>
            </article>

            <article className="style3">
              <span className="image">
                <img src={categ_site_soon} alt="Site Coming Soon - Produse WebsiteMarket." />
              </span>
              <a href="/creare-site/coming-soon/">
                <h2>Coming Soon</h2>
                <div className="content">
                  <p>
                    Pret 49Euro
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
