/* eslint-disable react/button-has-type */
import React from 'react';

import styles from './button.module.css';
import type { ButtonProps } from './button.type';

const button = (props: ButtonProps) => {
  const { type = 'button', ...rest } = props;

  return (
    <button type={type} {...rest}>
      button
    </button>
  );
};

export default button;
