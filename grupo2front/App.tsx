import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/screen/main/MainStack';



interface Props {
}

const App:FC <Props> = () => {
 return (
   <>
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
   </>
 )
}

export default App;