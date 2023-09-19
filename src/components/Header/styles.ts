import { TouchableOpacity } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'

import styled, { css } from 'styled-components/native'

export type HeaderTypeStyleProps = 'Primary' | 'Secondary'

type Props = {
  isHighlight: boolean
  type: HeaderTypeStyleProps
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
    type === 'Primary'
      ? theme.colors.green_light
      : theme.colors.red_light};
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

