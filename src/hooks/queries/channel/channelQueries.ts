import { channelDetailsQueryKey } from './../../../constants/query-keys/channel-query-keys'
import { channelService } from '@/services'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export function useCategoriesQuery() {
  return useQuery(['categories'], () => channelService.getChannelCategories())
}

export function useCategoryOptionsQuery() {
  return useQuery(['categories'], () => channelService.getChannelCategories(), {
    select: (data) =>
      data.map((category) => ({ value: category.id, label: category.label })),
  })
}

export function useChannelVideoUrlSearchQuery(
  videoUrl: string,
  {
    onSuccess,
    onError,
  }: Omit<
    UseQueryOptions<Awaited<ReturnType<typeof channelService.getChannelByVideoUrl>>>,
    'initialData' | 'queryFn' | 'queryKey'
  >
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

export function useChannelDetailsQuery(
  channelSeq: number,
  options?: Omit<
    UseQueryOptions<Awaited<ReturnType<typeof channelService.getChannelBySeq>>>,
    'initialData' | 'queryFn' | 'queryKey'
  >
) {
  return useQuery(
    channelDetailsQueryKey(channelSeq),
    () => channelService.getChannelBySeq(channelSeq),
    options
  )
}
