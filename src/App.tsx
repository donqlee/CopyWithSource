import CopyWithSource from "./components/CopyWithSource";

function App() {
  return (
    <CopyWithSource showNotification={true}>
      <p>이 텍스트를 복사해보세요. 출처 정보가 자동으로 추가됩니다.</p>
    </CopyWithSource>
  );
}

export default App;
