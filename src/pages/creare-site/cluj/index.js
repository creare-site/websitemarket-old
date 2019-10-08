import React from 'react';

import Layout from '../../../components/Layout';

import intro_restaurant from '../../../assets/images/site-web-cluj-restaurant-intro.gif';
import intro_consultant from '../../../assets/images/site-web-cluj-consultant-intro.gif';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
          Creare <a href="https://ro.wikipedia.org/wiki/Site_web">site</a> <a href="https://ro.wikipedia.org/wiki/Cluj">Cluj</a>
        </h1>

        <p>
          Daca locuiesti in <b>Cluj</b> si desfasori o activitate care are nevoie de un <b><a href="https://ro.wikipedia.org/wiki/Site_web">Site Web</a></b>{' '} 
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
              <img src={intro_restaurant} alt="Site Restaurant Cluj - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/creare-site/cluj/restaurant/">Site Cluj Restaurant</a> </h3>
            Produsul, ca mai toate produsele WebsiteMarket este open-source, adica oricine poate vedea codul sursa.
            <br />
            Acceseaza <b><a href="/creare-site/cluj/restaurant/">pagina produsului</a></b> pentru mai multe informatii.{' '} 

            </p>
        </section>
        </div>

        <hr />

        <div className="row">
        <section>
            <p>
            <span className="image right">
              <img src={intro_consultant} alt="Site Consultant Cluj - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="/creare-site/cluj/consultant/">Site Consultant</a> </h3>
            Produsul, ca mai toate produsele WebsiteMarket este open-source, adica oricine poate vedea codul sursa.
            <br />
            Acceseaza <b><a href="/creare-site/cluj/consultant/">pagina produsului</a></b> pentru mai multe informatii.{' '} 

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
