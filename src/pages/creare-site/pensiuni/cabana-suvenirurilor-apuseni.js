import React from 'react';

import Layout from '../../../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
            <a href="https://cabana-suvenirurilor-apuseni.websitemarket.ro/">Cabana Suvenirurilor</a>
        </h1>

        <p>
           <strong>Cabana Suvenirurilor</strong> este o constructie noua, cu 5 camere (grup sanitar propriu), bucatarie, magazin de suveniruri, curte, gratar, filigorie. 
           Este situata la doar 250 m de Pestera Ghetarul Scarisoara la varf de munte.
        </p>
        <span className="image main">
            <img alt="Cabana Suvenirurilor, prezentare in format GIF. Un produs WebsiteMarket."
                 src="https://raw.githubusercontent.com/creare-site/static/master/produse/cabana-suvenirurilor-apuseni-intro.gif"/>
        </span>

        <p>
          <b>Site de prezentare pensiune</b> cu un design simplu si modern:{' '}
          <b><a href="https://cabana-suvenirurilor-apuseni.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/demo-cabana-suvenirurilor-apuseni/">codul sursa</a></b>{', '} 
          <b><a href="https://www.youtube.com/watch?v=T_7q1Yc5e5E">video</a></b> 
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
