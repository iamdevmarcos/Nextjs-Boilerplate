import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de um átomo." />

    <S.Title>Next.js Boilerplate</S.Title>
    <S.Description>
      TypeScript, React.js, Next.js e Styled Components
    </S.Description>

    <S.Illustration
      src="/img/hero-illustration.gif"
      alt="Um laptop ao lado de uma copo de café"
    />
  </S.Wrapper>
)

export default Main
