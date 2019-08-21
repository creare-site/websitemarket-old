import React from 'react';

import Layout from '../../components/Layout';

import intro_reflex from '../../assets/images/creare-site-reflex-intro.gif';
import intro_lens   from '../../assets/images/creare-site-lens-intro.gif';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">

        <h1>
          Creare <a href="https://ro.wikipedia.org/wiki/Site_web">site</a> 
        </h1>

        <p>
          Daca ai deja o afacere sau intentionezi sa iti deschizi una in viitorul apropiat si ai nevoie de un Site web, 
          acest articol te poate ajuta sa te informezi in legatura cu designul viitorului tau website. 
        </p>

        <hr />

        <h2> Exemple de <a href="https://ro.wikipedia.org/wiki/Site_web">site</a></h2>

        <div className="row">
        <section>
            <p>
            <span className="image left">
              <img src={intro_lens} alt="Creare Site, Lens design - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://creare-site-lens.websitemarket.ro/">Creare Site Lens</a> </h3>
            <b>Lens</b> este ultimul design disponibil in galeria <a href="https://ro.wikipedia.org/wiki/Site_web">site</a>-urilor de prezentare. 
            Design-ul este unul minimalist, cu un look perfect pe orice dispozitiv. 
            Produsul, ca mai toate produsele WebsiteMarket este open-source, adica oricine poate vedea codul sursa.
            <br />
            <b><a href="https://creare-site-lens.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/creare-site-lens">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <br />

        <div className="row">
        <section>
            <p>
            <span className="image right">
              <img src={intro_reflex} alt="Creare Site, Reflex design - Un produs Websitemarket" />
            </span>
            
            <h3> <a href="https://creare-site-reflex.websitemarket.ro/">Creare Site Reflex</a> </h3>
            <b>Reflex</b> este un design simplu si cu un layout impecabil pe orice dispozitiv. 
            Utilizand acest design, iti putem crea un <a href="https://ro.wikipedia.org/wiki/Site_web">site web</a> care te poate ajuta sa devii vizbil in mediul online in doar cateva ore.
            <br />
            <b><a href="https://creare-site-lens.websitemarket.ro/">Live demo</a></b>{' '} 
            - <b><a href="https://github.com/creare-site/creare-site-lens">codul sursa</a></b> (pentru dezvoltatori).  

            </p>
        </section>
        </div>

        <hr />

        <h2>Creare <a href="https://ro.wikipedia.org/wiki/Site_web">site</a> - Recomandarile noastre</h2>

        <p>
          Creare unui site, chiar daca pare o treaba aparent usoara, de cele mai multe ori se dovedeste o activitatea care necesita seriozitate 
          si resurse de timp si munca din partea tuturor celor implicati. O agentie nu poate livra un site util afacerii tale fara ca tu, 
          in calitate de client sa furnizezi informatiile care stau la baza viitorului site. 
          Formatul, structura si informatiile trebuiesc stabilite de ambele parti printr-un proces iterativ. 
          <br />
          Atunci cand ne cream sau comandam un site pentru afacerea noastra, este indicat sa luam in calcul urmatoarele aspecte:
          <br />
          <br />
          <ul>
            <li>Alege atent si fara graba numele domenului</li>
            <li>Alege un partener de incredere pentru viitorul site care iti poate asigura consultanta de care ai nevoie</li>
            <li>Site-ul final sa fie util audientei</li>
            <li>Structura sa fie simpla si coerenta</li>
            <li>Daca este posbil, aloca un mic buget pentru actualizarea site-ului la un interval regulat, 6luni ar fi ideal</li>
            <li>Comunica cu viitorii clienti prin articole de blog, preferabil utile.</li>
          </ul>       
        </p>

        <hr />

        <blockquote>
            <h5>WebsiteMarket</h5>
            Hai pe net! Acum este simplu.
        </blockquote>

      </div>

    </div>
  </Layout>
);

export default IndexPage;
