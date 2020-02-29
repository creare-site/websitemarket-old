import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO'

const IndexPage = () => (
  <Layout>

    <SEO title="Site Fitness - Site-uri de Prezentare" 
         description="Site-uri de prezentare pentru nisa wellness / fitness. Produse digitale WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://github.com/creare-site/site-fitness">Site Fitness</a>
        </h1>

        <p>
          Deschizi o sala de fitness si nu ai un site? 
          Modelele de website de mai jos se vor afisa perfect pe orice dispozitiv si iti va ajuta afacerea sa creasca.
         </p>

        <hr />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-fitness-parallelism-intro.gif" 
                   alt="Site Fitness - Parallelism. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-fitness/parallelism/">Site Fitness - Parallelism</a> </h3>
            Intra in contact cu viitorii tai clineti printr-un site modern care se va afisa perfect pe orice dispozitiv. 
            <br />
            Acceseaza pagina <b><a href="/site-fitness/parallelism/">Site-ului de Fitness Parallelism</a></b> pentru mai multe informatii.{' '} 

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
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-fitness-ethereal-screen.png" 
                   alt="Site Fitness - Ethereal. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-fitness/ethereal/">Site Fitness - Ethereal</a> </h3>
            Intra in contact cu viitorii tai clineti printr-un site modern care se va afisa perfect pe orice dispozitiv. 
            <br />
            Acceseaza pagina <b><a href="/site-fitness/ethereal/">Site-ului de Fitness Ethereal</a></b> pentru mai multe informatii.{' '} 

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
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-fitness-coming-soon-screen.png" 
                   alt="Coming Soon - Sala Fitness. Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-fitness/coming-soon/">Site Fitness - Coming Soon</a> </h3>
            Pagina de coming soon cu un design minimalist. Un produs open-source WebsiteMarket.
            <br />
            Acceseaza pagina <b><a href="/site-fitness/coming-soon/">Site-ului de Fitness Ethereal</a></b> pentru mai multe informatii.{' '} 

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
