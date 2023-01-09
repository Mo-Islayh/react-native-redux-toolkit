import React from 'react';
import {GlobalStyle} from '../styles/globalStyle';
import {useSelector} from 'react-redux';
import {Button, Text, View} from 'react-native';
import Wrapper from '../Components/Wrapper';

const HomeScreen = ({navigation}) => {
  const {name} = useSelector(state => state.user);

  return (
    <Wrapper>
      <View style={GlobalStyle.container}>
        <Text>Current User Name is</Text>
        <Text style={GlobalStyle.biggerText}>{name}</Text>
      </View>

      <Button
        title="Edit User Name"
        onPress={() => {
          navigation.navigate('Edit User Name');
        }}
      />
    </Wrapper>
  );
};

export default HomeScreen;
