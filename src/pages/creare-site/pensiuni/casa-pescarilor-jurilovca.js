import React from 'react';

import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO'

const IndexPage = () => (
  <Layout>

    <SEO title="Casa Pescarilor - Cazare Delta Dunarii" 
        description="Site de prezentare pensiune turistica Casa Pescarilor. Produs digital WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
            <a href="https://casa-pescarilor-jurilovca.websitemarket.ro/">Casa Pescarilor Jurilovca</a>
        </h1>

        <p>
          Situata in satul Lunca, pe marginea lacului Golovita, in complexul Razim-Sinoe, <strong>Pensiunea Casa Pescarilor</strong> se bucura de o locatie deosebita, 
          {' '}fiind la doar 9 km de capul Dolosman. Casa Pescarilor va pune la dispozitie 4 camere duble, 2 apartamente (cu 2 camere) si 6 casute, fiecare avand baie proprie, TV, aer conditionat si frigider. 
          Pensiunea are cherhana proprie si ofera zilnic preparate din peste proaspat.
        </p>
        <span className="image main">
            <img alt="Casa Pescarilor Jurilovca, prezentare in format GIF. Un produs WebsiteMarket."
                 src="https://raw.githubusercontent.com/creare-site/static/master/produse/casa-pescarilor-jurilovca-intro.gif"/>
        </span>

        <p>
          <b>Site de prezentare pensiune</b> cu un design simplu si modern:{' '}
          <b><a href="https://casa-pescarilor-jurilovca.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/demo-casa-pescarilor-jurilovca/">codul sursa</a></b>{', '} 
          <b><a href="https://www.youtube.com/watch?v=xkJmALYuBXM">video</a></b> 
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
