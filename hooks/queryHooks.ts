import service from '@/services/service'
import { useQuery } from '@tanstack/react-query'

const categoryService = service.categoryService

export const useCategoriesQuery = () => {
  return useQuery(['categories'], () => categoryService.getCategories())
}

export const useCategoryOptionsQuery = () => {
  return useQuery(['categories'], () => categoryService.getCategories(), {
    select: (data) =>
      data.map((categoryName) => ({ value: categoryName, label: categoryName })),
  })
}
