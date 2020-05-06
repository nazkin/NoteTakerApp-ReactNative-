import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput, ScrollView } from 'react-native';
import Input from './components/NoteInput';

export default function App() {

  const [allNotes, setAllNotes] = useState([]);


  const addNewNote = (note)=> {
    setAllNotes(currentNotes => [...currentNotes, note]);
  }
  const clearListHandler = ()=> {
    setAllNotes([]);
  }

  const img = {uri: "https://images.unsplash.com/photo-1583784578816-944a7c3626b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80"};
  return (

      <ImageBackground source={img} style={styles.image}>
        <View style={styles.container}>
          <Input addNew={addNewNote}/>
          <ScrollView style={styles.displayNotes}>
            {allNotes.map(txt=> <Text style={styles.listItem} key={Math.random().toString()}>{txt}</Text>)}
          </ScrollView>
          <Button title="clear" color="red" onPress={clearListHandler}/>
        </View>
      </ImageBackground> 
 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    opacity: 0.9,
    padding: 5,
    color: "white"
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20
  },
  displayNotes: {
    backgroundColor: "white", 
    marginBottom: 30
  },
  listItem:{
    padding: 5,
    margin: 5,
    backgroundColor: "black",
    color: "white",
    borderColor: "#ccc",
    borderWidth: 1
  }
});