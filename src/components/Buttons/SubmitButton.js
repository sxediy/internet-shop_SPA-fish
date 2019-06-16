import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import classNames from 'classnames';
import styles from './SubmitButton.less';


const SubmitButton = ({ clickFunc, disabled }) => (
  <Button
    type="submit"
    block
    onClick={clickFunc}
  >
    <span
      className={classNames([styles.titleSubmitButton], { [styles.disabledButton]: disabled })}>
        Подтвердить заказ
    </span>
  </Button>
);

SubmitButton.propTypes = {
  clickFunc: PropTypes.func,
  disabled: PropTypes.bool,
};


export { SubmitButton };
