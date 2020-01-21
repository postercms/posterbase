import React from 'react';

interface DefaultLayoutProps extends React.Props<DefaultLayoutProps> {}

export function DefaultLayout(props: DefaultLayoutProps) {
  return <div className="flex flex-wrap">{props.children}</div>;
}
