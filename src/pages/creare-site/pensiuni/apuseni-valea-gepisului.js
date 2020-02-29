import React from 'react';

import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO'
const IndexPage = () => (
  <Layout>

    <SEO title="Pensiunea Valea Gepisului - Cazare Apuseni" 
        description="Site de prezentare pensiune turistica Valea Gepisului. Produs digital WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
            <a href="https://pensiune-apuseni-valea-gepisului.websitemarket.ro/">Pensiunea Valea Gepisului</a>
        </h1>

        <p>
          Suntem <strong>Pensiunea Valea Gepișului</strong> și ne propunem să fim pentru tine acea oază de liniște, pace, armonie și frumos și acel refugiu, departe de agitația urbană de care suntem convinși că și tu, și cei apropiați sufletului tău, aveți nevoie din când în când.
          <br />
          Aici, în inima Bihorului, într-un decor pur și simplu feeric, ți-am pregătit un loc al tău precum o casă departe de casă în care să fii tratat mai mult decât un oaspete, bucurându-te atât de facilitățile pe care ți le oferim dar și de frumusețea naturii.
        </p>

        <span className="image main">
            <img alt="Pensiunea Valea Gepisului, prezentare in format GIF. Un produs WebsiteMarket."
                 src="https://raw.githubusercontent.com/creare-site/static/master/produse/pensiune-apuseni-valea-gepisului-intro.gif"/>
        </span>

        <p>
          <b>Site de prezentare pensiune</b> cu un design simplu si modern:{' '}
          <b><a href="https://pensiune-apuseni-valea-gepisului.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/demo-pensiune-apuseni-valea-gepisului/">codul sursa</a></b>{', '} 
          <b><a href="https://www.youtube.com/watch?v=Dfd9bduIClM">video</a></b> 
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
