import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {Screen3} from "./screens/Screen3";
import {MoreScreen} from "./screens/MoreScreen";
import {HomeScreen} from "./screens/HomeScreen";
import {LoginScreen} from "./screens/LoginScreen";
import {AlertsScreen} from "./screens/AlertsScreen";
import {FeedsScreen} from "./screens/FeedsScreen";

const Tab = createBottomTabNavigator();
function AppTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'ios-home'
                    } else if (route.name === 'Feeds') {
                        return <FontAwesome name="rss-square" size={size} color={color} />
                    } else if (route.name === 'Alerts') {
                        iconName = 'ios-notifications'
                    } else if (route.name === 'More') {
                        return <FontAwesome name="bars" size={size} color={color} />
                    }
                    return <Ionicons name={iconName} size={size} color={color}     />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeStackScreens} />
            <Tab.Screen name="Feeds" component={FeedsScreen}/>
            <Tab.Screen name="Alerts" component={AlertsScreen}/>
            <Tab.Screen name="More" component={MoreScreen} />
        </Tab.Navigator>
    );
}

const HomeStack = createStackNavigator();
function HomeStackScreens() {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="TabA Details" component={Screen3} />
        </HomeStack.Navigator>
    );
}

const RootStack = createStackNavigator();

export default function Main() {

    const loginInfo = useSelector(state => state.LoginReducer.loginState);

    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode='none'>
                {
                    loginInfo ?
                        <RootStack.Screen name='App' component={AppTabs} />
                        : <RootStack.Screen name='Login Screen' component={LoginScreen} />
                }
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
