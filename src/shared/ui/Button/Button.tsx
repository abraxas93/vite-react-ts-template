import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

import addClasses from '../../lib/addClasses';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, ...otherProps } = props;
  return <button className={addClasses(cls.Primary, {}, [className])} {...otherProps}> {children}</ button>
})