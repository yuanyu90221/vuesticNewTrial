import lazyLoading from './lazyLoading'

export default {
  name: 'SetupProfile',
  path: '/dashboard/setup-profile-tab',
  component: lazyLoading('dashboard/setup-profile-tab/SetupProfileTab'),
  meta: {
    default: true,
    title: 'SetupProfile',
    iconClass: 'vuestic-icon vuestic-icon-auth'
  }
}
