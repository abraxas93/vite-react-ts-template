import { memo } from 'react';
import cls from './Text.module.scss'
import addClasses from '../../lib/addClasses';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string | JSX.Element;
  bold?: boolean;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
}
type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

const mapSizeToClass: Record<TextSize, string> = {
  s: cls.size_s,
  m: cls.size_m,
  l: cls.size_l,
};


export const Text = memo((props: TextProps) => {
  const { className, variant = "primary", align = "left", size = "m", title, text, bold } = props;

  const HeaderTag = mapSizeToHeaderTag[size];
  const sizeClass = mapSizeToClass[size];
  const cardClasses = [className, cls[variant], cls[align], sizeClass];
  return (
    <div className={addClasses(cls.Text, { [cls.bold]: bold }, cardClasses)}>
      {title && (
        <HeaderTag>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p>{text}</p>
      )}
    </div>
  )
})