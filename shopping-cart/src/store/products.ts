import { defineStore } from "pinia";
import shop from '../api/shop.js'

export const useProductsStore = defineStore('main', {
  state: () => {
    return {
      all: []
    }
  },

  actions: {
    getAllProducts () {
      shop
    }
  }
})
