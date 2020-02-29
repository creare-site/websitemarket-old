import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO'
import CtaBottom from '../../components/CtaBottom';

const IndexPage = () => (
  <Layout>

    <SEO title="Site Restaurant - Site-uri de Prezentare" 
         description="Site-uri de prezentare restaurante si cafenele. Produse digitale WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://github.com/creare-site/site-restaurant">Site Restaurant</a>
        </h1>

        <p>
        Deschizi un nou restaurant sau cafenea si nu ai un site? 
        Modelele de website de mai jos se vor afisa perfect pe orice dispozitiv si iti va ajuta afacerea sa creasca.
         </p>

        <hr />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-restaurant-story-intro.gif"
                   alt="Site Restaurant - Design Story. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-restaurant/story/">Site Restaurant - Design Story</a> </h3>
            Intra in contact cu viitorii tai clineti printr-un site modern care se va afisa perfect pe orice dispozitiv. 
            <br />
            Acceseaza pagina <b><a href="/site-restaurant/story/">Site-ului Restaurant Story</a></b> pentru mai multe informatii.{' '} 

            </p>
        </section>
        </div>

        <br />
          <hr />
        <br />
        
        <div className="row">
        <section>
            <p>
            <span className="image right">
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-restaurant-reflex-screen.png"
                   alt="Site Restaurant - Design reflex. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-restaurant/reflex/">Site Restaurant - Design Reflex</a> </h3>
            Intra in contact cu viitorii tai clineti printr-un site modern care se va afisa perfect pe orice dispozitiv. 
            <br />
            Acceseaza pagina <b><a href="/site-restaurant/reflex/">Site-ului Restaurant Reflex</a></b> pentru mai multe informatii.{' '} 

            </p>
        </section>
        </div>

        <br />
          <hr />
        <br />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-restaurant-coming-soon-screen.png"
                   alt="Coming Soon - Site Restaurant. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-restaurant/coming-soon/">Site Restaurant - Coming Soon</a> </h3>
            Pagina de coming soon cu un design minimalist. Un produs open-source WebsiteMarket.
            <br />
            Acceseaza pagina <b><a href="/site-restaurant/coming-soon/">Site Restaurant - Coming Soon</a></b> pentru mai multe informatii.{' '} 

            </p>
        </section>
        </div>

        <br />
          <hr />
        <br />

        <CtaBottom/>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
