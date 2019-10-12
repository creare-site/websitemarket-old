import React from 'react';

import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO'

const IndexPage = () => (
  <Layout>

    <SEO title="Pensiunea Barlogul Ursilor - Cazare Apuseni" 
         description="Site de prezentare pensiune turistica Barlogul Ursilor. Produs digital WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
            <a href="https://pensiunea-barlogul-ursilor.websitemarket.ro/">Pensiunea Barlogul Ursilor</a>
        </h1>

        <p>
          <strong>Pensiunea Barlogul Ursilor</strong> este singura locatie din <a href="https://ro.wikipedia.org/wiki/Lep%C8%99a,_Vrancea">Lepsa</a> 
          {' '}de unde se pot admira culmile ce alcatuiesc Capul lui Decebal si o panorama unica a muntilor Vrancei. 
          Vila este destinata iubitorilor de natura, nu are vecinatati si se ajunge de la sosea pe un drum forestier accesibil oricarui mijloc auto.        
        </p>
        <span className="image main">
            <img alt="Pensiunea Barlogul Ursilor, prezentare in format GIF. Un produs WebsiteMarket."
                 src="https://raw.githubusercontent.com/creare-site/static/master/produse/pensiunea-barlogul-ursilor-intro.gif"/>
        </span>

        <p>
          <b>Site de prezentare pensiune</b> cu un design simplu si modern:{' '}
          <b><a href="https://pensiunea-barlogul-ursilor.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/demo-pensiunea-barlogul-ursilor/">codul sursa</a></b>{', '} 
          <b><a href="https://www.youtube.com/watch?v=H0IR6aJdkjQ">video</a></b> 
          <br />
          Articol de blog: <a href="https://medium.com/@websitemarketro/creare-site-prezentare-pensiunea-barlogul-ursilor-websitemarket-492dbe1fabe1">Creare Site Prezentare - Pensiunea Barlogul Ursilor</a> 
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
