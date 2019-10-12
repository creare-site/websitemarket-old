import React from 'react';

import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO'

const IndexPage = () => (
  <Layout>

    <SEO title="Casa Lepe - Cazare Apuseni" 
        description="Site de prezentare pensiune turistica Casa Lepe. Produs digital WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
            <a href="https://casa-lepe-apuseni.websitemarket.ro/">Casa Lepe Apuseni</a>
        </h1>

        <p>
          <strong>Casa Lepe</strong> este o casa de vacanta situata in centrul localitatii Rosia Montana, cu acces auto si parcare.
        </p>
        <span className="image main">
            <img alt="Casa Lepe Apuseni, prezentare in format GIF. Un produs WebsiteMarket."
                 src="https://raw.githubusercontent.com/creare-site/static/master/produse/casa-lepe-apuseni-intro.gif"/>
        </span>

        <p>
          <b>Site de prezentare pensiune</b> cu un design simplu si modern:{' '}
          <b><a href="https://casa-lepe-apuseni.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/demo-casa-lepe-apuseni/">codul sursa</a></b>{', '} 
          <b><a href="https://www.youtube.com/watch?v=Nh3m1TDcUf4">video</a></b> 
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
