import { Flex, Link, Image, Heading, Text } from '@chakra-ui/react'

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'TypeScript, React.js, Next.js and Chakra UI'
}) => (
  <Flex
    minH="100vh"
    flexDir="column"
    alignItems="center"
    justifyContent="center"
    bgColor="black"
    color="#888"
    w="100%"
    h="100%"
    p="3rem"
    textAlign="center"
  >
    <Flex flexDir={{ base: 'column', sm: 'row' }} gap="3rem" mb="4rem">
      <Link href="https://nextjs.org/" target="_blank">
        <Image src="/img/nextjs.svg" alt="Nextjs Logo" height="25vmin" />
      </Link>

      <Link href="https://reactjs.org/" target="_blank">
        <Image src="/img/react.svg" alt="React Logo" height="25vmin" />
      </Link>
    </Flex>

    <Heading fontSize="4rem" mb="1rem">
      {title}
    </Heading>
    <Text fontSize="2rem" fontWeight="400">
      {description}
    </Text>
  </Flex>
)

export default Main
