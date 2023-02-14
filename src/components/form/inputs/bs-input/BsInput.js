import React from 'react';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';
import styles from './BsInput.module.scss';

export const BsInput = (props) => {
  const { error, touched, className, input, bsProps } = props;

  let isError = error && touched && true;

  return (
    <Form.Group className={classNames(className, styles.input)}>
      <Form.Label className={styles.label}>{bsProps?.label}</Form.Label>
      <Form.Control {...input} isInvalid={isError} {...bsProps} />
      {isError && <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>}
    </Form.Group>
  );
};
