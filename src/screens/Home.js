import {
    Text, View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    LogBox,
    Alert,
    ImageBackground,
} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import React, { useState } from 'react';
LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Home = ({ navigation }) => {
    const [name, setName] = useState('')
    const s5x5 = () => {
        if (name === ('')) {
            // console.log('nama kosong')
            Alert.alert(
                "WARNING",
                "PLEASE FILL NAME"
            )
        } else {
            navigation.navigate('screen5x5', { name })
            Alert.alert(
                "WARNING",
                "THE ARTIFICIAL INTELLIGENT IS STILL NOT WORKING PERFECTLY "
            )
        }
    }

    const s4x4 = () => {
        if (name === ('')) {
            // console.log('nama kosong')
            Alert.alert(
                "WARNING",
                "PLEASE FILL NAME"
            )
        } else {
            navigation.navigate('screen4x4', { name })
            Alert.alert(
                "WARNING",
                "THE ARTIFICIAL INTELLIGENT IS STILL NOT WORKING PERFECTLY "
            )
        }
    }

    const s3x3 = () => {
        if (name === ('')) {
            console.log('nama kosong')
            Alert.alert(
                "WARNING",
                "PLEASE FILL NAME"
            )
        } else {
            navigation.navigate('screen3x3', { name })
            Alert.alert(
                "WARNING",
                "THE ARTIFICIAL INTELLIGENT IS STILL NOT WORKING PERFECTLY "
            )
        }
    }
    // console.log(name)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1 }} source={require('../assest/image/background.jpeg')}>
                <View style={styles.welcome}>
                    <Text style={styles.welcomeTxt}>Welcome to </Text>
                    <Text style={styles.welcomeTxt}>TIC TAC TOE</Text>
                    <Text style={styles.welcomeTxt}>Mini Game</Text>
                </View>
                <View style={styles.txtInput}>
                    <TextInput style={styles.name}
                        onChangeText={text => setName(text)}
                        placeholder="Tell Me Your Name Here"
                        placeholderTextColor="red"
                    />
                </View>
                <View style={styles.btnContainer}>
                    <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text style={styles.txt}>Choose Rows and Columns</Text>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        s3x3()
                    }}>
                        <Text style={styles.btnTxt}>3x3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        s4x4()
                    }}>
                        <Text style={styles.btnTxt}>4x4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        s5x5()
                    }}>
                        <Text style={styles.btnTxt}>5x5</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    txt: {
        color: 'red',
        fontSize: 20,
        backgroundColor: 'white',
    },
    txtInput: {
        justifyContent: 'center',
        marginVertical: wp('15%'),
        marginHorizontal: wp('5%'),
        backgroundColor: 'white',
    },
    welcomeTxt: {
        color: 'red',
        fontSize: 40,
        fontWeight: 'bold',
    },
    welcome: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: wp('15%'),
        marginHorizontal: wp('15%'),
        backgroundColor: 'white',
    },
    btnContainer: {
        // backgroundColor: 'green',
        justifyContent: 'flex-end',
    },
    btnTxt: {
        color: 'white',
        fontSize: 30,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'red',
        // borderRadius: 25,
        height: hp('8%'),
        marginHorizontal: wp('15%'),
        marginVertical: hp('1%'),
    },
    name: {
        borderWidth: 2,
        paddingHorizontal: wp('5%')
    }
});
