import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #000000;
  color: #888888;
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
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #cecfd0;
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

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 2rem;
  background: #0e0e0e;

  height: 6.5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-top: 0.01rem solid #cecfd0;

  font-size: 1.4rem;
  font-weight: 400;

  ${Link} {
    color: #cecfd0;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
  }

  @media (max-width: 450px) {
    font-size: 1.1rem;
  }
`

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  @media (max-width: 450px) {
    display: none;
  }
`
