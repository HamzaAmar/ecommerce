import React from 'react';

import styles from './input.module.css';
import type { InputProps } from './input.type';

const input = (props: InputProps) => {
  const { type = 'text', ...rest } = props;

  return <input type={type} {...rest} />;
};

export default input;
