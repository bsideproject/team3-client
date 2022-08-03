import EmptyLayout from '@/components/layout/page-layout/EmptyLayout'
import SetTermsAgreement from '@/views/onboarding/SetTermsAgreement'
import { ReactElement } from 'react'

const Step01 = () => {
  return <SetTermsAgreement />
}
export default Step01

Step01.getLayout = function getLayout(page: ReactElement) {
  return <EmptyLayout>{page}</EmptyLayout>
}
