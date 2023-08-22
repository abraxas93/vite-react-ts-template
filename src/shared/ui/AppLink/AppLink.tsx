import { ReactNode, memo } from 'react';
import { Link, LinkProps, NavLink } from 'react-router-dom';
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

  const isExternal = to.toString().includes('http');

  if (isExternal) {
    return (
      <Link to={to} className={addClasses(cls.AppLink, {}, [
        className,
        cls[variant],
      ])} {...otherProps}>
        {children}
      </Link>
    )
  }

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