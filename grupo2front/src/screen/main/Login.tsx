import AsyncStorage from '@react-native-async-storage/async-storage'
import { FC, useContext } from 'react'
import { useForm } from "react-hook-form"
import { Button, ScrollView, Text, View } from 'react-native'
import { Input } from '../../components/Input'
import { useBasicAuth } from '../../hooks/useBasicAuth'
import { AuthContext } from './AuthContext'


interface Props {

}

export const Login: FC<Props> = () => {

  const { handleSubmit, register, getValues, control } = useForm();

  const { signIn } = useContext(AuthContext);


  const onSubmit = async () => {
    const { token } = await useBasicAuth(getValues("username"), getValues("password"))

    if (token) {
      AsyncStorage.setItem("token", token)
      signIn();

    }
  }

  return (
    <>

      <View className='flex grow justify-center'>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text className='font-bold text-center text-red-800 text-3xl'>Bienvenida</Text>
          <Text className='text-black'>Usuario:</Text>
          <Input name='username' label='Ingrese su usuario' control={control} />
          <Text className='text-black'>Password:</Text>
          <Input name="password" label='Su contraseña' control={control} />
          <Button
            title='Login'
            onPress={handleSubmit(onSubmit)}
          />
        </ScrollView>

      </View>

    </>


  )
}