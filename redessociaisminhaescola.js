import { criargrafico, getCSS, incluirtexto} from "./common.js"

async function redessociaisfavoritasminhaescola(params) {
    const dadoslocaissting = localStorage.getItem('respostaredessociais')
    if (dadoslocaissting) {
    const dadoslocais = JSON.parse(dadoslocaissting)
    processardados(dadoslocais)
    } else {
    const url =   'https://script.googleusercontent.com/macros/echo?user_content_key=rSe23zaQC7gOvWgFJbdtPaqh7ewsO5hQmusYOeqdorTRN8C25vVV3BicsPoS6HS3jnJY9NHhy_pNZj6prQdxDH3305Mro8vNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPvESZ9fvnAeFWqfIvIacdoRZcVMZ-nDSydw9_0gseo2TN3y60rOTtwDBCYnKQf6yIqgf8yOzNfccjP633C9VnHmUmPZvRBJY9z9Jw9Md8uu&lib=MCARBaBtNBMHKiEwMeRap3j6V_G7SlGWF'
    const res = await fetch(url)
    
    }
}