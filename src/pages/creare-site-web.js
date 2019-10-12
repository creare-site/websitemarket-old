import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO'

import intro_reflex from '../assets/images/creare-site-reflex-intro.gif';
import intro_lens   from '../assets/images/creare-site-lens-intro.gif';

const IndexPage = () => (
  <Layout>

    <SEO title="Creare Site Web - Ce variante avem" 
         description="Ce variante avem cand avem nevoie de un site care sa ne ajute in afaceri." />

        <div id="main">
            
            <div className="inner">

                <h1>
                    Creare <a href="https://ro.wikipedia.org/wiki/Site_web">Site Web</a>
                </h1>

                <p>
                    Proiectul <b>WebsiteMarket</b> a luat nastere din dorinta de a ajuta antreprenorii aflati la inceput 
                    de drum sa se promoveze in mediul online.
                    Pentru a putea atinge acest scop, utilizam tehnologii moderne care ne permit o livrare rapida produselor, 
                    care sunt in ce mai mare parte, website-uri simple de prezentare cu un design distint si minimalist. 
                    <br />
                    Pe langa website-uri, <b>oferim clientilor si servicii de hosting si consultanta</b> in alegerea produselor 
                    care se apropie cel mai mult de nevoile lor.   
                    <br /> 
                    Revenind la subiectul acestei pagini, prezentam mai jos cateva optiuni actuale de creare a unui site web prin diferite metode: 
                    editare vizuala, utlizand un software dedicat (Wordpress, Drupal) sau apeland la o agentie.
                </p>

                <hr />

                <h2>Creare <a href="https://ro.wikipedia.org/wiki/Site_web">Site Web</a> - Editare Vizuala</h2>

                <p>
                Cel mai rapid mod de creare a uni site web este utilizarea unei platforme care permite editare si publicarea automata 
                a unui site. cateva platforme care permit acest lucru: <a href="https://www.wix.com/">Wix</a>, 
                <a href="https://www.sitebuilder.com">SiteBuilder</a>. Cu aceste platforme, fara cunostnte de programare, oricine isi poate 
                crea un website intr-un timp scurt. Dupa crearea unui cont, iti poti alege un model de site din cele predefinite si dupa cateva 
                ajustari si editari de texte si poze o sa ai un site. 
                Partea buna cu aceste platforme este ca ofera si planuri gratuite de creare a unui website, singurele dezavantaje fiind plasarea de reclame.
                Pe langa site-uri de prezentare, acest plaforme ofera si posibilitatea de creare de site-uri eCommerce sau blog. 
                </p>

                <hr />

                <h2>Creare <a href="https://ro.wikipedia.org/wiki/Site_web">Site Web</a> - Utilizand software dedicat</h2>

                <p>
                Daca editarea vizuala a unui site, nu este o optiunie, platforme gen Wordpress, Drupal va pot ajuta sa aveti un website 
                intr-un timp relativ scurt. Aceasta metoda de creare a unui website necesita insa niste costuri si ceva cunostinte de programare.
                <br />
                <b>Wordpress</b>, de exemplu este o alegere foarte buna, fiind o paltforma pesta care sunt construite cam 30% din site-urile active in acest moment (2019).
                Sa creezi un site cu Wordpress, este destul de simplu. Majoritatea companiilor de hosting ofera instalare `one-click` a Wordpress-ului.
                Dupa instalare, va puteti instala o tema gratuita si continut pentru editarea paginilor si a articolelor de blog.     
                </p>    

                <p>
                <b>Drupal</b>, este o plaforma similara Wordpress, care ofera functionalitati similare cum ar fi: creare site si editare vizuala a paginilor si 
                articolelor de blog. Ca si in cazul Wordpress, se pot instala module de securitate, anti-spam, pentru galerii de imagini si alte module 
                utile fiecarui tip de site in parte. 
                </p>    

                <hr />

                <h2>Creare <a href="https://ro.wikipedia.org/wiki/Site_web">Site Web</a> - Apeland la o Agentie WEB</h2>

                <p>
                Aceasta varianta de creare a unui website este indicata daca detineti un buget mai generos. 
                Pretul unui website, porneste de la 100Euro (ca in cazul ofertei WebsiteMarket) si urca pana la mii de Euro, 
                daca este vorba de un portal de eCommerce care va permite sa vindeti produse si sa aveti un software dedicat nevoilor dvs.
                <br />
                In schimbul investitiei, agentia de web va va oferi consultanta si un produs de calitate superioara variantelor de mai sus. 
                Site-ul va fi updatat periodic de catre un programator, update insemnand poze, texte, articole de blog si alte informatii 
                relevante pentru audienta afacerii dvs. 
                </p>    

                <hr />

                <h2>Creare <a href="https://ro.wikipedia.org/wiki/Site_web">Site Web</a> - Oferta Websitemarket</h2>

                <p>
                <b>WebsiteMarket</b> intra pe piata de web design din Romania cu o abordare diferita. 
                In primul rand noi oferim posibilitatea crearii unui website plecand de la un model predefinit, 
                construit si pregatit deja pentru nisa afacerii dvs. Design-ul website-urilor este de cele mai multe ori unul minimalist, 
                orientat catre promovarea brandului si a informatiilor esentiale ale afacerii tale.   
                <br />
                Mai jos gasiti cateva modele de website-uri create pentru a ajuta antreprenorii din Romania sa devina vizibili in mediul online.
                </p>

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

                <blockquote>
                    <h5>WebsiteMarket</h5>
                    Hai pe net! Acum este simplu.
                </blockquote>
            </div>

        </div>

  </Layout>
);

export default IndexPage;
