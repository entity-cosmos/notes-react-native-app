import { Formik } from 'formik';
import React, { useEffect } from 'react'
import { Button, Divider, Modal, Portal, Text, TextInput } from 'react-native-paper';
import { useCreateNotes, useFetchNotes } from '../../modules/notes/notesHooks';

const CreateNotes = ({ visibility, hideModal }) => {
    const { loading, error, data, createNotes } = useCreateNotes();
    const { loading: loadingFetch, error: errorFetch, data: dataFetch, fetchNotes } = useFetchNotes();
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
    useEffect(() => {
        if (data) {
            fetchNotes();
            hideModal();
        } else if (error) {
            alert("Error in creating notes");
        }
    }, [data, error]);

    const notesCreate = (values) => {
        console.log("values", values);
        const data = {
            title: values.title,
            content: values.content,
        }
        createNotes(data);
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
                    Create Notes
                </Text>
                <Divider style={{
                    marginTop: 10,
                    marginBottom: 10,
                    backgroundColor: '#A9A9A9',
                }} />
                {/* create a form which contains text input for title and content and a button */}
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => notesCreate(values)}
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
                            <Button
                                mode="contained"
                                loading={loading}
                                style={{
                                    backgroundColor: '#F4F27E',
                                    marginTop: 10,
                                }}
                                onPress={handleSubmit}
                            >
                                Create
                            </Button>
                        </>
                    )}
                </Formik>
            </Modal>
        </Portal>
    )
}

export default CreateNotes
