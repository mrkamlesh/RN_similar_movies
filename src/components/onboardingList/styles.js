import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    height: '10%',
    width: '100%',
    alignItems: 'center'
  },
  buttonWrapper: {
    width: '60%',
    borderRadius: 50,
    height: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: '100%'
  }
})
export default styles
