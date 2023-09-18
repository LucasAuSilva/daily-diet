import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts
} from '@expo-google-fonts/nunito-sans';

import { Home } from '@/screens/Home';
import { Loading } from '@/components/Loading';
import { theme } from '@/themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      {!fontsLoaded
        ? <Loading />
        : <Home />
      }
    </ThemeProvider>
  );
}

