import { channelService } from '@/services'
import { ChannelCategory, ChannelInfoType } from '@/types/channelTypes'
import { MutationOptions, useMutation } from '@tanstack/react-query'

export function useChannelAddMutation({
  onSuccess,
  onError,
}: MutationOptions<Awaited<ReturnType<typeof channelService.addChannel>>>) {
  // return useMutation(channelService.addChannel, {
  //   onSuccess,
  //   onError,
  // })
}
