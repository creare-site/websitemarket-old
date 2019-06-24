// @flow
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}

        <br />
        <a href={getContactHref('twitter', author.contacts.twitter)}> Twitter </a>
        <a href={getContactHref('github' , author.contacts.github)}> Github  </a>

      </p>
    </div>
  );
};

export default Author;
