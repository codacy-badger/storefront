const routes = [
  {
    path: '/',
    component: () => import('@components/Layout'),
    children: [
      {
        path: 'dashboard',
        component: () => lazyLoadView(import('@components/pages/Dashboard')),
        name: 'Dashboard',
        alias: ''
      }
    ]
  },
  {
    path: '/editor',
    component: () => import('@components/pages/VuseEditor'),
    name: 'VuseEditor',
    alias: ''
  },
  {
    path: '/404',
    name: '404',
    component: lazyLoadView(import('@components/NotFound'))
  }
]

// Lazy-loads view components, but with better UX. A loading view
// will be used if the component takes a while to load, falling
// back to a timeout view in case the page fails to load. You can
// use this component to lazy-load a route with:
//
// component: () => lazyLoadView(import('@views/my-view'))
//
// NOTE: Components loaded with this strategy DO NOT have access
// to in-component guards, such as beforeRouteEnter,
// beforeRouteUpdate, and beforeRouteLeave. You must either use
// route-level guards instead or lazy-load the component directly:
//
// component: () => import('@views/my-view')
//
function lazyLoadView (AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: import('@components/base/_base-loading'),
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: import('@components/base/_base-timeout'),
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 70,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 15000
  })

  return Promise.resolve({
    functional: true,
    render (h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children)
    }
  })
}

export default routes
