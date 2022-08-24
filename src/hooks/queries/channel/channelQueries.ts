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

export function useChannelSearchQuery(
  videoUrl: string,
  {
    onSuccess,
    onError,
  }: UseQueryOptions<
    Awaited<ReturnType<typeof channelService.getChannelFromVideoUrl>>
  >
) {
  return useQuery(
    ['channelSearch', videoUrl],
    () => channelService.getChannelFromVideoUrl(videoUrl),
    {
      onSuccess,
      onError,
      enabled: false,
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  )
}
