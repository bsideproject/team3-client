import OnboardingStore from '@/stores/OnboardingStore'
import { restApiClient } from './client'

// 파라미터 값 변환은 오로지 서비스에서만
const onboardingService = {
  async register(fields: Required<Omit<OnboardingStore, 'rootStore'>>) {
    const requestParams = {
      email: fields.email,
      terms_agreement: fields.termsAgreements.every((term) => term.checked)
        ? 'Y'
        : 'N',
      nickname: fields.nickname,
      profile_img: fields.profileImageUrl,
      sex: fields.sex,
      birthday: fields.birthday,
      category: fields.category,
    }

    console.log(requestParams)

    // restApiClient.post()
  },

  async getCategories() {
    return await restApiClient.get('/getCategories')
  },
}

export default onboardingService
