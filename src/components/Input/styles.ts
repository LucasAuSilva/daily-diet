import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

type Props = {
  isFocus: boolean
}

export const InputContainer = styled.View`
  flex: 1;

  min-height: 80px;
  max-height: 80px;

  width: 100%;

  gap: 4px;
  padding: 0;
`

export const InputLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm};
    color: ${theme.colors.gray_2};
  `}
`

export const Entry = styled(TextInput).attrs(({ theme }) => ({
  cursorColor: theme.colors.gray_1
}))<Props>`
  border-radius: 6px;

  padding: 14px 14px;

  ${({ theme, isFocus }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md};
    color: ${theme.colors.gray_1};
    border: 1px solid ${isFocus
      ? theme.colors.gray_3
      : theme.colors.gray_5};
  `}

`
