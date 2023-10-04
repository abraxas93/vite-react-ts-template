import { ReactNode, memo } from 'react';

import addClasses from '../../lib/addClasses';
import cls from './Button.module.scss';

interface ButtonProps {
  className?: string;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  return <></>
})