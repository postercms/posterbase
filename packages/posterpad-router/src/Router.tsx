import React, { Suspense } from 'react';
import * as Navi from 'navi';
import * as ReactNavi from 'react-navi';

function createRoute(basePath: string = ''): (e: any) => [string, any] {
  return (elem: any) => {
    const path = elem.props.path || '/';
    const getData = elem.props.fetchData;
    // tslint:disable-next-line: variable-name
    const Layout = elem.props.layout;
    const view = Layout ? <Layout>{elem}</Layout> : elem;
    // console.log('dfgfdg');

    return [
      basePath + path,
      Navi.route({
        ...elem.props.path,
        getData,
        view,
      }),
    ];
  };
}

function preRoute(middleware, props, route) {
  return Navi.map(async (req, ctx) => {
    return middleware(props, route, req, ctx);
  });
}

export function Router(props: any) {
  const children = props.children.length ? props.children : [props.children];
  const routes = children.reduce((acc: {}, child: any) => {
    const [path, route] = createRoute(child.props.basePath || props.basePath)(
      child,
    );

    acc[path] =
      typeof props.before === 'function'
        ? preRoute(props.before, child.props, route)
        : route;
    return acc;
  }, {});

  return (
    <ReactNavi.Router routes={Navi.mount(routes)}>
      <Suspense fallback={null}>
        <ReactNavi.View />
      </Suspense>
    </ReactNavi.Router>
  );
}
