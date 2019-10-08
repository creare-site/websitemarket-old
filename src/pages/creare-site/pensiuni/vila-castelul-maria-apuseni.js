import React from 'react';

import Layout from '../../../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
            <a href="https://vila-castelul-maria-apuseni.websitemarket.ro">Vila Castelul Maria</a>
        </h1>

        <p>

            Te așteptăm cu drag să pășești pe meleagurile noastre. Fie că vrei să faci un popas pentru câteva zile, să-ți odihnești mintea și sufletul, fie că vrei să te oprești la o masă caldă, noi am pregătit pernele, iar bucătăresele au nevoie doar de câteva cuvinte ca să se pună pe treabă.          <br />
            Dacă ești un iubitor de liniște și ți-e dor de un loc unde timpul stă și respiră, ai ajuns unde trebuie!
        </p>
        <span className="image main">
            <img alt="Vila Castelul Maria, prezentare in format GIF. Un produs WebsiteMarket."
                 src="https://raw.githubusercontent.com/creare-site/static/master/produse/vila-castelul-maria-apuseni-intro.gif"/>
        </span>

        <p>
          <b>Site de prezentare pensiune</b> cu un design simplu si modern:{' '}
          <b><a href="https://vila-castelul-maria-apuseni.websitemarket.ro">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/demo-vila-castelul-maria-apuseni/">codul sursa</a></b>{', '} 
          <b><a href="https://www.youtube.com/watch?v=mfHXPFXF_lY">video</a></b> 
        </p>

        <hr />

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
