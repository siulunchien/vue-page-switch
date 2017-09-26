import Store from './Store'

const pageKeyStore = new Store()

export const getPageKey = () => {
  return window.history.state ? window.history.state.key : window.location.href
}

export const getLastPageKey = (suffix = '') => {
  return pageKeyStore.getItem(`${window.location.href}${suffix}`)
}

export const routesHistory = {
  methods: {
    isBackPage (suffix = '') {
      return getPageKey() === getLastPageKey(suffix)
    },
    resetPageKey (suffix = '') {
      pageKeyStore.setItem(`${window.location.href}${suffix}`, getPageKey())
    }
  }
}
