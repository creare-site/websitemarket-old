import React from 'react';

import Layout from '../../components/Layout';

import intro_story    from '../../assets/images/site-restaurant-story-intro.gif';
import intro_reflex   from '../../assets/images/site-restaurant-reflex-intro.gif';
import intro_soon     from '../../assets/images/site-restaurant-coming-soon-intro.gif';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://github.com/creare-site/site-restaurant">Site Restaurant</a>
        </h1>

        <p>
        Deschizi un nou restaurant sau cafenea si nu ai un site? 
        Modelele de website de mai jos se vor afisa perfect pe orice dispozitiv si iti va ajuta afacerea sa creasca.
        Livrarea o vom face intr-un timp record (cateva ore) iar pretul site-urilor este unul unic: <strong>99Euro (hosting inclus)</strong>
         </p>

        <hr />

        <h2> Exemple de <a href="https://github.com/creare-site/site-restaurant">Site-uri pentru Restaurante</a></h2>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src={intro_story} alt="Site Restaurant - Design Story. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-restaurant-story.websitemarket.ro/">Site Restaurant - Design Story</a> </h3>
            Intra in contact cu viitorii tai clineti printr-un site modern care se va afisa perfect pe orice dispozitiv. 
            <br />
            <b><a href="https://site-restaurant-story.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-restaurant-story/">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />
        
        <div className="row">
        <section>
            <p>
            <span className="image right">
              <img src={intro_reflex} alt="Site Restaurant - Design reflex. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-restaurant-reflex.websitemarket.ro/">Site Restaurant - Design Reflex</a> </h3>
            Intra in contact cu viitorii tai clineti printr-un site modern care se va afisa perfect pe orice dispozitiv. 
            <br />
            <b><a href="https://site-restaurant-reflex.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-restaurant-reflex/">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src={intro_soon} alt="Coming Soon - Site Restaurant. Un produs Websitemarket" />
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

        <blockquote>
            <h5>WebsiteMarket</h5>
            Hai pe net! 
            Iti livram un <strong><a href="https://github.com/creare-site/site-restaurant">site pentru restaurantul</a></strong> tau in cateva ore.
        </blockquote>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
