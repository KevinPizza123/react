import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Button, Text, View } from 'react-native'

interface Props {
}

export const ClienteLista: FC<Props> = () => {

  const nav = useNavigation();

  return (
    <View>
      <Text> {/* Text = <p></p> */}
        Lista de clientes
      </Text>
      <Button
        title='Nuevo'
        onPress={() => nav.navigate("ClienteForm" as never)}
      />
    </View>

  )
}