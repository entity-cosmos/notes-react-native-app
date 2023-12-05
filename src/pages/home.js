import React, { useEffect, useState } from "react";
import { useFetchNotes } from "../modules/notes/notesHooks";
import { ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { Divider, IconButton } from "react-native-paper";
import HomeCard from "./home/homeCard";
import CreateNotes from "./home/createEditNotes";

const Home = () => {
    const { loading, data, fetchNotes } = useFetchNotes();
    const [modalVisible, setModalVisible] = useState(false);

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
                        onPress={() => { setModalVisible(true) }}
                    />
                </View>
            </View>
            <Divider style={{
                marginTop: 10,
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 20,
                backgroundColor: '#A9A9A9',
            }} />
            <View
                style={{
                    flexDirection: 'row',
                    //i want only 2 cards in a row
                    flexWrap: 'wrap',
                    gap: 10,
                    // justifyContent: 'space-between',
                    marginLeft: 30,
                    marginRight: 30,
                }}
            >
                {!loading && data && data.map((note, i) => (
                        <HomeCard key={i} notes={note} />
                ))}
            </View>
            <CreateNotes
                visibility={modalVisible}
                hideModal={() => setModalVisible(false)} 
                title={"Create Notes"}
                mode={"Create"}
                btnText={"Create"}
                />

        </ScrollView>

    )
}

export default Home;