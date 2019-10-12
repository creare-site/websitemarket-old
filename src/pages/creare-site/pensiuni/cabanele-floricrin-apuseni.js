import React from 'react';

import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO'

const IndexPage = () => (
  <Layout>

    <SEO title="Cabanele Flori & Crin - Cazare Apuseni" 
        description="Site de prezentare pensiune turistica Cabanele Flori & Crin. Produs digital WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
            <a href="https://cabanele-floricrin-apuseni.websitemarket.ro/">Cabanele Flori & Crin</a>
        </h1>

        <p>
          <strong>Cabanele Flori & Crin</strong> sunt situate in Comuna Marisel, in apropiere de Crucea Iancului si lacul Fantanele. 
          Cabanele sunt construite din lemn natural atat interior cat si exterior si dispun fiecare de: living, bucatarie, 2 dormitoare si 2 bai.
        </p>
        <span className="image main">
            <img alt="Cabanele Flori & Crin, prezentare in format GIF. Un produs WebsiteMarket."
                 src="https://raw.githubusercontent.com/creare-site/static/master/produse/cabanele-floricrin-apuseni-intro.gif"/>
        </span>

        <p>
          <b>Site de prezentare pensiune</b> cu un design simplu si modern:{' '}
          <b><a href="https://cabanele-floricrin-apuseni.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/demo-cabanele-floricrin-apuseni/">codul sursa</a></b>{', '} 
          <b><a href="https://www.youtube.com/watch?v=fyzHHhKh7PE">video</a></b> 
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
