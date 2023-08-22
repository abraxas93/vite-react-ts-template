import { ImgHTMLAttributes, memo } from "react";

interface AppImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const AppImg = memo((props: AppImgProps) => {
  const { className, src, alt, ...otherProps } = props;
  return <img className={className} src={src} alt={alt} {...otherProps} />;
})