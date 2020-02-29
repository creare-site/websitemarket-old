import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO'

const IndexPage = () => (
  <Layout>

    <SEO title="Site Consultant - Site-uri de Prezentare" 
         description="Site-uri de prezentare pentru consultanti. Produse digitale WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://github.com/creare-site/site-consultant">Site Consultant</a>
        </h1>

        <p>
        Esti <strong>consultant</strong> si nu ai un website pentru a comunica mai usor cu pacientii tai? 
        Aceasta lista cu <strong>site-uri de prezentare</strong> te poate ajuta sa te decizi asupra unui design apropiat de gustul tau. 
        </p>

        <hr />

        <h2> Exemple de <a href="https://github.com/creare-site/site-consultant">site-uri pentru consultanti</a></h2>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-consultant-marketing-intro.gif"
                   alt="Site Consultant Marketing - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-consultant-marketing.websitemarket.ro/">Site Consultant Marketing</a> </h3>
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            <b><a href="https://site-consultant-marketing.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-consultant-marketing">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />
        
        <div className="row">
        <section>
            <p>
            <span className="image right">
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-consultant-financiar-screen.png"
                   alt="Site Consultant Financiar - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-consultant-financiar.websitemarket.ro/">Site Consultant Financiar</a> </h3>
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            <b><a href="https://site-consultant-financiar.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-consultant-financiar">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-consultant-coming-soon-screen.png"
                   alt="Site Consultant - Coming Soon" />
            </span>
            
            <h3> <a href="https://site-consultant-coming-soon.websitemarket.ro/">Site Consultant - Coming Soon</a> </h3>
            In cazul in care nu esti decis ce design sa folosesti, avem o pagina simpla de coming soon pentru tine. 
            <br />
            <b><a href="https://site-consultant-coming-soon.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-consultant-coming-soon">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <blockquote>
            <h5>WebsiteMarket</h5>
            Vrei sa apari listat pe WebsiteMarket sau ai nevoie de un site simplu de prezentare?
            <br />
            Trimite un mail la adresa <strong> <a href="mailto:hello@websitemarket.ro">hello @ websitemarket.ro</a> </strong> si iti facem un site in cateva ore.
        </blockquote>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
