import axios from "axios"
import { API_VERSION } from '@/configs/api'

const RESOURCE = 'tenants'

export default {
    getCompanies ({ commit }) {
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando as empresas')
        return axios.get(`${API_VERSION}/${RESOURCE}`)
            .then(response => commit('SET_COMPANIES', response.data))
            .finally(() => commit('SET_PRELOADER', false))
    },

    getCategoriesByCompany ({ commit }, token_company) {
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando as categorias')

        return axios.get(`${API_VERSION}/categories`, { token_company })
            .then(response => commit('SET_CATEGORIES_COMPANY', response.data))
            .finally(() => commit('SET_PRELOADER', false))
    }
}