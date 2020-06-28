import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import {Screen3} from "./screens/Screen3";
import {Screen4} from "./screens/Screen4";
import {HomeScreen} from "./screens/HomeScreen";

const Tab = createBottomTabNavigator();
function AppTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'TabA') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'TabB') {
                        iconName = focused
                            ? 'ios-list-box'
                            : 'ios-list';
                    }
                    return <Ionicons name={iconName} size={size} color={color}     />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="TabA" component={HomeStackScreens} />
            <Tab.Screen name="TabB" component={Screen4} />
        </Tab.Navigator>
    );
}

const HomeStack = createStackNavigator();
function HomeStackScreens() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home Screen" component={HomeScreen} />
            <HomeStack.Screen name="TabA Details" component={Screen3} />
        </HomeStack.Navigator>
    );
}


export default function Main() {
    return (
        <NavigationContainer>
                <AppTabs />
        </NavigationContainer>
    )
}
