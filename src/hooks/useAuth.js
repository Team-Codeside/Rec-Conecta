import api from '../utils/api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useAuth() {

    async function  cadastroUser(user) {
        console.log ('entrei na função')
        try{

            const data = await api.post('user/register', user).then((response) => {
                console.log (response)
                return response.data

            })
            
           return data

        }catch(error){
            //tratar erro
            return error
        }
    }

    return {cadastroUser}
}
