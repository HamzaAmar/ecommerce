import { Button } from '@components/core';
import React from 'react';

import styles from './header.module.css';

const header = () => {
  return (
    <header>
      <>
        <p>Hello World</p>
        <Button> En </Button>
      </>
      <>
        <h1>Logo</h1>
        <input type="text" />
      </>
      <nav>
        <ul>
          <li>Rugs</li>
          <li>Boufs</li>
          <li>Clothes</li>
          <li>Hello</li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
