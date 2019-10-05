import React from 'react';

import Layout from '../../components/Layout';

import intro_tessellate from '../../assets/images/site-prezentare-tessellate-intro.gif';
import intro_paradigm from '../../assets/images/site-prezentare-paradigm-intro.gif';

import intro_pensiune_paradigm from '../../assets/images/site-pensiune-paradigm-intro.gif';
import intro_contabilitate_paradigm from '../../assets/images/servicii-contabile-paradigm-intro.gif';
import intro_curatenie_paradigm from '../../assets/images/servicii-curatenie-paradigm-intro.gif';


const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://github.com/creare-site/site-prezentare">Site-uri de Prezentare</a>
        </h1>

        <p>
        Esti un antreprenor la inceput de drum si inca nu ai un website?
        In aceasta pagina am adaugat pentru tine site-uri simple, deja construite pentru diverse nise cu texte si poze editate.
        <br />In cazul in care ai probleme sa utilizezi sau sa configurezi site-ul, ne poti contacta oricand pe adresa de mail specificata in subsol. 
        </p>

        <hr />

        <h2> Exemple de <a href="https://github.com/creare-site/site-prezentare">site-uri de prezentare</a></h2>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src={intro_paradigm} alt="Site Prezentare, Design Paradigm - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-prezentare/paradigm/">Site Paradigm</a> </h3>
            Acest design disponibil in galeria <a href="https://ro.wikipedia.org/wiki/Site_web">site</a>-urilor de prezentare dedicat pensiunilor. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            Acceseaza <b><a href="/site-prezentare/paradigm/">pagina produsului</a></b> pentru mai multe informatii.{' '} 

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
              <img src={intro_tessellate} alt="Site Prezentare, Design Tessellate - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-prezentare/tessellate/">Site Tessellate</a> </h3>
            Acest design disponibil in galeria <a href="https://ro.wikipedia.org/wiki/Site_web">site</a>-urilor de prezentare dedicat pensiunilor. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            Acceseaza <b><a href="/site-prezentare/tessellate/">pagina produsului</a></b> pentru mai multe informatii.{' '} 

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
              <img src={intro_pensiune_paradigm} alt="Site Prezentare Pensiune, Design Paradigm - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-prezentare/pensiune-paradigm/">Site Pensiune</a> </h3>
            Acest design disponibil in galeria <a href="https://ro.wikipedia.org/wiki/Site_web">site</a>-urilor de prezentare dedicat pensiunilor. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            Acceseaza <b><a href="/site-prezentare/pensiune-paradigm/">pagina produsului</a></b> pentru mai multe informatii.{' '} 

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
              <img src={intro_contabilitate_paradigm} alt="Site Servicii Contabile, Design Paradigm - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-prezentare/servicii-contabile-paradigm/">Site Servicii Contabile</a> </h3>
            Acest design disponibil in galeria <a href="https://ro.wikipedia.org/wiki/Site_web">site</a>-urilor de prezentare dedicat serviciilor. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            Acceseaza <b><a href="/site-prezentare/servicii-contabile-paradigm/">pagina produsului</a></b> pentru mai multe informatii.{' '} 

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
              <img src={intro_curatenie_paradigm} alt="Site Servicii Curatenie, Design Paradigm - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/site-prezentare/servicii-curatenie-paradigm/">Site Servicii Curatenie</a> </h3>
            Acest design disponibil in galeria <a href="https://ro.wikipedia.org/wiki/Site_web">site</a>-urilor de prezentare dedicat serviciilor. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            Acceseaza <b><a href="/site-prezentare/servicii-curatenie-paradigm/">pagina produsului</a></b> pentru mai multe informatii.{' '} 

            </p>
        </section>
        </div>

        <br />
          <hr />
        <br />

        <blockquote>
            <h5>WebsiteMarket</h5>
            Hai pe net! Acum este simplu utilizand un <strong><a href="https://github.com/creare-site/site-prezentare">Site-uri de Prezentare</a></strong> oferite de WebsiteMarket.
        </blockquote>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
