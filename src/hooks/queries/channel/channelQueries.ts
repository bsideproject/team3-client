import { channelService } from '@/services'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export function useCategoriesQuery() {
  return useQuery(['categories'], () => channelService.getChannelCategories())
}

export function useCategoryOptionsQuery() {
  return useQuery(['categories'], () => channelService.getChannelCategories(), {
    select: (data) =>
      data.map((categoryName) => ({ value: categoryName, label: categoryName })),
  })
}

export function useChannelVideoUrlSearchQuery(
  videoUrl: string,
  {
    onSuccess,
    onError,
  }: UseQueryOptions<Awaited<ReturnType<typeof channelService.getChannelByVideoUrl>>>
) {
  return useQuery(
    ['channelSearch', videoUrl],
    () => channelService.getChannelByVideoUrl(videoUrl),
    {
      onSuccess,
      onError,
      enabled: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  )
}
