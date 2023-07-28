import React from 'react';
import { View, Text, Image } from 'react-native';

import logo from '../../../assets/logo.png';

export default function Topo() {
    return <View>
        <Image source={logo} />
        <Text>Olá, Rafael!</Text>
        <Text>Encontre os melhores produtores.</Text>
        </View>
}