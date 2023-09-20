import { Label, StatusLight, StatusLightTypeStyleProps, TagContainer } from "./styles"

type Props = {
  label: string
  type?: StatusLightTypeStyleProps
}

export const Tag = ({ label, type = 'Yes' }: Props) => {
  return (
    <TagContainer>
      <StatusLight
        type={type}
      />
      <Label>{label}</Label>
    </TagContainer>
  )
}
