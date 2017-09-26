export default class Store {
  constructor () {
    this.data = {}
  }
  setItem (key, value) {
    this.data[key] = value
  }
  getItem (key) {
    return this.data[key]
  }
}
