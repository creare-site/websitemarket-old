import React from 'react';

import Layout from '../../../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
            <a href="https://complex-turistic-david-apuseni.websitemarket.ro/">Complexul Turistic David</a>
        </h1>

        <p>
          <strong>Complexul Turistic David</strong> este alcatuit din mai multe cladiri. 
          Camerele au bai cu dus, hol si terasa proprie. In oficiul comun puteti servi masa sau gati dupa bunul plac. 
          Oficiul este utilat si dotat cu cele necesare. 
          Din foisoare puteti admira apusul soarelui si panorama inconjuratoare.
        </p>
        <span className="image main">
            <img alt="Complexul Turistic David, prezentare in format GIF. Un produs WebsiteMarket."
                 src="https://raw.githubusercontent.com/creare-site/static/master/produse/complex-turistic-david-apuseni-intro.gif"/>
        </span>

        <p>
          <b>Site de prezentare pensiune</b> cu un design simplu si modern:{' '}
          <b><a href="https://complex-turistic-david-apuseni.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/demo-complex-turistic-david-apuseni/">codul sursa</a></b>{', '} 
          <b><a href="https://www.youtube.com/watch?v=Z7qLEFsvpNQ">video</a></b> 
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
