import React, { PropTypes } from 'react';
import classnames from 'classnames';
// eslint-disable-next-line max-len, import/no-unresolved
import '../env-defined-then-loader?-EXCLUDE_SASS!@console/bluemix-components/consumables/scss/base-elements/lists/lists.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  nested: PropTypes.bool,
};

const defaultProps = {
  nested: false,
};

const OrderedList = ({ children, className, nested, ...other }) => {
  const classNames = classnames(
    'bx--list--ordered',
    className,
    {
      'bx--list--nested': nested,
    });
  return <ol className={classNames} {...other}>{children}</ol>;
};

OrderedList.propTypes = propTypes;
OrderedList.defaultProps = defaultProps;

export default OrderedList;