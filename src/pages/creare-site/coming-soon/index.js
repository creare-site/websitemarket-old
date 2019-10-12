import React from 'react';

import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO'

import intro_firma      from '../../../assets/images/site-firma-coming-soon-intro.gif';
import intro_fitness    from '../../../assets/images/site-fitness-coming-soon-intro.gif';
import intro_medical    from '../../../assets/images/site-medical-coming-soon-intro.gif';
import intro_restaurant from '../../../assets/images/site-restaurant-coming-soon-intro.gif';
import intro_consultant from '../../../assets/images/site-consultant-coming-soon-intro.gif';
import intro_soon       from '../../../assets/images/site-coming-soon-intro.gif';

const IndexPage = () => (
  <Layout>

    <SEO  title="Creare Site Coming Soon - Site-uri de Prezentare" 
          description="Site-uri de prezentare Coming Soon. Produse digitale WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://github.com/creare-site/coming-soon">Site-uri Coming Soon</a>
        </h1>

        <p>
        Incepi o nou afacere si nu esti decis ce design este potrivit viziunii tale?
        Pana te decizi, avem pentru tine cateva modele de pagini <strong>coming soon</strong> sortate pe industrii.
         </p>

        <hr />

        <h2> Exemple de <a href="https://github.com/creare-site/coming-soon">Site-uri Coming Soon</a></h2>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src={intro_fitness} alt="Coming Soon - Site Fitness. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-fitness-coming-soon.websitemarket.ro/">Site Fitness - Coming Soon</a> </h3>
            Pagina de coming soon cu un design minimalist. Un produs open-source WebsiteMarket.
            <br />
            <b><a href="https://site-fitness-coming-soon.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-fitness-coming-soon">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />
        
        <div className="row">
        <section>
            <p>
            <span className="image right">
              <img src={intro_medical} alt="Coming Soon - Site Medical. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-medical-coming-soon.websitemarket.ro/">Site Medical - Coming Soon</a> </h3>
            Pagina de coming soon cu un design minimalist. Un produs open-source WebsiteMarket.
            <br />
            <b><a href="https://site-medical-coming-soon.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-medical-coming-soon">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src={intro_firma} alt="Coming Soon - Site Firma. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-firma-coming-soon.websitemarket.ro/">Site Firma - Coming Soon</a> </h3>
            Pagina de coming soon cu un design minimalist. Un produs open-source WebsiteMarket.
            <br />
            <b><a href="https://site-firma-coming-soon.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-firma-coming-soon">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image right">
              <img src={intro_restaurant} alt="Coming Soon - Site Restaurant. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-restaurant-coming-soon.websitemarket.ro/">Site Restaurant - Coming Soon</a> </h3>
            Pagina de coming soon cu un design minimalist. Un produs open-source WebsiteMarket.
            <br />
            <b><a href="https://site-restaurant-coming-soon.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-restaurant-coming-soon">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src={intro_consultant} alt="Coming Soon - Site Consultant. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-consultant-coming-soon.websitemarket.ro/">Site Consultant - Coming Soon</a> </h3>
            Pagina de coming soon cu un design minimalist. Un produs open-source WebsiteMarket.
            <br />
            <b><a href="https://site-consultant-coming-soon.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-consultant-coming-soon">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image right">
              <img src={intro_soon} alt="Coming Soon - Site Prezentare. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-coming-soon.websitemarket.ro/">Site Restaurant - Coming Soon</a> </h3>
            Pagina de coming soon cu un design minimalist. Un produs open-source WebsiteMarket.
            <br />
            <b><a href="https://site-coming-soon.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-coming-soon">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <blockquote>
            <h5>WebsiteMarket</h5>
            Hai pe net! Iti livram un <strong><a href="https://github.com/creare-site/coming-soon">Site Coming Soon</a></strong> in cateva ore.
        </blockquote>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
