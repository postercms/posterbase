import React from 'react';

interface DefaultLayoutProps extends React.Props<DefaultLayoutProps> {}

export function DefaultLayout(props: DefaultLayoutProps) {
  return <div className="layout default">{props.children}</div>;
}

export default DefaultLayout;
