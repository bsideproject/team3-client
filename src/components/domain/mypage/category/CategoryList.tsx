import Button from '@/components/ui/buttons/Button'
import LabeledCheckbox from '@/components/ui/inputs/LabeledCheckbox'
import { useCategoriesQuery } from '@/hooks/queries/channel/channelQueries'
import { userService } from '@/services'
import getCategoryEmoji from '@/utils/getCategoryEmoji'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import Router from 'next/router'
import { useContext, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { MypageCategoryContext } from 'src/contexts/mypage-contexts'
import styled from 'styled-components'
import * as yup from 'yup'

const schema = yup.object({
  categories: yup
    .array(yup.number().required())
    .min(3, '최소 3개이상 선택해주세요.')
    .required('카테고리를 선택해주세요'),
})

type CategoryFormData = yup.InferType<typeof schema>

type Props = {
  className?: string
}

const CategoryList = ({ className }: Props) => {
  const { changePossibleSubmit } = useContext(MypageCategoryContext)
  const { data: categories, isLoading } = useCategoriesQuery()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors, isDirty },
  } = useForm<CategoryFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      categories: [],
    },
  })
  const { data: initUserCategories } = useQuery(['user-categories'], () =>
    userService.getUserCategory()
  )
  const { mutate } = useMutation(userService.editUserCategory, {
    onSuccess: () => {
      Router.push('/mypage')
    },
    onError: (error) => {
      window.alert(error)
    },
  })

  const watchSelectedCategories = watch('categories')

  useEffect(() => {
    if (watchSelectedCategories.length >= 3) {
      changePossibleSubmit(true)
    } else {
      changePossibleSubmit(false)
    }
  }, [watchSelectedCategories, changePossibleSubmit])

  const onSubmit: SubmitHandler<CategoryFormData> = (data) => {
    mutate(data.categories)
  }

  useEffect(() => {
    if (initUserCategories) {
      reset({ categories: initUserCategories })
    }
  }, [reset, initUserCategories])

  if (isLoading) return <div>Loading...</div>

  return (
    <form id="mypage-category" onSubmit={handleSubmit(onSubmit)}>
      <ListWrapper className={className}>
        {categories?.map((category) => (
          <li key={category.id}>
            <LabeledCheckbox
              {...register('categories')}
              image={getCategoryEmoji(category.label)}
              text={category.label}
              value={category.id}
              checked={
                !isDirty ? initUserCategories?.includes(category.id) : undefined
              }
              small
              light
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
