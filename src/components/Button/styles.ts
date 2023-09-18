import * as Icon from "phosphor-react-native"
import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"

export type ButtonTypeStyleProps = 'Filled' | 'Outline'

type Props = {
  type: ButtonTypeStyleProps
}

export const ButtonContainer = styled(TouchableOpacity)<Props>`
  width: 100%;
  border-radius: 6px;

  padding: 24px 16px;
  ${({ theme, type }) => css`
    background-color: ${type === 'Filled'
      ? theme.colors.gray_2
      : 'transparent'};
    ${type === 'Filled' ? ''
      : `border: ${theme.colors.gray_1};`}
  `}


  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 12px;
`


export const ButtonLabelStyle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm};
  `}
`

export const ButtonLabel = styled(ButtonLabelStyle)<Props>`
  color: ${({ theme, type }) => type === 'Filled'
    ? theme.colors.white
    : theme.colors.gray_1};
`

export const IconPlus = styled(Icon.Plus).attrs<Props>(({ theme, type }) => ({
  color: type === 'Filled'
    ? theme.colors.white
    : theme.colors.gray_1,
  size: 18
}))``

export const IconTrash = styled(Icon.Trash).attrs<Props>(({ theme, type }) => ({
  color: type === 'Filled'
    ? theme.colors.white
    : theme.colors.gray_1,
  size: 18
}))``

export const IconPencilSimpleLine = styled(Icon.PencilSimpleLine).attrs<Props>(({ theme, type }) => ({
  color: type === 'Filled'
    ? theme.colors.white
    : theme.colors.gray_1,
  size: 18
}))``
