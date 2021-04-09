export class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
  }

  loadRoute(...urlSegs) {
    const matchedRoute = this._matchUrlToRoute(urlSegs);

    const url = `/${urlSegs.join("/")}`;
    history.pushState({}, "this works", url);

    const routerOutElm = document.querySelectorAll("[data-router]")[0];
    routerOutElm.innerHTML = matchedRoute.template;
  }

  _matchUrlToRoute(urlSegs) {
    const matchedRoute = this.routes.find((route) => {
      const routePathSegs = route.path.split("/").slice(1);
      if (routePathSegs.length !== urlSegs.length) {
        return false;
      }

      return routePathSegs.every(
        (routePathSeg, i) => routePathSeg === urlSegs[i]
      );
    });

    return matchedRoute;
  }

  _loadInitialRoute() {
    const pathName = window.location.pathname.split("/");
    const pathSegs = pathName.length > 1 ? pathName.slice(1) : "";

    this.loadRoute(...pathSegs);
  }
}
