
import { FC } from 'react'
import { useController } from 'react-hook-form'
import { TextInput } from 'react-native'

interface Props {
    name: string,
    label: string,
    control: any
}

export const Input:FC <Props> = ({ control, name , label }) => {

    const { field } = useController({
        control,
        defaultValue: "",
        name
    })


 return (
   <>
   <TextInput
    id={name}
    value={field.value}
    onChangeText={field.onChange}
    placeholder={label}
    className='m-2 p-2 border border-sky-300 border-solid rounded-lg text-black'
   />
   </>
 )
}