import React from 'react'
import { ScrollView, View } from 'react-native'

const HomeCard = ({notes,i}) => {
    if(notes){
        alert(notes)
    }
  return (
      <ScrollView>
        {
              notes && <Text key={i}>{notes.title}</Text>
      
        }
    </ScrollView>
  )
}

export default HomeCard
