import { ReactNode, memo } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import addClasses from '../../lib/addClasses';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'visited';

type AppLinkProps = {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
} & LinkProps

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    variant = 'primary',
    activeClassName = '',
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        addClasses(cls.AppLink, { [activeClassName]: isActive }, [
          className,
          cls[variant],
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
})