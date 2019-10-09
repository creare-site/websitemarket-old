import React from 'react';

import Layout from '../../../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
            <a href="https://pensiunea-river-resort-apuseni.websitemarket.ro/">River Resort Baisoara</a>
        </h1>

        <p>
          <strong>River Resort Baisoara</strong> pune la dispoziţia vizitatorilor un număr total de 32 locuri cazare şi o curte in suprafaţă de peste 5.000mp, 
          cu multiple funcţiuni (piscină încălzită şi iluminată, spaţiu joacă pentru copii, terase la apă, locuri barbeque/foişoare, access la pădure).
        </p>
        <span className="image main">
            <img alt="Vila Giulia Apuseni, prezentare in format GIF. Un produs WebsiteMarket."
                 src="https://raw.githubusercontent.com/creare-site/static/master/produse/pensiunea-river-resort-apuseni-intro.gif"/>
        </span>

        <p>
          <b>Site de prezentare pensiune</b> cu un design simplu si modern:{' '}
          <b><a href="https://pensiunea-river-resort-apuseni.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/demo-pensiunea-river-resort-apuseni/">codul sursa</a></b>{', '} 
          <b><a href="https://www.youtube.com/watch?v=IMfhuAJp_1w">video</a></b> 
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
