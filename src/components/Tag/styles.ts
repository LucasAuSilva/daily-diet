import styled, { css } from 'styled-components/native'

export type StatusLightTypeStyleProps = 'Yes' | 'No'

type Props = {
  type: StatusLightTypeStyleProps
}

export const TagContainer = styled.View`
  padding: 16px 8px;
  gap: 8px;

  flex-direction: row;

  align-items: center;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.sm};
    color: ${theme.colors.gray_1};
  `}
`

export const StatusLight = styled.View<Props>`
  min-height: 8px;
  max-height: 8px;

  min-width: 8px;
  max-width: 8px;

  border-radius: 100px;

  background-color: ${({ theme, type }) =>
    type === 'Yes'
      ? theme.colors.green_dark
      : theme.colors.red_dark
  };
`
