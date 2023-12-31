import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts
} from '@expo-google-fonts/nunito-sans';

import { theme } from '@/themes';
import { Routes } from '@/routes';
import { Loading } from '@/components/Loading';

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
        : <Routes />
      }
    </ThemeProvider>
  );
}

