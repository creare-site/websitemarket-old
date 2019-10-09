import React from 'react';

import Layout from '../../../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
            <a href="https://pensiune-roua-muntelui-apuseni.websitemarket.ro/">Pensiunea Roua Muntelui</a>
        </h1>

        <p>
          <strong>Pensiunea Roua Muntelui</strong> se afla in zona centrala a orasului Baia de Aries. 
          Pensiunea este construita in stil rustic cu mici influente moderne, ce se integreaza foarte bine in specificul zonei, iar conditiile de masa si cazare si relaxare sunt la standarde ridicate.
        </p>
        <span className="image main">
            <img alt="Pensiunea Roua Muntelui, prezentare in format GIF. Un produs WebsiteMarket."
                 src="https://raw.githubusercontent.com/creare-site/static/master/produse/pensiune-roua-muntelui-apuseni-intro.gif"/>
        </span>

        <p>
          <b>Site de prezentare pensiune</b> cu un design simplu si modern:{' '}
          <b><a href="https://pensiune-roua-muntelui-apuseni.websitemarket.ro/">demo</a></b>{', '} 
          <b><a href="https://github.com/creare-site/demo-pensiune-roua-muntelui-apuseni/">codul sursa</a></b>{', '} 
          <b><a href="https://www.youtube.com/watch?v=V7hixMwcl6M">video</a></b> 
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
