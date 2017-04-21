# 소개
SooBook API를 사용하여 구현한 샘플 프로젝트입니다.

Ajax를 이용해 API를 호출하며, 요청 결과를 console 로그로 확인할 수 있습니다.

- signup API
	- API 요청결과 닉네임을 출력 
- login API
- logout API
- mybook add API
- mybook list API
	- 응답에 UTC 표준시를 local 타임으로 변환 및 포맷 변경

자세한 사항은 [API 가이드](https://pinstinct.gitbooks.io/soobook-api/content/)에서 확인할 수 있습니다.

## Requirements
- bootstrap (3.3.7)
- jquery (3.2.1)
- moment (2.18.1)

## 프로젝트 구조

```shell
soobook
├── app
│   ├── index.html
│   └── js
├── bower.json
└── bower_components
    ├── bootstrap
    ├── moment
    └── jquery

```

프로젝트를 동작하기 위해서 서버에서 실행합니다. 로컬서버를 사용할 경우 아래의 주소를 사용합니다.
- localhost:3000
- localhost:4040
- localhost:5050

