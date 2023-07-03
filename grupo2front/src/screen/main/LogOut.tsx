import { useNavigation } from '@react-navigation/native'
import { FC, useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from './AuthContext'

interface Props {
}

export const LogOut:FC <Props> = () => {

  const { logOut } = useContext(AuthContext);
  const navigation = useNavigation();
 return (
   <View>
   <Text>Salir</Text>
   <Button
    title='Adios...'
    onPress={logOut}
   />
   </View>
 )
}