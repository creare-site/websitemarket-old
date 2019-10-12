import React from 'react';

import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO'

const IndexPage = () => (
  <Layout>

    <SEO title="Pensiunea AquaVilla - Cazare Delta Dunarii" 
         description="Site de prezentare Pensiunea AquaVilla. Produs digital WebsiteMarket." />

    <div id="main">
      <div className="inner">

        <h1>
            <a href="https://pensiunea-aquavilla-delta.websitemarket.ro/">Pensiunea AquaVilla Delta</a>
        </h1>

        <p>
          <strong>Pensiunea AquaVilla Delta</strong> este o reinterpretare a vremurilor apuse, in care obisnuiam sa ne scaldam si sa pornim in cautarea fluturilor frumos colorati, care ne indemnau cu zborul lor sa ne traim copilaria in libertatea acelor zone mitice si rapitoare.
          <br />
          O pensiune in Delta Dunarii va promite reintoarcerea in trecutul atat de drag! Impreuna cu fratele meu si toti cei de la Aqua Villa va oferim cea mai calitativa cazare in Delta si cele mai frumoase experiente pe care le-ati putea trai in inima Deltei Dunarii!
        </p>
        <span className="image main">
            <img alt="Pensiunea AquaVilla Delta, prezentare in format GIF. Un produs WebsiteMarket."
                 src="https://raw.githubusercontent.com/creare-site/static/master/produse/pensiunea-aquavilla-delta-intro.gif"/>
        </span>

        <p>
          <b>Site de prezentare pensiune</b> cu un design simplu si modern:{' '}
          <b><a href="https://pensiunea-aquavilla-delta.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/demo-pensiunea-aquavilla-delta/">codul sursa</a></b>{', '} 
          <b><a href="https://www.youtube.com/watch?v=gmuSEHoLmzc">video</a></b> 
          <br />
          Articol de blog: <a href="https://medium.com/@websitemarketro/creare-site-prezentare-pensiunea-aquavilla-delta-websitemarket-877cac19ffdb">Creare Site Prezentare - Pensiunea AquaVilla Delta</a> 
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
