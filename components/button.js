import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES,COLORS,FONTS,SHADOWS } from '../constants'

          <View style={{height: 300 ,backgroundColor : COLORS.primary}}/>
          export const CircleButton = ({imageUrl,handlePress,...props}) => {
  return (
    <TouchableOpacity
      style={{
        width : 40,
        height : 40,
        backgroundColor : COLORS.white,
        position : 'absolute',
        borderRadius : SIZES.extraLarge,
        alignItems : 'center',
        justifyContent : 'center',
        ...SHADOWS.light,
        ...props

      }}
      onPress={handlePress}
      >
        <Image source={imageUrl} resizeMode="contain" style={{width : 20,height : 20}}/>
    </TouchableOpacity>
  )
}

