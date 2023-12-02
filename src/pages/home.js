import React, { useEffect, useState } from "react";
import { useFetchNotes } from "../modules/notes/notesHooks";
import { ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Text, Button } from "react-native";
import { Plus } from "react-feather";
import { TouchableOpacity } from "react-native";
import { Divider, IconButton } from "react-native-paper";

const Home = () =>{
    const { loading, data, fetchNotes } = useFetchNotes();

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <ScrollView style={'styles.container'}>
            <StatusBar style="dark" />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 50,
                paddingRight: 50,
                paddingTop: 50,
            }}>
                <View>
                    <Text
                        style={{
                            fontSize: 50,
                            fontWeight: 'bold'
                        }}
                    >
                    Notes
                    </Text>
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                <IconButton
                    icon='plus'
                    size={30}
                    iconColor="#000"
                    mode="contained"
                    style={{
                        backgroundColor: '#F4F27E',
                    }}
                    onPress={() => alert('Pressed')}
                />
                </View>
            </View>
                <Divider style={{
                    marginTop: 10,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 20,
                    //dark grey
                    backgroundColor: '#A9A9A9',
                }} />
            <View>
            {!loading && data && data.map((note, i) => (
                <Text
                    key={i}
                >
                    {note.title}
                </Text>
            ))}
            </View>
            {loading && <Text>Loading...</Text>}
        </ScrollView>
    )
}

export default Home;