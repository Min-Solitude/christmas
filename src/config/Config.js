export default class Config {
  static dev = false;
  static apiHost = this.dev ? 'http://localhost' : 'https://api.christmas.lavenes.com';
  static socketHost = this.dev ? 'http://localhost' : 'https://api.christmas.lavenes.com';
}