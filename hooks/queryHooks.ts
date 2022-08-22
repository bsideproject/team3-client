import service from '@/services/service'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

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

export const useChannelSearchQuery = (
  videoUrl: string,
  {
    onSuccess,
  }: UseQueryOptions<
    Awaited<ReturnType<typeof channelService.getChannelFromVideoUrl>>
  >
) => {
  return useQuery(
    ['channelSearch', videoUrl],
    () => channelService.getChannelFromVideoUrl(videoUrl),
    { onSuccess, enabled: false, staleTime: Infinity, cacheTime: Infinity }
  )
}
