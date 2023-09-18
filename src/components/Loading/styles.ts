import styled from "styled-components/native";

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray_7}
`

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.green_dark
}))`
`
