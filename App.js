import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity ,TextInput} from 'react-native';
import AppHeader from './components/AppHeader';

export default class App extends React.Component{
  render(){
    return (
      <View>
        <AppHeader/>

        <TextInput
        style={styles.searchBox}
        />

        <TouchableOpacity
        style={styles.searchButton}
        onPress={()=>{
          var meaningUri = 'https://whitehat-dictionary.glitch.me/?word=';
          <Text
          style={styles.meaning}>
            {meaningUri}
          </Text>
        }}
        >

          <Text
          style={styles.SearchText}>
            Search
          </Text>

        </TouchableOpacity>

      </View>
    );
  }
 
}

const styles ={
  searchBox:{
    borderWidth: 7,
    width: '90%',
    height: 50,
    marginLeft: 20,
    marginTop: 50
  },
  searchButton:{
    marginTop: 20,
    marginLeft: 100,
    borderWidth: 2,
    width: '50%',
    height: 40
  },
  SearchText:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  meaning:{
    marginLeft: 50,
    marginTop: 50
  }
}