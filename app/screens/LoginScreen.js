import React , {useState} from 'react';
import {useDispatch} from 'react-redux';
import { Button, View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import {setLoginState} from "../actions/LoginActions";

export function LoginScreen({navigation}) {

    const [loginID, setLoginID] = useState('');
    const [password, setPassword] = useState('');
    const dispatchLoginInfo = useDispatch();

    function onLogin() {
        if ((loginID === 'Email') && (password === '123')) {
            dispatchLoginInfo(setLoginState(1));
        }
        else {
            setLoginID('');
            setPassword('');
            Alert.alert(
                "Incorrect Credentials",
                "Please re-enter the correct credentials",
                [
                    { text: "OK", onPress: () => console.log('Re-enter') }
                ],
                { cancelable: false }
            );
        }

    }

    function onChangeLoginText(text) {
        setLoginID(text);
    }

    function onChangePassword(text) {
        setPassword(text);
    }

    console.log(loginID);
    console.log(password);

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{fontSize: 30, paddingTop: 100, fontWeight: 'bold'}}>
                Login
            </Text>
            <View style={{marginTop: 150, height: 50, width: 200, alignItems: 'center'}}>
                <TextInput
                    style={{ height: 50, width: 150, alignSelf: 'center', borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeLoginText(text)}
                    value={loginID}
                    placeholder='Login ID'
                    textAlign={'center'}
                />
            </View>
            <View style={{marginTop: 30, height: 50, width: 200, alignItems: 'center'}}>
                <TextInput
                    style={{ height: 50, width: 150, alignContent: 'center', borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangePassword(text)}
                    value={password}
                    placeholder='Password'
                    textAlign={'center'}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={{marginTop: 25,height: 30, width: 150, alignItems: 'center', marginBottom: 50,}}>
                <Text style={{color: 'gray', fontStyle: 'italic'}}>Forgot Password</Text>
            </TouchableOpacity>
            <Button
                onPress={onLogin}
                title="Login"
            />
        </View>
    );
}
