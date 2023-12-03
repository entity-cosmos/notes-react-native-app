import React from 'react'
import { View } from 'react-native'
import { Divider, Text } from 'react-native-paper'

const HomeCard = ({ notes, i }) => {
  return (
    <View
      key={i}
      style={{
        padding: 20,
        marginBottom: 20,
        backgroundColor: '#F4F27E',
        borderRadius: 10,
      }}>
      <Text
        variant="titleMedium"
        style={{
          color: '#000',
        }}
      >
        {notes.title}
      </Text>
      <Divider style={{
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#A9A9A9',
      }} />
      <Text
        variant="bodyMedium"
        style={{
          color: '#000',
        }}>
        {notes.content}
      </Text>
    </View>

  )
}

export default HomeCard
