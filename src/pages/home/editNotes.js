import React, { useEffect } from 'react'
import { useDeleteNotes, useFetchNotes, useUpdateNotes } from '../../modules/notes/notesHooks';
import { Button, Divider, Icon, IconButton, Modal, Portal, Text, TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import { View } from 'react-native';

const EditNotes = ({ visibility, hideModal, notesValue}) => {
    const { loading: loadingFetch, error: errorFetch, data: dataFetch, fetchNotes } = useFetchNotes();
    const { loading, error, data, updateNotes } = useUpdateNotes();
    const {deleteNotes} = useDeleteNotes();

    const containerStyle = {
        backgroundColor: 'white',
        padding: 30,
        margin: 30,
        borderRadius: 10,
    };

    let initialValues = {
        title: '',
        content: '',
    }

    if (notesValue) {
        initialValues = {
            title: notesValue.title,
            content: notesValue.content,
        }
    }

    // useEffect(() => {
    //     if (data) {
    //         fetchNotes();
    //         hideModal();
    //     } else if (error) {
    //         alert("Error in updating notes");
    //     }
    // }, [data, error]);

    const notesUpdate = (values) => {
        const data = {
            id: notesValue._id,
            title: values.title,
            content: values.content,
        }
        updateNotes(data);
    }

    return (
        <Portal>
            <Modal visible={visibility} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Text
                    variant='titleLarge'
                    style={{
                        color: '#000',
                    }}
                >
                    Update Notes
                </Text>
                <Divider style={{
                    marginTop: 10,
                    marginBottom: 10,
                    backgroundColor: '#A9A9A9',
                }} />
                {/* create a form which contains text input for title and content and a button */}
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => notesUpdate(values)}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                    }) => (
                        <>
                            <TextInput
                                label="Title"
                                mode='outlined'
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                                value={values.title}
                                style={{
                                    marginBottom: 10,
                                    backgroundColor: '#fff',
                                }}
                                activeOutlineColor='gray'
                                textColor='#000'
                            />
                            <TextInput
                                label="Content"
                                multiline
                                mode='outlined'
                                onChangeText={handleChange('content')}
                                onBlur={handleBlur('content')}
                                value={values.content}
                                style={{
                                    marginBottom: 10,
                                    backgroundColor: '#fff',
                                    height: 100,
                                }}
                                activeOutlineColor='gray'
                                textColor='#000'
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <IconButton
                                    icon='delete'
                                    size={30}
                                    iconColor="red"
                                    mode="contained"
                                    style={{
                                        //transparent background
                                        backgroundColor: 'transparent',
                                    }}
                                    onPress={() => {
                                        deleteNotes(notesValue._id);
                                        fetchNotes();
                                        hideModal();
                                    }}
                                />
                                <Button
                                    mode="contained"
                                    loading={loading}
                                    style={{
                                        backgroundColor: '#F4F27E',
                                        marginTop: 10,
                                    }}
                                    onPress={handleSubmit}
                                >
                                    Update
                                </Button>
                            </View>
                           
                        </>
                    )}
                </Formik>
            </Modal>
        </Portal>
    )
}

export default EditNotes
