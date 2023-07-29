import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { carregaProdutores } from '../../../servicos/carregaDados';


export default function Produtores(){
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
        //console.log(retorno);
    }, []);

    const TopoLista = () => {
        return <Text>{ titulo }</Text>
    }
    return <FlatList
          data={lista} 
          renderItem={({item: {nome}}) => <Text>{ nome }</Text>}
          ListHeaderComponent={TopoLista}/>
        
}
    const estilos = StyleSheet.create({
        titulo: {
            fontSize: 20,
            lineHeight: 32,
            marginHorizontal: 16,
            marginTop: 16,
            fontWeight: 'bold'
        }

    })