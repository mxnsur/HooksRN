import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

import estrela from "../assets/estrela.png"
import estrelaCinza from "../assets/estrelaCinza.png"

export default function Estrela({
    onPress, 
    desabilitado = true,
    preenchida,
    grande = false,
}) {
    const estilos = estilosFuncao(grande)

    const getImagem = () => {
        if(preenchida) {
            return estrela
        }
        return estrelaCinza
    }   

    return <TouchableOpacity
    onPress={onPress}
    disabled={desabilitado}
    >
    <Image source={getImagem()} style={estilos.estrela}/>
    </TouchableOpacity>
}

const estilosFuncao = (grande)  => StyleSheet.create({
    estrela:{
        width: grande? 36 : 12,
        height:grande ? 36 : 12,
        marginRight:2,
    }
})