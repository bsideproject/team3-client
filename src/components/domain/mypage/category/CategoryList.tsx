import Button from '@/components/ui/buttons/Button'
import LabeledCheckbox from '@/components/ui/inputs/LabeledCheckbox'
import { useCategoriesQuery } from '@/hooks/queries/channel/channelQueries'
import getCategoryEmoji from '@/utils/getCategoryEmoji'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'
import * as yup from 'yup'

const schema = yup.object({
  categories: yup
    .array(yup.string().required())
    .min(3, '최소 3개이상 선택해주세요.')
    .required('카테고리를 선택해주세요'),
})

type CategoryFormData = yup.InferType<typeof schema>

type Props = {
  className?: string
}

const CategoryList = ({ className }: Props) => {
  const { data: categories, isLoading } = useCategoriesQuery()
  const { register, handleSubmit, watch, control } = useForm<CategoryFormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<CategoryFormData> = (data) => {
    console.log(data)
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ListWrapper className={className}>
        {categories?.map((category) => (
          <li key={category}>
            <Controller
              name="categories"
              control={control}
              render={({ field }) => (
                <LabeledCheckbox
                  {...field}
                  image={getCategoryEmoji(category)}
                  text={category}
                  value={category}
                  small
                  light
                  // checked
                />
              )}
            />
          </li>
        ))}
      </ListWrapper>
    </form>
  )
}
export default CategoryList

const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 9px 8px;
  margin: 32px 0;
`

const Category = styled(Button)`
  ${({ theme }) => theme.typo.H50R}
  color: ${({ theme }) => theme.color.G60};
  padding: 10px 20px;
`
