import {StyleSheet} from 'react-native';

export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    width: '100%',
    padding: 20,
  },
  containerTexts: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  biggerText: {
    fontWeight: 'bold',
    fontSize: 40,
  },
});
