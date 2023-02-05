import { useForm } from 'react-hook-form'

import { FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

type FormData = {
  firstName: string
  lastName: string
  age: number
}

const schema = z.object({
  firstName: z.string().min(3, { message: 'Required' }),
  lastName: z.string().min(3, { message: 'Required' }),
  age: z.number().min(2)
})

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: FormData) => alert(JSON.stringify(data))

  return (
    <VStack justify="center" minH="100vh" spacing={10}>
      <Heading>Example Form</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>
          First Name:
          <Input {...register('firstName')} />
        </FormLabel>
        {errors.firstName?.message && <p>{errors.firstName?.message}</p>}

        <FormLabel>
          Last Name:
          <Input {...register('lastName')} />
        </FormLabel>
        {errors.lastName?.message && <p>{errors.lastName?.message}</p>}

        <FormLabel>
          Age:
          <Input {...register('age', { valueAsNumber: true })} />
        </FormLabel>
        {errors.age?.message && <p>{errors.age?.message}</p>}

        <Input type="submit" value="Submit" />
      </form>
    </VStack>
  )
}

export default Form
