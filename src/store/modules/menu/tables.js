import lazyLoading from './lazyLoading.js'

export default {
  name: 'tables',
  meta: {
    title: 'KYC Tables',
    iconClass: 'vuestic-icon vuestic-icon-tables'
  },
  path: '/tables',
  component: lazyLoading('tables/Table')
}
