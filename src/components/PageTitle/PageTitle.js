import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageTitle.less';

const PageTitle = ({ title }) => (
  <h1 className={styles.title}>{title}</h1>
);

PageTitle.propTypes = {
  title: PropTypes.string,
};

export { PageTitle };
