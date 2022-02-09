import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';


const Screen3x3 = ({ route }) => {
  const [color11, setColor11] = useState('white')
  const [color12, setColor12] = useState('white')
  const [color13, setColor13] = useState('white')

  const [color21, setColor21] = useState('white')
  const [color22, setColor22] = useState('white')
  const [color23, setColor23] = useState('white')

  const [color31, setColor31] = useState('white')
  const [color32, setColor32] = useState('white')
  const [color33, setColor33] = useState('white')


  let RandomNumber
  // const [a, setA] = useState('yell')

  // let number = [
  //   color11, color12, color13,
  //   color21, color22, color23
  // ]
  // const [player, setPlayer] = useState(true)
  useEffect(() => {
    if (color11 != ('white') &&
      color12 != ('white') &&
      color13 != ('white') &&
      color21 != ('white') &&
      color22 != ('white') &&
      color23 != ('white') &&
      color31 != ('white') &&
      color32 != ('white') &&
      color33 != ('white')) {
      Alert.alert(
        "THERE IS WINNER"
      )
      reset()
    }



    if (color11 === ('red') && color12 === ('red') && color13 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color11 === ('blue') && color12 === ('blue') && color13 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }
    if (color21 === ('red') && color22 === ('red') && color23 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color21 === ('blue') && color22 === ('blue') && color23 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }
    if (color31 === ('red') && color32 === ('red') && color33 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color31 === ('blue') && color32 === ('blue') && color33 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }


    if (color11 === ('red') && color21 === ('red') && color31 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color11 === ('blue') && color21 === ('blue') && color31 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }
    if (color12 === ('red') && color22 === ('red') && color32 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color12 === ('blue') && color22 === ('blue') && color32 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }
    if (color13 === ('red') && color23 === ('red') && color33 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color13 === ('blue') && color23 === ('blue') && color33 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }


    if (color11 === ('red') && color22 === ('red') && color33 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color11 === ('blue') && color22 === ('blue') && color33 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }
    if (color13 === ('red') && color22 === ('red') && color31 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color13 === ('blue') && color22 === ('blue') && color31 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }

    // if (color11 === ('red') && color12 === ('red') && color13 === ('red')) {
    //   Alert.alert(
    //     "Alert Title",
    //     "Red Win"
    //   )
    //   reset()
    //   // navigation.navigate('Home')
    // }
  });
  // let number = [
  //   color11, color12, color13,
  //   color21, color22, color23,
  //   color31, color32, color33,
  // ]

  // let number = [
  //   'white', 'white', 'white',
  //   'white', 'white', 'white',
  //   'white', 'white', 'white'
  // ]

  const handleEnemy = () => {
    RandomNumber = Math.floor(Math.random() * 9) + 1;
    //=============================================================== UNACTIVED BECAUSE ERROR MAXIMUM CALL STACK SIZE EXCEEDED  
    // if( RandomNumber === 1 && color11 === ('white')){
    //   setColor11('blue')
    // } else {
    //   handleEnemy()
    // }
    // if( RandomNumber === 2 && color12 === ('white')){
    //   setColor11('blue')
    // } else {
    //   handleEnemy()
    // }
    // if( RandomNumber === 3 && color13 === ('white')){
    //   setColor11('blue')
    // } else {
    //   handleEnemy()
    // }
    // if( RandomNumber === 4 && color21 === ('white')){
    //   setColor11('blue')
    // } else {
    //   handleEnemy()
    // }
    // if( RandomNumber === 5 && color22 === ('white')){
    //   setColor11('blue')
    // } else {
    //   handleEnemy()
    // }
    // if( RandomNumber === 6 && color23 === ('white')){
    //   setColor11('blue')
    // } else {
    //   handleEnemy()
    // }
    // if( RandomNumber === 7 && color31 === ('white')){
    //   setColor11('blue')
    // } else {
    //   handleEnemy()
    // }
    // if( RandomNumber === 8 && color32 === ('white')){
    //   setColor11('blue')
    // } else {
    //   handleEnemy()
    // }
    // if( RandomNumber === 9 && color33 === ('white')){
    //   setColor11('blue')
    // } else {
    //   handleEnemy()
    // }
    //=============================================================== UNACTIVED BECAUSE ERROR MAXIMUM CALL STACK SIZE EXCEEDED  

    // for (let i = 1; i < 9; i++) {
    //   if (RandomNumber === i && number[i] === ('white')) {
    //     number[i] = 'blue'
    //     console.log(number)
    //   }
    // }



    if (RandomNumber === 1 && color11 === ('white')) {
      setColor11('blue');
    } else if (RandomNumber === 1 && color11 != ('white')) {
      RandomNumber = 2;
    }

    if (RandomNumber === 2 && color12 === ('white')) {
      setColor12('blue');
    } else if (RandomNumber === 2 && color12 != ('white')) {
      RandomNumber = 3;
    }

    if (RandomNumber === 3 && color13 === ('white')) {
      setColor13('blue');
    } else if (RandomNumber === 3 && color13 != ('white')) {
      RandomNumber = 4;
    }

    if (RandomNumber === 4 && color21 === ('white')) {
      setColor21('blue');
    } else if (RandomNumber === 4 && color21 != ('white')) {
      RandomNumber = 5;
    }

    if (RandomNumber === 5 && color22 === ('white')) {
      setColor22('blue');
    } else if (RandomNumber === 5 && color22 != ('white')) {
      RandomNumber = 6;
    }

    if (RandomNumber === 6 && color23 === ('white')) {
      setColor23('blue');
    } else if (RandomNumber === 6 && color23 != ('white')) {
      RandomNumber = 7;
    }

    if (RandomNumber === 7 && color31 === ('white')) {
      setColor23('blue');
    } else if (RandomNumber === 7 && color31 != ('white')) {
      RandomNumber = 8;
    }

    if (RandomNumber === 8 && color32 === ('white')) {
      setColor23('blue');
    } else if (RandomNumber === 8 && color32 != ('white')) {
      RandomNumber = 9;
    }

    if (RandomNumber === 9 && color33 === ('white')) {
      setColor23('blue');
    } else if (RandomNumber === 9 && color33 != ('white')) {
      RandomNumber = 1;
    }

    console.log(RandomNumber)
  }

  // console.log(number)

  const reset = () => {
    setColor11('white')
    setColor12('white')
    setColor13('white')
    setColor21('white')
    setColor22('white')
    setColor23('white')
    setColor31('white')
    setColor32('white')
    setColor33('white')
    console.log('Reset')

  }
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ flex: 1 }} source={require('../assest/image/background.jpeg')}>
        <View style={[styles.name, {marginTop: wp('20%')}]}>
          <Text style={styles.nameTxt}>Hello, Good Luck {route.params.name}</Text>
        </View>
        <View style={styles.name}>
          <Text style={[styles.nameTxt, { color: 'red' }]}>You Are Playing Tic Tac Toe 3x3</Text>
        </View>
        <TouchableOpacity style={styles.reset} onPress={() => {
          reset()
        }} >
          <Text style={{ fontSize: 40, color: 'white'}}>reset</Text>
        </TouchableOpacity>
        <View style={{ marginTop: wp('25%'), flexDirection: 'row' }}>
          <TouchableOpacity
            // style={styles.numb11}
            style={[styles.numb11, { backgroundColor: color11 }]}
            onPress={() => {
              if (color11 === ('white')) {
                setColor11('red')
                handleEnemy()
              }
            }}
          />
          <TouchableOpacity style={[styles.numb12, { backgroundColor: color12 }]}
            onPress={() => {
              if (color12 === ('white')) {
                setColor12('red')
                handleEnemy()
              }
            }}
          />
          <TouchableOpacity style={[styles.numb13, { backgroundColor: color13 }]}
            onPress={() => {
              if (color13 === ('white')) {
                setColor13('red')
                handleEnemy()
              }
            }}
          />
        </View>


        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.numb21, { backgroundColor: color21 }]}
            onPress={() => {
              if (color21 === ('white')) {
                setColor21('red')
                handleEnemy()
              }
            }}
          />
          <TouchableOpacity style={[styles.numb22, { backgroundColor: color22 }]}
            onPress={() => {
              if (color22 === ('white')) {
                setColor22('red')
                handleEnemy()
              }
            }}
          />
          <TouchableOpacity style={[styles.numb23, { backgroundColor: color23 }]}
            onPress={() => {
              if (color23 === ('white')) {
                setColor23('red')
                handleEnemy()
              }
            }}
          />
        </View>


        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.numb31, { backgroundColor: color31 }]}
            onPress={() => {
              if (color31 === ('white')) {
                setColor31('red')
                handleEnemy()
              }
            }}
          />
          <TouchableOpacity style={[styles.numb32, { backgroundColor: color32 }]}
            onPress={() => {
              if (color32 === ('white')) {
                setColor32('red')
                handleEnemy()
              }
            }}
          />
          <TouchableOpacity style={[styles.numb33, { backgroundColor: color33 }]}
            onPress={() => {
              if (color33 === ('white')) {
                setColor33('red')
                handleEnemy()
              }
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Screen3x3;

const styles = StyleSheet.create({
  name:{
    backgroundColor: 'white',
    marginHorizontal: wp('10%'),
  },
  resetTxt: {
    fontSize: 40,
  },
  reset: {
    position: 'absolute',
    top: hp('90%'),
    backgroundColor: 'red',
    paddingHorizontal: wp('10%'),
    justifyContent: 'center',
  },
  nameTxt: {
    fontSize: 30,
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
  },
  numb11: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderRightWidth: 2,
    height: hp('10%')
    // backgroundColor: number[0]
    // borderRightColor: color11
  },
  numb12: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    // borderWidth: 2,
  },
  numb13: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderLeftWidth: 2
  },
  numb21: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    height: hp('10%')
  },
  numb22: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
  },
  numb23: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  numb31: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderRightWidth: 2,
    height: hp('10%')
  },
  numb32: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    // borderWidth: 2,
  },
  numb33: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderLeftWidth: 2
  },

});
