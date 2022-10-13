import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #242424;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  .react {
    animation: logo-spin infinite 20s linear;
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`

export const Link = styled.a``

export const Logo = styled.img`
  width: 15rem;
  margin-bottom: 5rem;

  &:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const LearnMore = styled.p`
  margin-top: 8rem;
  font-size: 1.6rem;
  font-weight: 300;
`
