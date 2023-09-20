import { SafeAreaView } from 'react-native-safe-area-context';

import styled, { css } from 'styled-components/native'

export const FeedbackContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;

  gap: 32px;
`

export const Image = styled.Image`
  width: 224px;
  height: 288px;
`

export const Highlight = styled.View`
  width: 100%;
  gap: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.xl};
    color: ${theme.colors.green_dark};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.xl};
    color: ${theme.colors.green_dark};
  `}
`
