import 'react-native';
import React, { useCallback, useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableHighlight,
  Switch
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SignInUpLayout, SignInUpLayoutBody } from '../../component/Authen-layout';
import { useFocusEffect } from '@react-navigation/native';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = ({ navigation }) => {
  // const onFocusEffect = () => {
  //   AvoidSoftInput.setAdjustPan()
  //   AvoidSoftInput.setEnabled(true)
  //   return () => {
  //     AvoidSoftInput.setEnabled(false)
  //     AvoidSoftInput.setAdjustResize()
  //   }
  // }
  // useFocusEffect(onFocusEffect)
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SignInUpLayout>
      <SignInUpLayoutBody>
        <Text style={styles.titleStyle}>Login to your Account</Text>
        <View style={styles.formFieldGroupStyle}>
          <View>
            <TextInput style={styles.textInputStyle} placeholder='Username' />
            <Text style={styles.errorInputStyle}>Invalid username</Text>
          </View>
          <View>
            <TextInput style={styles.textInputStyle} placeholder='Password' />
            <Text style={styles.errorInputStyle}>Invalid password</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 4 }}>
            <Switch
              style={{ alignSelf: 'flex-start', transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
              trackColor={{ false: '#767577', true: '#7CD367' }}
              thumbColor={'#EEEEEE'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            ></Switch>
            <Text style={{fontSize: 18}}>Remember me</Text>
          </View>
          <TouchableHighlight style={styles.buttonResgisterStyle} underlayColor="#461CF0" onPress={() => { navigation.reset({ index: 0, routes: [{ name: 'Gender' }] }) }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Sign in</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={{ flexDirection: 'row', columnGap: 5, alignItems: 'center', marginBottom: 10 }}>
          <View style={[styles.Line, { flex: 1 }]} />
          <Text style={{fontSize: 20, color: '#15186D' }}>Or sign up with</Text>
          <View style={[styles.Line, { flex: 1 }]} />
        </View>
        <View style={styles.buttonLoginWithGroupStyle}>
          <TouchableOpacity>
            <Icon name='google' size={45} color="#fb2d2d"></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='facebook' size={45} color="#1877F2"></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='apple' size={45} color="#050708"></Icon>
          </TouchableOpacity>
        </View>
        <View style={{ flexGrow: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', columnGap: 5 }}>
            <Text style={{ textAlign: 'center' , fontSize: 18}}>Don’t have an account?</Text>
            <TouchableOpacity><Text style={{ fontWeight: 'bold', fontSize: 18}} onPress={() => { navigation.navigate('Register') }}>Signup</Text></TouchableOpacity>
          </View>
        </View>
      </SignInUpLayoutBody>
    </SignInUpLayout>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    textAlign: 'left',
    fontWeight: 'bold',
    width: '70%',
    color: 'black',
    marginHorizontal: 20,
    fontSize: 40,
  },
  subTitleStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonLoginWithGroupStyle: {
    justifyContent: 'center',
    columnGap: 60,
    flexDirection: 'row',
  },
  buttonLoginWithStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  buttonResgisterStyle: {
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 50,
    backgroundColor: '#461CF0',
    marginBottom: 40,
    marginTop: 10
  }, 
  textInputStyle: {
    backgroundColor: '#E6E6E6',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 17,
    color: 'black'
  },
  errorInputStyle: {
    paddingHorizontal: 15,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 2
  },
  formFieldGroupStyle: {
    flexDirection: 'column',
    height: '50%',
    rowGap: 20,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  Line: {
    borderBottomColor: "#15186D",
    borderBottomWidth: 1
  },
})

export default Login