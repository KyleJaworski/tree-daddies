
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/tree-daddies/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/tree-daddies"
  }
],
  assets: {
    'index.csr.html': {size: 15667, hash: 'b95e02cc53f252c5ff594aa752e5421fcfcf5c79f1cb91588751263ea9dd83c7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8185, hash: '96c19fc5df5f448176fed74c5171b63a7e439572d023579f4d19fba345181f10', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 80100, hash: '08f60cced705cf4931df30320b130e83851bfc5307dbe4684be65e7a65cd12c0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-M4RN5CXF.css': {size: 8137, hash: 'r4gw6/iY8dA', text: () => import('./assets-chunks/styles-M4RN5CXF_css.mjs').then(m => m.default)}
  },
};
