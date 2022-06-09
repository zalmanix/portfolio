import * as React from 'react';
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/components/Header.module.scss';

import LinkIcon from './LinkIcon';

export default function Header() {
  const meta = {
    title: 'Maksymilian Skórnóg - Frontend Stack developer',
    description: `Maksymilian Skórnóg - Frontend Stack developer`,
    type: 'website',
  };

  return(
    <nav className={styles.header}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Link href="/">
          <a>
            zalmanix
          </a>
        </Link>
      </div>

      <LinkIcon />
    </nav>
  );
}
