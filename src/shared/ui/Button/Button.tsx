import { ReactNode, memo } from 'react';

import addClasses from '../../lib/addClasses';
import cls from './Button.module.scss';

interface ButtonProps {
  className?: string;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children } = props;
  return <button className={addClasses(cls.Primary, {}, [className])}> {children}</ button>
})