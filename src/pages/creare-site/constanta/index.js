import React from 'react';

import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO'

import intro_reflex from '../../../assets/images/creare-site-reflex-intro.gif';
import intro_lens   from '../../../assets/images/creare-site-lens-intro.gif';

const IndexPage = () => (
  <Layout>

    <SEO title="Creare Site Constanta - Site-uri de Prezentare" 
         description="Site-uri de prezentare pentru Constanta. Produse digitale WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
          Creare <a href="https://ro.wikipedia.org/wiki/Site_web">site</a> <a href="https://ro.wikipedia.org/wiki/Constanta">Constanta</a>
        </h1>

        <p>
          Daca locuiesti in <b>Constanta</b> si desfasori o activitate care are nevoie de un <b><a href="https://ro.wikipedia.org/wiki/Site_web">Site Web</a></b>{' '} 
          acest articol te poate ajuta sa te informezi in aceasta directie. 
          <br />
          Un <b><a href="https://ro.wikipedia.org/wiki/Site_web">Site Web</a></b>, poate fi privit ca o carte de vizita, in varianta moderna. 
          Oricine cu access la internet poate afla informatii relevante despre tine si afacerea ta fara ca tu sa intervii. 
          Pentru a fi util, un site web trebuie sa ofere informatia intr-un format simplu, coerent si usor de parcurs si citit de catre audienta tinta.
          <br />
          In acest articol, iti prezentam pasii necesari pentru creare unui site cat mai potrivit afacerii tale.
        </p>

        <hr />

        <h2>Creare <a href="https://ro.wikipedia.org/wiki/Site_web">site</a> - Exemple</h2>

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src={intro_lens} alt="Creare Site, Lens design - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://creare-site-lens.websitemarket.ro/">Creare Site Lens</a> </h3>
            <b>Lens</b> este ultimul design disponibil in galeria <a href="https://ro.wikipedia.org/wiki/Site_web">site</a>-urilor de prezentare. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            Produsul, ca mai toate produsele WebsiteMarket este open-source, adica oricine poate vedea codul sursa.
            <br />
            <b><a href="https://creare-site-lens.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/creare-site-lens">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image right">
              <img src={intro_reflex} alt="Creare Site, Reflex design - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://creare-site-reflex.websitemarket.ro/">Creare Site Reflex</a> </h3>
            <b>Reflex</b> este un design simplu si cu un layout impecabil pe orice dispozitiv. 
            Utilizand acest design, iti putem crea un <a href="https://ro.wikipedia.org/wiki/Site_web">site web</a> care te poate ajuta sa devii vizbil in mediul online in doar cateva ore.
            <br />
            <b><a href="https://creare-site-lens.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/creare-site-lens">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <hr />

        <blockquote>
            <h5>WebsiteMarket</h5>
            Hai pe net! Acum este simplu.
        </blockquote>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
