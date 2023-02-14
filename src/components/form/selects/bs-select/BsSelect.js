import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';
import styles from './BsSelect.module.scss';

export const BsSelect = (props) => {
    const { className, items, input, error, touched, cb, bsProps } = props;

    let isError = error && touched && true;
    const errorClass = isError ? 'is-invalid' : '';

    const onChangeHandler = (evt) => {
        const value = evt.target.value;

        if (input.onChange) {
            input.onChange(value);
        }

        if (cb) {
            cb(value);
        }
    };

    return (
        <Form.Group
            className={classNames(className, styles.input, styles.select)}
        >
            <Form.Label className={styles.Label}>{bsProps?.label}</Form.Label>
            <Form.Select
                {...input}
                aria-label={bsProps?.placeholder}
                className={classNames('form-control', errorClass)}
                onChange={onChangeHandler}
                value={input?.value}
                isInvalid={isError}
            >
                <option>{bsProps?.placeholder}</option>
                {items?.map(({ id, name }) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </Form.Select>
            {isError && (
                <Form.Control.Feedback type='invalid'>
                    {error}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    );
};

BsSelect.propTypes = {
    error: PropTypes.string,
    touched: PropTypes.bool,
    className: PropTypes.string,
    input: PropTypes.object,
    bsProps: PropTypes.object,
    items: PropTypes.arrayOf(PropTypes.object),
};

BsSelect.defaultProps = {
    error: '',
    touched: false,
    className: '',
    input: {},
    bsProps: {},
    items: [],
};
