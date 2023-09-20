import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native'

export const NewMealContainer = styled.View`
  flex: 1;
  position: relative;
`

export const NewMealMainContainer = styled(SafeAreaView)`
  flex: 1;

  position: absolute;
  top: 104px;

  padding: 0px 24px;

  background-color: ${({ theme }) => theme.colors.gray_7};

  border-radius: 20px 20px 0px 0px;
  box-shadow: 100px 100px 30px #000000;

  width: 100%;
  height: 88%;
`

export const FormContainer = styled.View`
  flex: 1;

  align-items: center;

  gap: 24px;
`

export const SideInputsContainer = styled.View`
  flex-direction: row;

  gap: 20px;
`
