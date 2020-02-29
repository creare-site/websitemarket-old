import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO'
import CtaBottom from '../../components/CtaBottom'

const IndexPage = () => (
  <Layout>

    <SEO title="Site Prezentare - Gratuite si Comerciale" 
        description="Site-uri de prezentare gratuite si comerciale. Produse digitale WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://github.com/creare-site/site-prezentare/">Site-uri de Prezentare</a>
        </h1>

        <p>
        Esti un antreprenor la inceput de drum si inca nu ai un website?
        In aceasta pagina am adaugat pentru tine site-uri simple, deja construite pentru diverse nise cu texte si poze editate.
        <br />In cazul in care ai probleme sa utilizezi sau sa configurezi site-ul, ne poti contacta oricand pe adresa de mail specificata in subsol. 
        </p>

        <hr />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-prezentare-paradigm-intro.gif"
                   alt="Site Prezentare, Design Paradigm - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-prezentare/paradigm/">Site Prezentare Paradigm</a> </h3>
            Acest design disponibil in galeria <a href="https://ro.wikipedia.org/wiki/Site_web">site</a>-urilor de prezentare dedicat pensiunilor. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            Acceseaza pagina <b><a href="/site-prezentare/paradigm/">Site-ului de Prezentare Paradigm</a></b> pentru mai multe informatii.{' '} 

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
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-prezentare-tessellate-screen.png"
                   alt="Site Prezentare, Design Tessellate - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-prezentare/tessellate/">Site Prezentare Tessellate</a> </h3>
            Acest design disponibil in galeria <a href="https://ro.wikipedia.org/wiki/Site_web">site</a>-urilor de prezentare dedicat pensiunilor. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            Acceseaza pagina <b><a href="/site-prezentare/tessellate/">Site-ului de Prezentare Tessellate</a></b> pentru mai multe informatii.{' '} 

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
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/site-pensiune-paradigm-screen.png"
                   alt="Site Prezentare Pensiune, Design Paradigm - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-prezentare/pensiune-paradigm/">Site Prezentare Pensiune</a> </h3>
            Acest design disponibil in galeria <a href="https://ro.wikipedia.org/wiki/Site_web">site</a>-urilor de prezentare dedicat pensiunilor. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            Acceseaza pagina <b><a href="/site-prezentare/pensiune-paradigm/">Site-ului Prezentare Pensiune</a></b> pentru mai multe informatii.{' '} 

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
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/servicii-contabile-paradigm-screen.png"
                   alt="Site Servicii Contabile, Design Paradigm - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-prezentare/servicii-contabile-paradigm/">Site Servicii Contabile</a> </h3>
            Acest design disponibil in galeria <a href="https://ro.wikipedia.org/wiki/Site_web">site</a>-urilor de prezentare dedicat serviciilor. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            Acceseaza pagina <b><a href="/site-prezentare/servicii-contabile-paradigm/">Site-ului Servicii Contabile</a></b> pentru mai multe informatii.{' '} 

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
              <img src="https://raw.githubusercontent.com/creare-site/static/master/produse/servicii-curatenie-paradigm-screen.png"
                   alt="Site Servicii Curatenie, Design Paradigm - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-prezentare/servicii-curatenie-paradigm/">Site Servicii Curatenie</a> </h3>
            Acest design disponibil in galeria <a href="https://ro.wikipedia.org/wiki/Site_web">site</a>-urilor de prezentare dedicat serviciilor. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            Acceseaza pagina <b><a href="/site-prezentare/servicii-curatenie-paradigm/">Site-ului Servicii Curatenie</a></b> pentru mai multe informatii.{' '} 

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
