import OnboardingStore from '@/stores/OnboardingStore'
import { restApiClient } from './client'

type RegisterFields = Pick<
  OnboardingStore,
  | 'providerToken'
  | 'termsAgreements'
  | 'nickname'
  | 'profileImageUrl'
  | 'sex'
  | 'birthYear'
  | 'categories'
>

// 파라미터 값 변환은 오로지 서비스에서만
const onboardingService = {
  async register(fields: RegisterFields) {
    const requestParams = {
      terms_agreement: fields.termsAgreements.every((term) => term.checked)
        ? 'Y'
        : 'N',
      nickname: fields.nickname,
      profile_img: fields.profileImageUrl,
      sex: fields.sex,
      birthday: fields.birthYear + '-01-01',
      category: fields.categories,
    }

    console.log(fields.providerToken)
    console.log(JSON.stringify(requestParams))

    // restApiClient.post('/onboarding', requestParams, {'Authorization': fields.providerToken})
  },
}

export default onboardingService
