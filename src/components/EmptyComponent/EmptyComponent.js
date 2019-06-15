import React from 'react';
import { Empty } from 'antd';
import styles from './EmptyComponent.less';


const EmptyComponent = () => (
  <div className={styles.emptyContainer}>
    <Empty
      image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
      description={
        <span>
        Нет картинок
        </span>
      } />
  </div>
);

export { EmptyComponent };
