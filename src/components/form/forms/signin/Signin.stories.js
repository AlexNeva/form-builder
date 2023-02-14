import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Signin } from './Signin';

export default {
  title: 'Form/Forms/Signin',
  component: Signin,
};

const Template = (args) => <Signin {...args} />;

export const Default = Template.bind({});

const code = `
import { Form, Field } from 'react-final-form';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { BsInput, BsPasswordInput } from '@/components/form/inputs';
import { SubmitButton } from '@/components/form/buttons';
import { authApi } from '@/src/api/laravel/services/authService';

export const Signin = (props) => {
  const { maxWidth, className } = props;

  const submitHandler = async (values) => {
    try {
      const response = await authApi.signin(values);
      alert(response.message);
    } catch (error) {
      alert(error.message);
    } finally {
    }
  };

  return (
    <Form
      onSubmit={submitHandler}
      initialValues={{}}
      render={({ handleSubmit, submitting }) => (
        <form
          style={{ maxWidth }}
          onSubmit={handleSubmit}
          className={classNames(className, 'mx-auto')}
        >
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
            <Col xs={12}>
              <Field name='Password'>
                {({ input, meta }) => (
                  <BsPasswordInput
                    error={meta.error || meta.submitError}
                    input={input}
                    touched={meta.touched}
                    bsProps={{
                      label: 'Password',
                      placeholder: 'Enter your password',
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
`;

Default.parameters = {
  docs: {
    source: {
      code,
      language: 'jsx',
      type: 'auto',
    },
  },
};
