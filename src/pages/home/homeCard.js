import React, { useState } from 'react'
import { View } from 'react-native'
import { Card, Divider, Text } from 'react-native-paper'
import CreateNotes from './createEditNotes';
import EditNotes from './editNotes';

const HomeCard = ({ notes, i }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Card 
      key={i}
      onPress={() => setModalVisible(true)}
      style={{
        marginBottom: 20,
        backgroundColor: '#F4F27E',
        borderRadius: 10,
        width: '48%',
    }}>
      {/* <Card.Title title={notes.title} titleVariant='titleMedium' titleStyle={{
        color: '#000',
      }} /> */}
      <Card.Content>
        <Text variant='titleMedium' style={{color: '#000'}}>{notes.title}</Text>
        <Divider style={{
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: '#A9A9A9',
        }} />
        <Text variant='bodyMedium' style={{color: '#000'}}>{notes.content}</Text>
        <EditNotes
          visibility={modalVisible}
          hideModal={() => setModalVisible(false)}
          notesValue={notes}
          />
      </Card.Content>
      
    </Card>

  )
}

export default HomeCard
