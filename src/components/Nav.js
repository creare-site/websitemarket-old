import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onClose = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul>
          <li><a href="/site-medical">Site Medical</a></li>
          <li><a href="/site-fitness">Site Fitness</a></li>
          <li><a href="/site-restaurant">Site Restaurant</a></li>
          <li><a href="/site-gratuit">Site Gratuit</a></li>
          <li><a href="/creare-site-bucuresti">Site Bucuresti</a></li>
          <li><a href="https://blog.websitemarket.ro">Blog</a></li>
        </ul>
      </div>
      <a
        className="close"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
        href="#menu"
      >
        Close
      </a>
    </nav>
  );
}
