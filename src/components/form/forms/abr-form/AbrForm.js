import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form, Field } from 'react-final-form';
import { BsInput } from '../../inputs';
import { SubmitButton } from '../../buttons';

export const AbrForm = () => {
  const submitHandler = () => {};

  return (
    <Form
      onSubmit={submitHandler}
      initialValues={{}}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Row className='g-5'>
            <Col xs={12}>
              <Field name='Email'>
                {({ input, meta }) => (
                  <BsInput
                    error={meta.error || meta.submitError}
                    input={input}
                    touched={meta.touched}
                    bsProps={{
                      label: 'Email',
                      placeholder: 'Enter your email',
                    }}
                  />
                )}
              </Field>
            </Col>
            <Col className='d-flex justify-content-center' xs={12}>
              <SubmitButton title='Submit' disabled={submitting} />
            </Col>
          </Row>
        </form>
      )}
    />
  );
};
