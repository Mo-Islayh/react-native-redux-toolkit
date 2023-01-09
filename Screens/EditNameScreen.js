import {Button, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheName} from '../redux/userSlice';
import {GlobalStyle} from '../styles/globalStyle';
import * as React from 'react';
import Wrapper from '../Components/Wrapper';

export default function EditNameScreen({navigation}) {
  const dispatch = useDispatch();
  const {name} = useSelector(state => state.user);
  const [value, setValue] = React.useState('');

  return (
    <Wrapper>
      <View style={GlobalStyle.container}>
        <TextInput
          style={GlobalStyle.input}
          onChangeText={e => {
            setValue(e);
          }}
        />
        <Button
          title={'Submit'}
          onPress={() => {
            if (!value) {
              return;
            }

            dispatch(changeTheName(value));
            navigation.goBack();
          }}
        />
        <View style={GlobalStyle.containerTexts}>
          <Text>The Name is: {name}</Text>
        </View>
      </View>
    </Wrapper>
  );
}
