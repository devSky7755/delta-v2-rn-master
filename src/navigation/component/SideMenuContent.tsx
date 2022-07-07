import React, { useState } from 'react'
import { StyleSheet, Switch, Text, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons'
import { modeStore } from '../../../src/module/mode/ModeStore'
import CustomSwitch from '../../component/CustomSwitch';

type Props = {
  type: boolean | undefined
}

const SideMenuContent = ({ type }: Props) => {
  const [isEnabled, setIsEnabled] = useState(type);
  const onSelectSwitch = (index: boolean) => {
    if (type == false) {
      modeStore.setMode('CF');
    }
    else {
      modeStore.setMode('MC');
    }
    setIsEnabled(previousState => !previousState);
  };
  const toggleSwitch = () => {
    if (type == false) {
      modeStore.setMode('CF');
    }
    else {
      modeStore.setMode('MC');
    }
    setIsEnabled(previousState => !previousState);
  }

  return (
    <LinearGradient colors={['#223346', '#505f6e', '#76848f']} style={styles.sidebarContainer}>
      {/* <Text style={{ color: 'white', fontSize: 22, marginTop: 80 }}>
        DELTA PARTNERS
      </Text> */}

      <Image
        style={styles.logoImg}
        source={require('../../img/logo.png')}
      />
      <View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
        <Text style={{ color: '#fc9824', fontSize: 14, fontWeight: 'bold', marginTop: '12vh', marginBottom: '4vh', padding: 0 }}>
          MENU
        </Text>
        <View style={{ flexDirection: 'row', padding: 5, width: '100%' }}>
          <Text style={isEnabled
            ? [{ color: '#7b8994' }, styles.switchLabel, styles.col, styles.textRight, { marginRight: 10 }]
            : [{ color: 'white' }, styles.switchLabel, styles.col, styles.textRight, { marginRight: 10 }]
          }>PIPE MC</Text>
          <View style={{ alignItems: 'center', margin: 0, justifyContent: 'center' }}>
            <CustomSwitch
              selectionMode={isEnabled!}
              roundCorner={true}
              onSelectSwitch={onSelectSwitch}
              selectionColor={'#ffffff'}
            />
          </View>
          {/* <Switch
            trackColor={{ false: "#ffffff", true: "#ffffff" }}
            thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
            ios_backgroundColor="#ffffff"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ height: 30 }}
          /> */}
          <Text style={!isEnabled
            ? [{ color: '#7b8994' }, styles.switchLabel, styles.col, styles.textLeft, { marginLeft: 10 }]
            : [{ color: 'white' }, styles.switchLabel, styles.col, styles.textLeft, { marginLeft: 10 }]
          }>PIPE CF</Text>
        </View>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 600, padding: 12 }}>
          ACC MEMBERS
        </Text>
        <View style={{ flexDirection: 'row', padding: 10, paddingTop: 5, display: 'flex', justifyContent: 'center' }}>
          <FontAwesome5 name="sign-out-alt" size={12} color='#7C8A95' style={{ marginVertical: 2 }} />
          <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', paddingLeft: 5 }}>LOG OUT</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 14 }}>
        <Text style={{ color: 'white', fontSize: 12 }}>
          2017 Copyright © &nbsp;
        </Text>
        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
          Delta Partners Group
        </Text>
      </View>
    </LinearGradient>
  );
};

export default SideMenuContent;

// #223346
// #505F6E
// #76848F

const styles = StyleSheet.create({
  sidebarContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 0
  },
  logoImg: {
    marginTop: '103px',
    marginBottom: '4vh',
    width: '70%',
    height: '14.48px',
    resizeMode: 'stretch',
  },
  switchLabel: {
    fontSize: 18,
    fontWeight: 600,
    margin: 5,
  },
  textRight: {
    textAlign: 'right',
  },
  textLeft: {
    textAlign: 'left',
  },
  col: {
    flex: 1,
    padding: 5,
    width: '100%',
  },
  welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    color: 'red',
  },
  instructions: {
    marginBottom: 3
  }
});