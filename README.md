

# 서비스 이름
프로젝트 소개
이 저장소는 000의 **프론트엔드 개발**을 담당하는 레포지토리입니다.

<br />

<img width="800" alt="서비스 메인 이미지" src="" />

<br />
<br />

</div>

---

## 📦 기술 스택

| 역할 | 종류 |
|:---:|:---|
| **Library** | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white) ![VITE](https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=Vite&logoColor=white) |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) |
| **Styling** | ![Vanilla Extract](https://img.shields.io/badge/Vanilla%20Extract-DB7093?style=for-the-badge&logoColor=white) |
| **Data Fetching** | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white) ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white) |
| **State** | ![Zustand](https://img.shields.io/badge/Zustand-433E38?style=for-the-badge&logoColor=white) |
| **Formatting** | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) |
| **Package** | ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white) |
| **Deploy** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white) |

<br />

---

## 🚀 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

<br />

---

## 🌿 Git 워크플로우

### 1. develop 브랜치 최신화
```bash
git checkout develop
git pull origin develop
```

### 2. 작업 브랜치 생성
```bash
git checkout -b feat/작업명
```

### 3. PR 전 병합
```bash
git checkout develop
git pull origin develop
git checkout feat/작업명
git merge develop
# 충돌 해결 후 커밋
```

<br />

---

## 📏 컨벤션

| 📌 | 링크 |
|:---:|:---|
| 🌿 Commit | [Commit Convention]() |
| 🪵 Branch | [Branch Convention]() |
| 📋 Issue | [Issue Convention]() |
| ✅ PR | [PR Convention]() |

<br />

---

## 📁 폴더 구조

```
src/
├── app/                    # 앱 진입점 및 전역 설정
│   ├── App.tsx
│   └── main.tsx
│
├── pages/                  # 라우트 기준 페이지 컴포넌트
│
├── widgets/                # 페이지별 기능 단위 컴포넌트
│
└── shared/                 # 전역 공통 모듈
    ├── apis/               # API 관련
    ├── assets/             # 이미지, 폰트 등
    ├── components/         # 공통 UI 컴포넌트
    ├── hooks/              # 공통 훅
    ├── icons/              # 아이콘
    ├── styles/             # 스타일 토큰
    ├── types/              # 타입 정의
    └── utils/              # 유틸 함수
```

<br />

---

## 👥 팀원 소개

<table align="center">
  <tr>
    <td align="center">
      <img src="https://github.com/Sohyunnnn.png" width="130" height="130" style="border-radius: 50%;" /><br />
      <b>박소현</b><br />
      <a href="https://github.com/Sohyunnnn">@Sohyunnnn</a><br />
      <sub>프론트엔드 팀장</sub>
    </td>
    <td align="center">
      <img src="https://github.com/yooncandooit.png" width="130" height="130" style="border-radius: 50%;" /><br />
      <b>김윤지</b><br />
      <a href="https://github.com/yooncandooit">@yooncandooit</a><br />
      <sub>프론트엔드 팀원</sub>
    </td>
    <td align="center">
      <img src="https://github.com/seunghye-rain.png" width="130" height="130" style="border-radius: 50%;" /><br />
      <b>양승혜</b><br />
      <a href="https://github.com/seunghye-rain">@seunghye-rain</a><br />
      <sub>프론트엔드 팀원</sub>
    </td>
    <td align="center">
      <img src="https://github.com/jin-evergreen.png" width="130" height="130" style="border-radius: 50%;" /><br />
      <b>박진석</b><br />
      <a href="https://github.com/jin-evergreen">@jin-evergreen</a><br />
      <sub>프론트엔드 팀원</sub>
    </td>
  </tr>
</table>

<br />

---

## 📖 아티클 모음

| 이름 | 아티클 |
|:---:|:---|
| 박소현 | |
| 김윤지 | |
| 양승혜 | |
| 박진석 | |

<br />

---

## ✨ Before & After

<table>
  <tr>
    <th>Before</th>
    <th>After</th>
  </tr>
  <tr>
    <td><img width="400" alt="Before" src="" /></td>
    <td><img width="400" alt="After" src="" /></td>
  </tr>
</table>
