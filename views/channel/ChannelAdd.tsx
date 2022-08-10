import PageHeader from '@/components/ui/headers/PageHeader'
import ErrorExclamationMark from '@/components/ui/icons/ErrorExclamationMark'
import SearchInput from '@/components/ui/inputs/SearchInput'

const ChannelAdd = () => {
  return (
    <div>
      <div>
        <PageHeader />
      </div>
      <div>
        <SearchInput
          labelName="테스트"
          placeholder="내용을 입력해주세요"
          errorMessage="test"
          onSearch={(value) => {
            console.log(value)
          }}
        />
      </div>
    </div>
  )
}
export default ChannelAdd
