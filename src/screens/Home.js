import {
    Text, View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    LogBox,
    Alert,
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
    // console.log(name)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.welcome}>
                <Text style={styles.welcomeTxt}>Welcome to </Text>
                <Text style={styles.welcomeTxt}>TIC TAC TOE</Text>
                <Text style={styles.welcomeTxt}>Mini Game</Text>
            </View>
            <View style={styles.txtInput}>
                <TextInput style={styles.name}
                    onChangeText={text => setName(text)}
                    placeholder="Tell Me Your Name Here"
                />
            </View>
            <View style={styles.btnContainer}>
                <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text>Choose Rows and Columns</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    navigation.navigate('screen3x3', { name })
                    Alert.alert(
                        "WARNING",
                        "THE ARTIFICIAL INTELLIGENT IS STILL NOT WORKING PERFECTLY "
                    )
                }}>
                    <Text style={styles.btnTxt}>3x3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    navigation.navigate('screen4x4', { name })
                    Alert.alert(
                        "WARNING",
                        "THE ARTIFICIAL INTELLIGENT IS STILL NOT WORKING PERFECTLY "
                    )
                }}>
                    <Text style={styles.btnTxt}>4x4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    navigation.navigate('screen5x5', {name})
                    Alert.alert(
                        "WARNING",
                        "THE ARTIFICIAL INTELLIGENT IS STILL NOT WORKING PERFECTLY "
                    )
                }}>
                    <Text style={styles.btnTxt}>5x5</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    txtInput: {
        justifyContent: 'center',
        marginVertical: wp('15%'),
    },
    welcomeTxt: {
        color: 'red',
        fontSize: 40,
        fontWeight: 'bold',
    },
    welcome: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: wp('15%')
        // backgroundColor: 'yellow',
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
        marginHorizontal: wp('5%'),
        paddingHorizontal: wp('5%')
    }
});
