import { PropsWithChildren } from 'react';

const DemoLayout = (props: PropsWithChildren) => {
  return <>{props.children}</>;
};

export default DemoLayout;
