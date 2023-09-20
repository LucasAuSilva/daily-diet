import { TouchableOpacity } from 'react-native'

import styled, { css, DefaultTheme } from 'styled-components/native'

export type SelectTypeStyleProps = 'Yes' | 'No' 

type Props = {
  isSelected?: boolean
  type: SelectTypeStyleProps
}

type StatusLightProps = {
  type: SelectTypeStyleProps
}

const backgroundColorVariant =  (
  themes: DefaultTheme,
  type: SelectTypeStyleProps,
  isSelected?: boolean
) => {
   if (isSelected) {
    return type === 'Yes'
      ? `background-color: ${themes.colors.green_light}`
      : `background-color: ${themes.colors.red_light}`
   }
   return `background-color: ${themes.colors.gray_6}`
}

const borderColorVariant =  (
  themes: DefaultTheme,
  type: SelectTypeStyleProps,
  isSelected?: boolean
) => {
   if (isSelected) {
    const baseBorder = 'border: 1px solid'
    return type === 'Yes'
      ? `${baseBorder} ${themes.colors.green_dark}`
      : `${baseBorder} ${themes.colors.red_dark}`
   }
   return ``
}

export const SelectContainer = styled(TouchableOpacity)<Props>`
  flex: 1;
  gap: 8px;

  padding: 16px;
  ${({ theme, type, isSelected }) =>
    backgroundColorVariant(theme, type, isSelected)};
  ${({ theme, type, isSelected }) =>
    borderColorVariant(theme, type, isSelected)};

  border-radius: 6px;

  flex-direction: row;

  align-items: center;
  justify-content: center;

  text-align: center;
`

export const SelectLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm};
    color: ${theme.colors.gray_1};
  `}
`

export const SelectStatusLight = styled.View<StatusLightProps>`
  border-radius: 100px;

  min-height: 8px;
  max-height: 8px;

  max-width: 8px;
  min-width: 8px;

  background-color: ${({ theme, type }) => type === 'Yes'
    ? theme.colors.green_dark
    : theme.colors.red_dark}
`

