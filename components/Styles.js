import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2eee5',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '25%',
    height: '100%',
  },
  square: {
    borderWidth: 7,
    width: 100,
    height: 100,
    padding: 6,
    borderColor: '#e5c1c5',
  },
  playerX: {
    fontSize: 75,
    color: '#6eceda',
  },
  playerO: {
    fontSize: 75,
    color: '#c3e2dd',
  },
  header: {
    justifyContent: 'center',
    backgroundColor: '#c3e2dd',
    alignItems: 'center',
    height: 130,
    paddingTop: 50,
    position: 'relative',
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#f2eee5',
  },
});

export default styles;
