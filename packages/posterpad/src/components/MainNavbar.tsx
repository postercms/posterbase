import * as React from 'react';
import { Alignment, Button, Classes, Navbar } from '@blueprintjs/core';

export interface MainNavbarProps extends React.Props<MainNavbarProps> {
  title: string;
}
export function MainNavbar(props: MainNavbarProps) {
  return (
    <Navbar className={Classes.DARK} fixedToTop>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>{props.title}</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="home" text="Home" />
        <Button className="bp3-minimal" icon="document" text="Files" />
      </Navbar.Group>
    </Navbar>
  );
}
