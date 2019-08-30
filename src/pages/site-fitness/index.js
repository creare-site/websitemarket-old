import React from 'react';

import Layout from '../../components/Layout';

import intro_parallelism from '../../assets/images/site-fitness-parallelism-intro.gif';
import intro_ethereal    from '../../assets/images/site-fitness-ethereal-intro.gif';
import intro_soon        from '../../assets/images/site-fitness-coming-soon-intro.gif';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://github.com/creare-site/site-fitness">Site Fitness</a>
        </h1>

        <p>
        Deschizi o sala de fitness si nu ai un site? 
        Modelele de website de mai jos se vor afisa perfect pe orice dispozitiv si iti va ajuta afacerea sa creasca.
        Livrarea o vom face intr-un timp record (cateva ore) iar pretul site-urilor este unul unic: <strong>99Euro (hosting inclus)</strong>
         </p>

        <hr />

        <h2> Exemple de <a href="https://github.com/creare-site/site-fitness">Site-uri pentru sali fitness</a></h2>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src={intro_parallelism} alt="Site Fitness - Parallelism. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-fitness-parallelism.websitemarket.ro/">Site Fitness - Parallelism</a> </h3>
            Intra in contact cu viitorii tai clineti printr-un site modern care se va afisa perfect pe orice dispozitiv. 
            <br />
            <b><a href="https://site-fitness-parallelism.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-fitness-parallelism/">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />
        
        <div className="row">
        <section>
            <p>
            <span className="image right">
              <img src={intro_ethereal} alt="Site Fitness - Ethereal. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-fitness-ethereal.websitemarket.ro/">Site Fitness - Ethereal</a> </h3>
            Intra in contact cu viitorii tai clineti printr-un site modern care se va afisa perfect pe orice dispozitiv. 
            <br />
            <b><a href="https://site-fitness-ethereal.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-fitness-ethereal/">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src={intro_soon} alt="Coming Soon - Sala Fitness. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-restaurant-coming-soon.websitemarket.ro/">Site Fitness - Coming Soon</a> </h3>
            Pagina de coming soon cu un design minimalist. Un produs open-source WebsiteMarket.
            <br />
            <b><a href="https://site-fitness-coming-soon.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-fitness-coming-soon">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <blockquote>
            <h5>WebsiteMarket</h5>
            Hai pe net! 
            Iti livram un <strong><a href="https://github.com/creare-site/site-fitness">site pentru sala ta de fitness</a></strong> in cateva ore.
        </blockquote>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
