import { SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'

type FormValues = {
  nickName: string
}

const FillNickname = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('nickName')} />
        <input type="submit" value="submit" />
      </form>
    </Wrapper>
  )
}
export default FillNickname

const Wrapper = styled.div`
  padding-top: 82px;
`
