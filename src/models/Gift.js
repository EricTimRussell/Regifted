export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.url = data.url || 'https://thiscatdoesnotexist.com'
    this.opened = data.opened || false

  }
}