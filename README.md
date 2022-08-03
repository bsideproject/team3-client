# 3팀 화이팅!!

MVVM 패턴 버전을 저장하기 위한 커밋입니다. 이 패턴을 걷어내고 react-query + mobx 사용한 기본적인 구조로 바꿀 계획입니다.

- [Issues](https://github.com/bsideproject/team3-client/issues): 버그발생시 여기에 이슈를 올립니다.
- [Actions](https://github.com/bsideproject/team3-client/actions): CI/CD 워크플로우를 관리합니다.
- [Projects](https://github.com/bsideproject/team3-client/projects?type=classic): Todo list를 관리합니다. 개발 Phase별로 Project를 나누고 관리하되, 나중에 이슈 발생시 해당 Phase에 할당하는 방식을 생각하고 있습니다. (혹은 이슈 전용 Project를 나누는게 나을까)
- [Wiki](https://github.com/bsideproject/team3-client/wiki): 개발 산출물, 해당 프로젝트의 컨벤션을 기록합니다.

## URL

- staging(QA 겸용): http://www.searchitfree.tk:3000
- production(예정)

## 대략적인 Workflow

- view 생성
- page 생성 후 view 포팅
- (필요시) Store 생성. Store 에서는 **오직** UI에 대한 상태만 다루기. default setter 사용 금지(strict mode 에서 경고 뜨는거 거슬림), 귀찮더라도 action 을 하나 만들어서 처리하기
- (필요시) Service 생성. API 호출시 파라미터 세팅, 변환 작업은 오로지 요 서비스에서 담당하기. 프론트엔드 코드 깔끔함과 API 명세 변화에 대응하기 위함.
- (필요시) 레이아웃, 컴포넌트 등을 생성
- (필요시) 커스텀 훅, 유틸 등을 생성
- CSS 작업시 디자인 시스템이 적용된 styled-component theme을 적극 활용
- 현재 api 엔드포인트는 Backend server로의 로그인, 회원가입, 기타 API 프록시(httponly 쿠키에서 엑세스토큰 꺼네서 헤더에 태움) 용도로만 사용중
