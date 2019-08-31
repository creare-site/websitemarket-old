import React from 'react';

import Layout from '../../components/Layout';

import intro_nowui    from '../../assets/images/site-gratuit-ui-kit-intro.gif';
import intro_material from '../../assets/images/site-gratuit-material-intro.gif';
import intro_paper    from '../../assets/images/site-gratuit-paper-intro.gif';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
          <a href="https://github.com/creare-site/site-gratuit">Site Gratuit</a>
        </h1>

        <p>
        Esti un antreprenor la inceput de drum si inca nu ai un website?
        In acest caz avem o veste buna pentru tine deoarece toate site-urile listate pe aceasta pagina sunt gratuite 
        si le poti folosi imediat fara a crea un cont. 
        <br />In cazul in care ai probleme sa utilizezi sau sa configurezi site-ul, ne poti contacta oricand pe adresa de mail specificata in subsol. 
        </p>

        <hr />

        <h2> Exemple de <a href="https://github.com/creare-site/site-gratuit">site-uri gratuite</a></h2>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src={intro_nowui} alt="Site Gratuit, Design Now UI - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-gratuit-ui-kit.websitemarket.ro/">Site Gratuit Design Now UI</a> </h3>
            <b>UI Kit</b> este un design disponibil in galeria <a href="https://ro.wikipedia.org/wiki/Site_web">site</a>-urilor de prezentare pentru companii mici. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            <b><a href="https://site-gratuit-ui-kit.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-gratuit-ui-kit">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image right">
              <img src={intro_material} alt="Site Gratuit, Design Material Kit - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-gratuit-material.websitemarket.ro/">Site Gratuit Design Material</a> </h3>
            <b>Material Kit</b> este un design disponibil in galeria site-urilor de prezentare pentru companii mici. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            <b><a href="https://site-gratuit-material.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-gratuit-material">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src={intro_paper} alt="Site Gratuit, Design Paper - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://site-gratuit-paper.websitemarket.ro/">Site Gratuit Design Paper</a> </h3>
            <b>Paper Kit</b> este un design disponibil in galeria <a href="https://ro.wikipedia.org/wiki/Site_web">site</a>-urilor de prezentare pentru companii mici. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            <br />
            <b><a href="https://site-gratuit-paper.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/site-gratuit-paper">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <blockquote>
            <h5>WebsiteMarket</h5>
            Hai pe net! Acum este simplu utilizand un <strong>site gratuit</strong> oferit de WebsiteMarket.
        </blockquote>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
