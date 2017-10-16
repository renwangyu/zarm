import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { MaskProps as BasePropsType } from './PropsType';

export interface propTypes extends BasePropsType {
  prefixCls?: string;
  className?: string;
}

class Mask extends PureComponent<propTypes, any> {
  static defaultProps = {
    prefixCls: 'za-mask',
    visible: false,
    type: 'normal',
  };

  render() {
    const { prefixCls, className, visible, type, onClose, ...others } = this.props;
    const markCls = classnames({
      [`${prefixCls}`]: true,
      [`${className}`]: !!className,
      [`${type}`]: !!type,
    });

    return visible
      ? <div className={markCls} onClick={onClose} {...others} />
      : null;
  }
}

export default Mask;
