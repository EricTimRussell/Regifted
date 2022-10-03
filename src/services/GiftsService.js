import { AppState } from "../AppState"
import { Gift } from "../models/Gift"
import { giftServer } from "./AxiosService"

class GiftsService {

  async getGifts() {
    const res = await giftServer.get()
    console.log(res.data)
    AppState.gifts = res.data.map(g => new Gift(g))
  }

  async openGift(id) {
    const gift = AppState.gifts.find(g => g.id == id)
    gift.opened = !gift.opened
    const res = await giftServer.put(`${id}`, { opened: true })
    gift.url = res.data.url
  }

  async addGift(editable) {
    const res = await giftServer.post('', editable)
    console.log(res.data);
    let gift = new Gift(res.data)
    AppState.gifts = [gift, ...AppState.gifts]
  }

}
export const giftsService = new GiftsService()