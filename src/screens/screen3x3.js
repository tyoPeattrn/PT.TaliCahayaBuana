import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import React, { useState, useEffect } from 'react';

const Screen3x3 = ({ route, navigation }) => {
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
  const [player, setPlayer] = useState(true)
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
        "Alert Title",
        "No Winner"
      )
      reset()
    }
    if (color11 === color12 && color12 === color13 && color11 === ('red')) {
      Alert.alert(
        "Alert Title",
        "Red Win"
      )
      reset()
    }

    if (color11 === color12 && color12 === color13 && color11 === ('blue')) {
      Alert.alert(
        "Alert Title",
        "Blue Win"
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
  //=============================================================== UNACTIVED BECAUSE ERROR MAXIMUM CALL STACK SIZE EXCEEDED  
  const handleEnemy = () => {
    RandomNumber = Math.floor(Math.random() * 6) + 1;
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
    } else if (RandomNumber === 6 && color31 != ('white')) {
      RandomNumber = 8;
    }

    if (RandomNumber === 8 && color32 === ('white')) {
      setColor23('blue');
    } else if (RandomNumber === 6 && color32 != ('white')) {
      RandomNumber = 9;
    }

    if (RandomNumber === 9 && color33 === ('white')) {
      setColor23('blue');
    } else if (RandomNumber === 6 && color33 != ('white')) {
      RandomNumber = 1;
    }

    console.log(RandomNumber)
  }

  // console.log(number)
  //=============================================================== UNACTIVED BECAUSE ERROR MAXIMUM CALL STACK SIZE EXCEEDED  

  const change11 = () => {
    if (color11 === ('white')) {
      setColor11('red');
      // number.slice(1)
    }
  }
  const change12 = () => {
    if (color12 === ('white')) {
      setColor12('red');
      // number.slice(2)
    }
  }
  const change13 = () => {
    if (color13 === ('white')) {
      setColor13('red');
      // number.slice(3)
    }
  }

  const change21 = () => {
    if (color21 === ('white')) {
      setColor21('red');
      // number.slice(4)
    }
  }
  const change22 = () => {
    if (color22 === ('white')) {
      setColor22('red');
      // number.slice(5)
    }
  }
  const change23 = () => {
    if (color23 === ('white')) {
      setColor23('red');
      // number.slice(6)
    }
  }

  const change31 = () => {
    if (color31 === ('white')) {
      setColor31('red');
      // number.slice(1)
    }
  }
  const change32 = () => {
    if (color32 === ('white')) {
      setColor32('red');
      // number.slice(2)
    }
  }
  const change33 = () => {
    if (color33 === ('white')) {
      setColor33('red');
      // number.slice(3)
    }
  }

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
    <View>
      <Text>Hello, 3x3 is here</Text>
      <View>
        <Text>{route.params.name}</Text>
      </View>
      <TouchableOpacity onPress={() => {
        reset()
      }} >
        <Text>reset</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={[styles.numb11, { backgroundColor: color11 }]}
          onPress={() => {
            if (color11 === ('white')) {
              change11()
              handleEnemy()
            }
          }}
        />
        <TouchableOpacity style={[styles.numb12, { backgroundColor: color12 }]}
          onPress={() => {
            if (color12 === ('white')) {
              change12()
              handleEnemy()
            }
          }}
        />
        <TouchableOpacity style={[styles.numb13, { backgroundColor: color13 }]}
          onPress={() => {
            if (color13 === ('white')) {
              change13()
              handleEnemy()
            }
          }}
        />
      </View>


      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={[styles.numb21, { backgroundColor: color21 }]}
          onPress={() => {
            if (color21 === ('white')) {
              change21()
              handleEnemy()
            }
          }}
        />
        <TouchableOpacity style={[styles.numb22, { backgroundColor: color22 }]}
          onPress={() => {
            if (color22 === ('white')) {
              change22()
              handleEnemy()
            }
          }}
        />
        <TouchableOpacity style={[styles.numb23, { backgroundColor: color23 }]}
          onPress={() => {
            if (color23 === ('white')) {
              change23()
              handleEnemy()
            }
          }}
        />
      </View>


      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={[styles.numb31, { backgroundColor: color31 }]}
          onPress={() => {
            if (color31 === ('white')) {
              change31()
              handleEnemy()
            }
          }}
        />
        <TouchableOpacity style={[styles.numb32, { backgroundColor: color32 }]}
          onPress={() => {
            if (color32 === ('white')) {
              change32()
              handleEnemy()
            }
          }}
        />
        <TouchableOpacity style={[styles.numb33, { backgroundColor: color33 }]}
          onPress={() => {
            if (color33 === ('white')) {
              change33()
              handleEnemy()
            }
          }}
        />
      </View>
    </View>
  );
};

export default Screen3x3;

const styles = StyleSheet.create({
  numb11: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderRightWidth: 2
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
    borderRightWidth: 2
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
