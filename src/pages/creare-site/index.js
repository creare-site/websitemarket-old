import React from 'react';

import Layout from '../../components/Layout';

import categ_bucuresti from '../../assets/images/creare-site-hyperbolic.jpg';
import categ_brasov from '../../assets/images/creare-site-inverse.jpg';
import categ_cluj from '../../assets/images/creare-site-prototype.jpg';
import categ_iasi from '../../assets/images/creare-site-reflex.jpg';
import categ_constanta from '../../assets/images/creare-site-wide-angle.jpg';

import categ_soon from '../../assets/images/creare-site-portofoliu.jpg' ;

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
          Creare <a href="https://ro.wikipedia.org/wiki/Site_web">site</a> 
        </h1>

        <p>
          Daca ai deja o afacere sau intentionezi sa iti deschizi una in viitorul apropiat si ai nevoie de un Site web, 
          acest articol te poate ajuta sa te informezi in legatura cu designul viitorului tau website. 
        </p>

        <br />
          <hr />
        <br />


        <div className="row">
          <section className="tiles">

            <article className="style1">
              <span className="image">
                <img src={categ_bucuresti} alt="Site-uri Prezentare Bucuresti - Oferite de WebsiteMarket." />
              </span>
              <a href="/creare-site/bucuresti/">
                <h2>Bucuresti</h2>
                <div className="content">
                  <p>
                    Site-uri de Prezentare
                  </p>
                </div>
              </a>
            </article>

            <article className="style2">
              <span className="image">
                <img src={categ_brasov} alt="Site-uri Prezentare Brasov - Oferite de WebsiteMarket." />
              </span>
              <a href="/creare-site/brasov/">
                <h2>Brasov</h2>
                <div className="content">
                  <p>
                    Site-uri de Prezentare
                  </p>
                </div>
              </a>
            </article>

            <article className="style3">
              <span className="image">
                <img src={categ_soon} alt="Site-uri Prezentare Coming Soon - Oferite de WebsiteMarket." />
              </span>
              <a href="/creare-site/coming-soon/">
                <h2>Coming Soon</h2>
                <div className="content">
                  <p>
                    Site-uri de Prezentare
                  </p>
                </div>
              </a>
            </article>

            <article className="style4">
              <span className="image">
                <img src={categ_cluj} alt="Site-uri Prezentare Cluj - Oferite de WebsiteMarket." />
              </span>
              <a href="/creare-site/cluj/">
                <h2>Cluj</h2>
                <div className="content">
                  <p>
                    Site-uri de Prezentare
                  </p>
                </div>
              </a>
            </article>

            <article className="style5">
              <span className="image">
                <img src={categ_iasi} alt="Site-uri Prezentare Iasi - Oferite de WebsiteMarket." />
              </span>
              <a href="/creare-site/iasi/">
                <h2>Iasi</h2>
                <div className="content">
                  <p>
                    Site-uri de Prezentare
                  </p>
                </div>
              </a>
            </article>

            <article className="style6">
              <span className="image">
                <img src={categ_constanta} alt="Site-uri Prezentare Constanta - Oferite de WebsiteMarket." />
              </span>
              <a href="/creare-site/constanta/">
                <h2>Constanta</h2>
                <div className="content">
                  <p>
                    Site-uri de Prezentare
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
