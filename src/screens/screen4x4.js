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


const Screen4x4 = ({ route }) => {
  const [color11, setColor11] = useState('white')
  const [color12, setColor12] = useState('white')
  const [color13, setColor13] = useState('white')
  const [color14, setColor14] = useState('white')

  const [color21, setColor21] = useState('white')
  const [color22, setColor22] = useState('white')
  const [color23, setColor23] = useState('white')
  const [color24, setColor24] = useState('white')

  const [color31, setColor31] = useState('white')
  const [color32, setColor32] = useState('white')
  const [color33, setColor33] = useState('white')
  const [color34, setColor34] = useState('white')

  const [color41, setColor41] = useState('white')
  const [color42, setColor42] = useState('white')
  const [color43, setColor43] = useState('white')
  const [color44, setColor44] = useState('white')


  let RandomNumber
  // const [a, setA] = useState('yell')

  // let number = [
  //   color11, color12, color13,
  //   color21, color22, color23
  // ]
  const [player, setPlayer] = useState(true)
  useEffect(() => {
    if (color11 != ('white') &&
      color12 != ('white') &&
      color13 != ('white') &&
      color14 != ('white') &&
      color21 != ('white') &&
      color22 != ('white') &&
      color23 != ('white') &&
      color24 != ('white') &&
      color31 != ('white') &&
      color32 != ('white') &&
      color33 != ('white') &&
      color34 != ('white') &&
      color41 != ('white') &&
      color42 != ('white') &&
      color43 != ('white') &&
      color44 != ('white')) {
      Alert.alert(
        "THERE IS NO WINNER"
      )
      reset()
    }



    if (color11 === ('red') && color12 === ('red') && color13 === ('red') && color14 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color11 === ('blue') && color12 === ('blue') && color13 === ('blue') && color14 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }
    if (color21 === ('red') && color22 === ('red') && color23 === ('red') && color24 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color21 === ('blue') && color22 === ('blue') && color23 === ('blue') && color24 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }
    if (color31 === ('red') && color32 === ('red') && color33 === ('red') && color34 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color31 === ('blue') && color32 === ('blue') && color33 === ('blue') && color34 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }
    if (color41 === ('red') && color42 === ('red') && color43 === ('red') && color44 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color41 === ('blue') && color42 === ('blue') && color43 === ('blue') && color44 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }


    if (color11 === ('red') && color21 === ('red') && color31 === ('red') && color41 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color11 === ('blue') && color21 === ('blue') && color31 === ('blue') && color41 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }
    if (color12 === ('red') && color22 === ('red') && color32 === ('red') && color42 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color12 === ('blue') && color22 === ('blue') && color32 === ('blue') && color42 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }
    if (color13 === ('red') && color23 === ('red') && color33 === ('red') && color43 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color13 === ('blue') && color23 === ('blue') && color33 === ('blue') && color43 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }
    if (color14 === ('red') && color24 === ('red') && color34 === ('red') && color44 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color14 === ('blue') && color24 === ('blue') && color34 === ('blue') && color44 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }


    if (color11 === ('red') && color22 === ('red') && color33 === ('red') && color44 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color11 === ('blue') && color22 === ('blue') && color33 === ('blue') && color44 === ('blue')) {
      Alert.alert(
        "YOU LOSE"
      )
      reset()
    }
    if (color14 === ('red') && color23 === ('red') && color32 === ('red') && color41 === ('red')) {
      Alert.alert(
        "YOU WIN"
      )
      reset()
    }
    if (color14 === ('blue') && color23 === ('blue') && color32 === ('blue') && color41 === ('blue')) {
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
    RandomNumber = Math.floor(Math.random() * 16) + 1;
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

    if (RandomNumber === 4 && color14 === ('white')) {
      setColor14('blue');
    } else if (RandomNumber === 4 && color14 != ('white')) {
      RandomNumber = 5;
    }

    if (RandomNumber === 5 && color21 === ('white')) {
      setColor21('blue');
    } else if (RandomNumber === 5 && color21 != ('white')) {
      RandomNumber = 6;
    }

    if (RandomNumber === 6 && color22 === ('white')) {
      setColor22('blue');
    } else if (RandomNumber === 6 && color22 != ('white')) {
      RandomNumber = 7;
    }

    if (RandomNumber === 7 && color23 === ('white')) {
      setColor23('blue');
    } else if (RandomNumber === 7 && color23 != ('white')) {
      RandomNumber = 8;
    }

    if (RandomNumber === 8 && color24 === ('white')) {
      setColor24('blue');
    } else if (RandomNumber === 8 && color24 != ('white')) {
      RandomNumber = 9;
    }

    if (RandomNumber === 9 && color31 === ('white')) {
      setColor31('blue');
    } else if (RandomNumber === 9 && color31 != ('white')) {
      RandomNumber = 10;
    }

    if (RandomNumber === 10 && color32 === ('white')) {
      setColor32('blue');
    } else if (RandomNumber === 10 && color32 != ('white')) {
      RandomNumber = 11;
    }

    if (RandomNumber === 11 && color33 === ('white')) {
      setColor33('blue');
    } else if (RandomNumber === 11 && color33 != ('white')) {
      RandomNumber = 12;
    }

    if (RandomNumber === 12 && color34 === ('white')) {
      setColor34('blue');
    } else if (RandomNumber === 12 && color34 != ('white')) {
      RandomNumber = 13;
    }

    if (RandomNumber === 13 && color41 === ('white')) {
      setColor41('blue');
    } else if (RandomNumber === 13 && color41 != ('white')) {
      RandomNumber = 14;
    }

    if (RandomNumber === 14 && color42 === ('white')) {
      setColor42('blue');
    } else if (RandomNumber === 14 && color42 != ('white')) {
      RandomNumber = 15;
    }

    if (RandomNumber === 15 && color43 === ('white')) {
      setColor43('blue');
    } else if (RandomNumber === 15 && color43 != ('white')) {
      RandomNumber = 16;
    }

    if (RandomNumber === 16 && color44 === ('white')) {
      setColor44('blue');
    } else if (RandomNumber === 16 && color44 != ('white')) {
      RandomNumber = 1;
    }

    console.log(RandomNumber)
  }

  // console.log(number)

  const reset = () => {
    setColor11('white')
    setColor12('white')
    setColor13('white')
    setColor14('white')
    setColor21('white')
    setColor22('white')
    setColor23('white')
    setColor24('white')
    setColor31('white')
    setColor32('white')
    setColor33('white')
    setColor34('white')
    setColor41('white')
    setColor42('white')
    setColor43('white')
    setColor44('white')
    console.log('Reset')

  }
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ flex: 1 }} source={require('../assest/image/background.jpeg')}>
        <View style={styles.name}>
        <Text style={styles.nameTxt}>Hello, Good Luck {route.params.name}</Text>
          <Text style={[styles.nameTxt, { color: 'red' }]}>You Are Playing Tic Tac Toe 4x4</Text>
        </View>
        <TouchableOpacity style={styles.reset} onPress={() => {
          reset()
        }} >
          <Text style={{ fontSize: 40, color: 'white' }}>reset</Text>
        </TouchableOpacity>
        <View style={{ marginTop: wp('20%'), flexDirection: 'row' }}>
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
          <TouchableOpacity style={[styles.numb14, { backgroundColor: color14 }]}
            onPress={() => {
              if (color14 === ('white')) {
                setColor14('red')
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
          <TouchableOpacity style={[styles.numb24, { backgroundColor: color24 }]}
            onPress={() => {
              if (color24 === ('white')) {
                setColor24('red')
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
          <TouchableOpacity style={[styles.numb34, { backgroundColor: color34 }]}
            onPress={() => {
              if (color34 === ('white')) {
                setColor34('red')
                handleEnemy()
              }
            }}
          />
        </View>


        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.numb41, { backgroundColor: color41 }]}
            onPress={() => {
              if (color41 === ('white')) {
                setColor41('red')
                handleEnemy()
              }
            }}
          />
          <TouchableOpacity style={[styles.numb42, { backgroundColor: color42 }]}
            onPress={() => {
              if (color42 === ('white')) {
                setColor42('red')
                handleEnemy()
              }
            }}
          />
          <TouchableOpacity style={[styles.numb43, { backgroundColor: color43 }]}
            onPress={() => {
              if (color43 === ('white')) {
                setColor43('red')
                handleEnemy()
              }
            }}
          />
          <TouchableOpacity style={[styles.numb44, { backgroundColor: color44 }]}
            onPress={() => {
              if (color44 === ('white')) {
                setColor44('red')
                handleEnemy()
              }
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Screen4x4;

const styles = StyleSheet.create({
  name:{
    backgroundColor: 'white',
    marginHorizontal: wp('10%'),
    marginTop: wp('20%'),
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
    borderBottomWidth: 2,
    height: hp('10%'),
  },
  numb12: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  numb13: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  numb14: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderLeftWidth: 2,
    borderBottomWidth: 2,
  },
  numb21: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    height: hp('10%'),
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
    borderWidth: 2,
  },
  numb24: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
  },
  numb31: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    height: hp('10%'),
  },
  numb32: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
  },
  numb33: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
  },
  numb34: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
  },
  numb41: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 2,
    borderRightWidth: 2,
    height: hp('10%'),
  },
  numb42: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
  },
  numb43: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
  },
  numb44: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,

  },

});
