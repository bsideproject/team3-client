import PageHeader from '@/components/ui/headers/PageHeader'
import LightSelect from '@/components/ui/inputs/LightSelect'
import SearchInput from '@/components/ui/inputs/SearchInput'
import InputWithLabel from '@/components/ui/inputs/InputWithLabel'
import { useState } from 'react'
import UnderlinedInput from '@/components/ui/inputs/UnderlinedInput'

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
        <PageHeader hasPrev />
      </div>
      <div>
        <button onClick={handleErrorToggle} style={{ marginBottom: '30px' }}>
          {errorMsg ? '에러제거' : '에러발생'}
        </button>
        <div style={{ width: '100%', padding: '16px' }}>
          <InputWithLabel
            labelName="테스트"
            renderInput={(id, isError) => (
              <SearchInput
                id={id}
                isError={isError}
                placeholder="내용을 입력해주세요"
                onSearch={(value) => {
                  console.log(value)
                }}
              />
            )}
            errorMessage={errorMsg}
          />
          <InputWithLabel
            labelName="채널선택"
            renderInput={(id, isError) => (
              <LightSelect
                id={id}
                instanceId="channel-select"
                placeholder="채널 카테고리를 지정해주세요"
                options={[
                  { value: 1, label: '몽자1' },
                  { value: 2, label: '몽자2' },
                  { value: 3, label: '몽자3' },
                  { value: 4, label: '몽자4' },
                  { value: 5, label: '몽자5' },
                ]}
                onChange={(selected) => console.log(selected)}
              />
            )}
            errorMessage={errorMsg}
          />
          <UnderlinedInput placeholder="test" value="test" />
        </div>
      </div>
    </div>
  )
}
export default ChannelAdd
