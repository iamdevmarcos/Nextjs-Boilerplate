import * as S from './avatar.styles'

export type AvatarProps = {
  source: string
  alternativeText: string
  title: string
}

const Avatar = ({ source, alternativeText, title }: AvatarProps) => (
  <>
    <S.Img src={source} alt={alternativeText} />
    <p>{title}</p>
  </>
)

export default Avatar
