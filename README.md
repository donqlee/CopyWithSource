# copy-with-source

copy-with-source는 React 애플리케이션에서 텍스트를 복사할 때 자동으로 출처 정보를 추가하는 간편한 React 컴포넌트입니다.

## 특징

- 선택된 텍스트를 복사할 때 자동으로 출처를 추가합니다.
- 복사 완료 시 사용자 정의 가능한 알림을 표시합니다. (선택 사항)
- 출처 텍스트를 직접 지정하거나, 지정하지 않으면 현재 페이지 URL을 자동으로 사용합니다.
- 컴포넌트의 기능을 쉽게 켜고 끌 수 있습니다.

## 설치

```bash
npm install copy-with-source
```

## 사용 방법

```javascript
import { CopyWithSource } from "copy-with-source";

function App() {
  return (
    <CopyWithSource
      sourceText="https://example.com"
      showNotification={true}
      notificationDuration={3000}
      notificationMessage="텍스트가 복사되었습니다."
      enabled={true}
    >
      <p>이 텍스트를 복사하면 출처가 자동으로 추가됩니다.</p>
    </CopyWithSource>
  );
}
```

## Props

| Prop                   | 타입    | 기본값                     | 설명                             |
| ---------------------- | ------- | -------------------------- | -------------------------------- |
| `sourceText`           | string  | 츨처: 현재 페이지 URL      | 복사된 텍스트에 추가될 출처 정보 |
| `showNotification`     | boolean | false                      | 복사 완료 시 알림 표시 여부      |
| `notificationDuration` | number  | 3000                       | 알림 표시 지속 시간 (밀리초)     |
| `notificationMessage`  | string  | '텍스트가 복사되었습니다.' | 복사 완료 시 표시될 알림 메시지  |
| `enabled`              | boolean | true                       | 컴포넌트의 기능 활성화 여부      |

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 버전

현재 버전: 1.0.0
