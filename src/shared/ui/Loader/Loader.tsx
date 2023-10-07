import addClasses from '../../lib/addClasses';

interface LoaderProps {
  className?: string;
}
export const Loader = ({ className }: LoaderProps) => (
  <div className={addClasses('lds-ellipsis', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
