import React, { Suspense } from 'react';
import { mount, route } from 'navi';
import { Router as NaviRouter, View } from 'react-navi';

function createRoute(basepath: string = ''): (e: any) => [string, any] {
  return (elem: any) => {
    const path = elem.props.path;
    const getData = elem.props.fetchData;
    const Layout = elem.props.layout;
    const view = Layout ? <Layout>{elem}</Layout> : elem;
    return [
      basepath + path,
      route({
        ...elem.props.path,
        getData,
        view,
      }),
    ];
  };
}

export function Router(props: any) {
  const routes = props.children.reduce((acc: {}, child: any) => {
    const [path, route_] = createRoute(props.basepath)(child);
    acc[path] = route_;
    return acc;
  }, {});

  return (
    <NaviRouter routes={mount(routes)}>
      <Suspense fallback={null}>
        <View />
      </Suspense>
    </NaviRouter>
  );
}
