import { atom } from 'recoil'

export const numberOfItemsInCart = atom({
  key: 'numberOfItemsInCart',
  default: 0,
})