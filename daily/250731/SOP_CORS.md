# SOP / CORS

## SOP (Same Origin Policy)

    웹 브라우저 정책으로 서로 다른 출처(origin)의 리소스 접근을 제한하는 정책
    출처(origin) = 프로토콜 + 도메인 + 포트번호

    * 프로토콜 => http / https
    * 도메인 => git-go.co.kr / gitgo.com
    * 포트번호 => git-go.co.kr:111 / git-go.co.kr:333

## CORS (Cross-Origin Resource Sharing)

    SOP의 제한을 서버가 제한을 해제해주는 방식
    서버 측에서 특별한 헤더(Access-Control-Allow-Origin)을 포함시킴

    이 헤더가 있으면 다른 출처에서의 요청/응답을 허용함
