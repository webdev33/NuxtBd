import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _6cac2aec = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */))
const _9b6681b2 = () => interopDefault(import('..\\pages\\administrator\\articles.vue' /* webpackChunkName: "pages_administrator_articles" */))
const _5ebfa450 = () => interopDefault(import('..\\pages\\administrator\\gallery.vue' /* webpackChunkName: "pages_administrator_gallery" */))
const _9853b0e0 = () => interopDefault(import('..\\pages\\content\\article.vue' /* webpackChunkName: "pages_content_article" */))
const _02f543ec = () => interopDefault(import('..\\pages\\content\\gallery.vue' /* webpackChunkName: "pages_content_gallery" */))
const _3b3cd6ef = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _6cac2aec,
      name: "admin"
    }, {
      path: "/administrator/articles",
      component: _9b6681b2,
      name: "administrator-articles"
    }, {
      path: "/administrator/gallery",
      component: _5ebfa450,
      name: "administrator-gallery"
    }, {
      path: "/content/article",
      component: _9853b0e0,
      name: "content-article"
    }, {
      path: "/content/gallery",
      component: _02f543ec,
      name: "content-gallery"
    }, {
      path: "/",
      component: _3b3cd6ef,
      name: "index"
    }],

    fallback: false
  })
}
