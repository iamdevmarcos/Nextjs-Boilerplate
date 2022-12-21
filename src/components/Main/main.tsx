import Avatar from 'components/Avatar/avatar'

import * as S from './main.styles'

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'TypeScript, React.js, Next.js e Styled Components'
}) => (
  <S.Wrapper>
    <S.Flex>
      <S.Link href="https://nextjs.org/" target="_blank">
        <S.Logo src="/img/nextjs.svg" alt="Nextjs Logo" />
      </S.Link>

      <S.Link href="https://reactjs.org/" target="_blank">
        <S.Logo src="/img/react.svg" className="react" alt="React Logo" />
      </S.Link>
    </S.Flex>

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    <S.LearnMore>Click on the Next and React logos to learn more</S.LearnMore>

    <S.Footer>
      Created by{' '}
      <S.Link href="https://github.com/iamdevmarcos" target="_blank">
        <Avatar
          source="https://avatars.githubusercontent.com/u/92524722?v=4"
          alternativeText="Marcos Mendes Avatar"
          title="Marcos Mendes"
        />
      </S.Link>
      and deployed on
      <S.Link href="https://vercel.com/" target="_blank">
        <Avatar
          source="https://avatars.githubusercontent.com/u/14985020?v=4"
          alternativeText="Vercel Avatar"
          title="Vercel"
        />
      </S.Link>
    </S.Footer>
  </S.Wrapper>
)

export default Main