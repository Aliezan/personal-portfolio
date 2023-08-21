import { FC } from 'react';

interface TechStacksLayoutProps {
  children: React.ReactNode;
}

const TechStacksLayout: FC<TechStacksLayoutProps> = ({ children }) => (
  <section className='h-[200px] border border-white'>{children}</section>
);

export default TechStacksLayout;
