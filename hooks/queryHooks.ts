import service from '@/services/service'
import { useQuery } from '@tanstack/react-query'

const { categoryService, channelService } = service

export const useCategoriesQuery = () => {
  return useQuery(['categories'], () => categoryService.getCategories())
}

export const useCategoryOptionsQuery = () => {
  return useQuery(['categories'], () => categoryService.getCategories(), {
    select: (data) =>
      data.map((categoryName) => ({ value: categoryName, label: categoryName })),
  })
}

export const useChannelSearchQuery = (videoUrl: string) => {
  return useQuery(['channelSearch', videoUrl], () =>
    channelService.getChannelFromVideoUrl(videoUrl)
  )
}
