import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import style from './SubmitButton.module.scss';

export const SubmitButton = (props) => {
  const { title, className, disabled, variant } = props;
  return (
    <Button variant={variant} disabled={disabled} className={classNames(style.btn, className)} type={'submit'}>
      {title}
    </Button>
  );
};
