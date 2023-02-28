import React from 'react';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';
import styles from './BsRadio.module.scss';

export const BsRadio = (props) => {
  const { error, touched, className, input, bsProps } = props;

  let isError = error && touched && true;

  return (
    <Form.Group className={classNames(className, styles.radio)}>
      <Form.Label className={styles.label}>{bsProps?.label}</Form.Label>
      <Form.Check {...input} {...bsProps} />
    </Form.Group>
  );
};
