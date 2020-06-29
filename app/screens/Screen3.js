import React , {useEffect,useState} from 'react';
import {useDispatch} from 'react-redux';
import {ScrollView, View, Text, TextInput , TouchableOpacity, Image, StyleSheet, Button} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as SQLite from 'expo-sqlite';
import {setEmployeesData} from "../actions/EmployeeActions";

const AVATAR_ICON = require('../assets/user.png');
const DB = SQLite.openDatabase("db.db");

export function Screen3({navigation}) {

    const [employeeDetails, setEmployeeDetails] = useState({
        name: '',
        department: '',
        title: '',
        phone: '',
        email: '',
        userID: '',
        password: '',
        image: '',
    });
    const dispatchEmployeeLists = useDispatch();


    useEffect(() => {
         getPermissionAsync();
         DB.transaction(tx => {
            tx.executeSql(
                "create table if not exists employees (name text , department text, title text, phone string, email text, userID text, password text);"
            );
        });
    },[]);

    async function getPermissionAsync() {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    function updateName (name) {
        setEmployeeDetails({
            name: name,
            department: employeeDetails.department,
            title: employeeDetails.title,
            phone: employeeDetails.phone,
            email: employeeDetails.email,
            userID: employeeDetails.userID,
            password: employeeDetails.password,
            image: employeeDetails.image,
        })
    }

    function updateDepartment(department) {
        setEmployeeDetails({
            name: employeeDetails.name,
            department: department,
            title: employeeDetails.title,
            phone: employeeDetails.phone,
            email: employeeDetails.email,
            userID: employeeDetails.userID,
            password: employeeDetails.password,
            image: employeeDetails.image,
        })
    }

    function updateTitle(title) {
        setEmployeeDetails({
            name: employeeDetails.name,
            department: employeeDetails.department,
            title: title,
            phone: employeeDetails.phone,
            email: employeeDetails.email,
            userID: employeeDetails.userID,
            password: employeeDetails.password,
            image: employeeDetails.image,
        })
    }

    function updatePhone(phone) {
        setEmployeeDetails({
            name: employeeDetails.name,
            department: employeeDetails.department,
            title: employeeDetails.title,
            phone: phone,
            email: employeeDetails.email,
            userID: employeeDetails.userID,
            password: employeeDetails.password,
            image: employeeDetails.image,
        })
    }

    function updateEmail(email) {
        setEmployeeDetails({
            name: employeeDetails.name,
            department: employeeDetails.department,
            title: employeeDetails.title,
            phone: employeeDetails.phone,
            email: email,
            userID: employeeDetails.userID,
            password: employeeDetails.password,
            image: employeeDetails.image,
        })
    }

    function updateUserID(userID) {
        setEmployeeDetails({
            name: employeeDetails.name,
            department: employeeDetails.department,
            title: employeeDetails.title,
            phone: employeeDetails.phone,
            email: employeeDetails.email,
            userID: userID,
            password: employeeDetails.password,
            image: employeeDetails.image,
        })
    }

    function updatePassword(password) {
        setEmployeeDetails({
            name: employeeDetails.name,
            department: employeeDetails.department,
            title: employeeDetails.title,
            phone: employeeDetails.phone,
            email: employeeDetails.email,
            userID: employeeDetails.userID,
            password: password,
            image: employeeDetails.image,
        })
    }

    async function pickImage() {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setEmployeeDetails({
                    name: employeeDetails.name,
                    department: employeeDetails.department,
                    title: employeeDetails.title,
                    phone: employeeDetails.phone,
                    email: employeeDetails.email,
                    userID: employeeDetails.userID,
                    password: employeeDetails.password,
                    image: result.uri,
                })
            }
        } catch (E) {
            console.log(E);
        }
    }

    function createEmployee() {
        DB.transaction(
            tx => {
                tx.executeSql("insert into employees (name, department, title, phone, email, userID, password ) values (?, ?, ?, ?, ?, ?, ?)", [employeeDetails.name, employeeDetails.department, employeeDetails.title, employeeDetails.password, employeeDetails.email, employeeDetails.userID, employeeDetails.password],(() =>{console.log('Done')}));
                tx.executeSql("select * from employees", [], (_, { rows }) =>
                    console.log(rows)
                );
            },
            null,
        );
        navigation.navigate('Home');
    }

    return (
        <ScrollView style={{ flex: 1}}>
            <TouchableOpacity style={Styles.avatarPlaceHolder} onPress={pickImage}>
                <Image style={Styles.avatarImage} source={employeeDetails.image ? {uri: employeeDetails.image} : AVATAR_ICON}/>
            </TouchableOpacity>
            <View style={Styles.textView}>
                <Text style={Styles.textLabel}>
                    Name
                </Text>
                <TextInput style={Styles.textEditable} placeholder='Enter Name' onChangeText={text => updateName(text)}/>
            </View>
            <View style={Styles.textView}>
                <Text style={Styles.textLabel}>
                    Department
                </Text>
                <TextInput style={Styles.textEditable} placeholder='Enter Department' onChangeText={text => updateDepartment(text)}/>
            </View>
            <View style={Styles.textView}>
                <Text style={Styles.textLabel}>
                    Job Title
                </Text>
                <TextInput style={Styles.textEditable} placeholder='Enter Job Title' onChangeText={text => updateTitle(text)}/>
            </View>
            <View style={Styles.textView}>
                <Text style={Styles.textLabel}>
                    Phone
                </Text>
                <TextInput style={Styles.textEditable} placeholder='Enter Phone' onChangeText={text => updatePhone(text)}/>
            </View>
            <View style={Styles.textView}>
                <Text style={Styles.textLabel}>
                    Email
                </Text>
                <TextInput style={Styles.textEditable} placeholder='Enter Email' onChangeText={text => updateEmail(text)}/>
            </View>
            <View style={Styles.textView}>
                <Text style={Styles.textLabel}>
                    User ID
                </Text>
                <TextInput style={Styles.textEditable} placeholder='Enter User ID' onChangeText={text => updateUserID(text)}/>
            </View>
            <View style={Styles.textView}>
                <Text style={Styles.textLabel}>
                    Password
                </Text>
                <TextInput style={Styles.textEditable} placeholder='Enter Password' secureTextEntry={true} onChangeText={text => updatePassword(text)}/>
            </View>
            <View style={Styles.createButton}>
                <Button  title="Create New Employee" onPress={createEmployee}/>
            </View>
        </ScrollView>
    );
}

const Styles = StyleSheet.create({
    avatarPlaceHolder: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 80,
        marginBottom: 30,
        alignSelf:'center'
    },
    avatarImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    textView: {
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: 30,
    },
    textLabel: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    textEditable: {
        left: 20,
        fontSize: 20,
    },
    createButton: {
        marginTop: 50,
    }
});

