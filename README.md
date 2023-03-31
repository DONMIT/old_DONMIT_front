## Front Source

- 프론트 소스 클론

```console
git clone https://github.com/DONMIT/DONMIT_front.git
```

---

- moduule install

```console
yarn install
```

---

- 실행

```console
yarn dev
```

- [Clcik This! => http://localhost:3000/](http://localhost:3000/)

## Roles

- Role 사용자 권한...(계획중)

| Type | Key   | Value | Name     |
| ---- | ----- | ----- | -------- |
| int  | roles | 0     | 권한없음 |
| int  | roles | 1     | 그룹원   |
| int  | roles | 2     | 관리자   |

- Role 그룹 설정

| Type | Key  | Value | Name   |
| ---- | ---- | ----- | ------ |
| int  | type | 0     | 공개   |
| int  | type | 1     | 비공개 |

## API Server
- 실행순서
1. Docker-Compose 실행
```console
docker-compose up
```