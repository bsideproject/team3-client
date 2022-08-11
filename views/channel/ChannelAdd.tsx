import PageHeader from '@/components/ui/headers/PageHeader'
import ErrorExclamationMark from '@/components/ui/icons/ErrorExclamationMark'
import LightSelect from '@/components/ui/inputs/LightSelect'
import LightSelectWithLabel from '@/components/ui/inputs/LightSelectWithLabel'
import SearchInput from '@/components/ui/inputs/SearchInput'
import { useState } from 'react'

const ChannelAdd = () => {
  const [errorMsg, setErrorMsg] = useState('')

  const handleErrorToggle = () => {
    if (errorMsg) {
      setErrorMsg('')
    } else {
      setErrorMsg('유효한 링크가 아닙니다.')
    }
  }

  return (
    <div>
      <div>
        <PageHeader />
      </div>
      <div>
        <button onClick={handleErrorToggle} style={{ marginBottom: '30px' }}>
          {errorMsg ? '에러제거' : '에러발생'}
        </button>
        <div style={{ paddingLeft: '10px' }}>
          <SearchInput
            labelName="테스트"
            placeholder="내용을 입력해주세요"
            errorMessage={errorMsg}
            onSearch={(value) => {
              console.log(value)
            }}
          />
        </div>
        <div>
          <LightSelect
            placeholder="채널 카테고리를 지정해주세요"
            options={[
              { value: 1, label: '몽자1' },
              { value: 2, label: '몽자2' },
              { value: 3, label: '몽자3' },
              { value: 4, label: '몽자4' },
              { value: 5, label: '몽자5' },
            ]}
          />

          <LightSelectWithLabel labelName="카테고리" />
        </div>
      </div>
    </div>
  )
}
export default ChannelAdd
