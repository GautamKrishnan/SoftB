import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';

const AVATAR_ICON = require('../assets/user.png');

export function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{flexDirection: 'row', marginTop: 80, width: '90%', height: 60}}>
                <TouchableOpacity onPress={() => navigation.navigate('TabA Details')}>
                    <Image style={{height: 60, width: 60, left: 20,}} source={AVATAR_ICON} />
                </TouchableOpacity>
                <Text style={{fontSize: 30, fontWeight: 'bold', paddingLeft: 50, paddingTop: 10,}}>
                    Home
                </Text>
            </View>
            <View style={{backgroundColor: '#378AD2', height:200, width: 330, marginTop: 50,}}>
            </View>
            <View style={{backgroundColor: '#F48125', height:200, width: 330, marginTop: 50,}}>
            </View>
        </View>
    );
}
