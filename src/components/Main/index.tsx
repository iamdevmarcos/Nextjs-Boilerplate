import * as S from './styles'

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'TypeScript, React.js, Next.js e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de um átomo." />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    <S.Illustration
      src="/img/hero-illustration.gif"
      alt="Um laptop ao lado de uma copo de café"
    />
  </S.Wrapper>
)

export default Main
