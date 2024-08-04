# copy-with-source

copy-with-source는 React 애플리케이션에서 텍스트를 복사할 때 자동으로 출처 정보를 추가하는 간편한 React 컴포넌트입니다.

## 특징

- 선택된 텍스트 복사 시 자동으로 출처 정보 추가
- 사용자 정의 가능한 출처 텍스트
- 복사 알림 기능 (선택 사항)
- TypeScript로 작성되어 타입 안정성 제공
- Vite를 사용한 빠른 개발 환경

## 설치

```bash
npm install copy-with-source
```

## 사용 방법

```javascript
import { CopyWithSource } from "copy-with-source";

function App() {
  return (
    <CopyWithSource sourceText="출처: example.com" showNotification={true}>
      <p>이 텍스트를 복사해보세요. 출처 정보가 자동으로 추가됩니다.</p>
    </CopyWithSource>
  );
}
```

## Props

| Prop                   | 타입    | 기본값                     | 설명                             |
| ---------------------- | ------- | -------------------------- | -------------------------------- |
| `sourceText`           | string  | 필수                       | 복사된 텍스트에 추가될 출처 정보 |
| `showNotification`     | boolean | false                      | 복사 완료 시 알림 표시 여부      |
| `notificationDuration` | number  | 3000                       | 알림 표시 지속 시간 (밀리초)     |
| `notificationMessage`  | string  | '텍스트가 복사되었습니다.' | 복사 완료 시 표시될 알림 메시지  |

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 버전

현재 버전: 1.0.0
