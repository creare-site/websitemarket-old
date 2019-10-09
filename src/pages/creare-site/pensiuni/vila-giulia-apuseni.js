import React from 'react';

import Layout from '../../../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
            <a href="https://vila-giulia-apuseni.websitemarket.ro/">Vila Giulia Apuseni</a>
        </h1>

        <p>
          <strong>Vila Giulia</strong> este un loc in care va veti simti cu siguranta ca si acasa! 
          Vila este situata la 5 km de partiile de la Vartop si la 3 km de centrul orasului Arieseni. 
          Pensiunea se afla intr-un loc pitoresc, iar aerul proaspat si murmurul cristalin al raului din fata vilei completeaza peisajul montan!
        </p>
        <span className="image main">
            <img alt="Vila Giulia Apuseni, prezentare in format GIF. Un produs WebsiteMarket."
                 src="https://raw.githubusercontent.com/creare-site/static/master/produse/vila-giulia-apuseni-intro.gif"/>
        </span>

        <p>
          <b>Site de prezentare pensiune</b> cu un design simplu si modern:{' '}
          <b><a href="https://vila-giulia-apuseni.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/demo-vila-giulia-apuseni/">codul sursa</a></b>{', '} 
          <b><a href="https://www.youtube.com/watch?v=W37g2wG7hTw">video</a></b> 
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
