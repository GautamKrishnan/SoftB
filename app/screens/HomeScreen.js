import React from 'react';
import { Button, View, Text } from 'react-native';

export function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
            <Text>
                Welcome to Home page!
            </Text>
            <Button
                onPress={() => navigation.navigate('TabA Details')}
                title="Go to TabA Details"
            />
        </View>
    );
}
