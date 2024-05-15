import { defineStore } from 'pinia'
import { useAxios } from '@/utils/axios-helper'
import { deepClone } from '@/utils/object'
import { Toast } from '@/utils/toast'
import { Student } from '@/types/student'
import { School } from '@/types/school'

const { request, response } = useAxios()

export const useAuthStore = defineStore('auth', {    
  state: () => ({
    authenticated: false,
    user: {}
  }),

  actions: {
    async login(guard: string, data: []) {
      await request({
        method: 'POST',
        url: `api/${guard}/auth/login`,
        data: data
      })

      if (response.value && response.value.data) {
        this.authenticated = true
        this.user = deepClone(response.value.data)
        Toast.success('Connexion effectuée avec succès.')    
      }
    },

    async register(guard: string, data: Student | School) {
      await request({
        url: `api/${guard}/auth/create`,
        data: data,
        method: 'POST'
      })
      if (response.value && response.value.data) {
        this.authenticated = true
        this.user = deepClone(response.value.data)
        Toast.success(`${guard} a été créée avec succès`)
      }
    },

    async getUser() {
      if (this.authenticated === false) {
        await request({
          method: 'GET',
          url: 'api/me'
        })

        if (response.value && response.value.data) {
          this.authenticated = true
          this.user = deepClone(response.value.data)
        }
      }
    }
  }
})
