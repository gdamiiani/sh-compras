import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 50,
    paddingVertical: 20,

    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',

  },

  view: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  text: {
    fontSize: 15,
  },

  input: {
    paddingHorizontal: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
