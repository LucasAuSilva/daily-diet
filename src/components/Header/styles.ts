import { TouchableOpacity } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'

import styled, { DefaultTheme, css } from 'styled-components/native'

export type HeaderTypeStyleProps = 'Primary' | 'Secondary' | 'Default'

type Props = {
  isHighlight: boolean
  type: HeaderTypeStyleProps
}

const backgroundColorVariants = (theme: DefaultTheme, type: HeaderTypeStyleProps) => {
  switch(type) {
    case 'Primary':
      return theme.colors.green_light
    case 'Secondary':
      return theme.colors.red_light
    default:
      return theme.colors.gray_5
  }
}

export const HeaderContainer = styled.View<Props>`
  width: 100%;
  ${({ isHighlight }) => isHighlight
    ? `max-height: 200px;
       min-height: 200px;`
    : `max-height: 132px;
       min-height: 132px;`}

  position: relative;
  justify-content: center;
  align-items: center;

  flex-direction: row;
  
  background-color: ${({ theme, type }) => 
      backgroundColorVariants(theme, type)};
`

export const Title = styled.Text`
${({ theme }) => css`
  font-family: ${theme.fontFamily.bold};
  font-size: ${theme.fontSize.lg};
  color: ${theme.colors.gray_1};
`}
`

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 24px;
`

export const BackIcon = styled(ArrowLeft)`
`

