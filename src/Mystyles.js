import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2

  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  button: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

});

export const stylesForNav = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#666699',
    paddingBottom:10
  },
  btnStl:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff9966',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 5,
    paddingHorizontal: 4
  },
  btntxt: {
    marginTop: 5,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'parnas-deco',
    color: 'white',
  },
  headerStyle:{backgroundColor: 'red'},
  headerTitleStyle:{color: 'black'},
})

export const stylesForTodo = StyleSheet.create({
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})