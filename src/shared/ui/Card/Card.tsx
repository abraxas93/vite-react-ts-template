import { ReactNode, memo } from 'react';

import cls from './Card.module.scss';
import addClasses from '../../lib/addClasses';

interface CardProps {
  children?: ReactNode;
  className?: string;
}

export const Card = memo((props: CardProps) => {
  const { children, className } = props;
  return <div className={addClasses(cls.Card, {}, [className,])}>{children}</div>
});