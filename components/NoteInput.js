import React, {useState} from 'react'
import {View, TextInput, StyleSheet, Button} from 'react-native'

export default function NoteInput(props) {
    const [note, setNote] = useState('');

    const enteredNoteHandler = (enteredNote)=> {
        setNote(enteredNote);
    }

    const addingNewNote = ()=> {
        props.addNew(note);
        setNote("");
    }

    return (
    <View style={styles.inputView}>
        <TextInput
          onChangeText={enteredNoteHandler}
          placeholder="Enter Note"
          style={styles.inputForm}
          value={note}
        />
        <Button title="Add Note" onPress={addingNewNote}/>
    </View>
    )
}

const styles = StyleSheet.create({
    inputView: {
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems: 'center',
        marginVertical: 10,
        color: "white"
      },
      inputForm:{
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        width: "70%",
        color: "white"
      }
})