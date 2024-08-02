import { useEffect, useCallback, useState } from "react";
import { ICopyWithSourceProps } from "../types/CopyWithSource";
import styles from "../styles/CopyWithSource.module.css";

const CopyWithSource = (props: ICopyWithSourceProps) => {
  const {
    children,
    sourceText,
    showNotification = false,
    notificationDuration = 3000,
  } = props;
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const handleCopy = useCallback(
    (event: ClipboardEvent) => {
      const selection = document.getSelection();
      const selectedText = selection?.toString();

      if (selectedText) {
        event.preventDefault();
        const newText = `${selectedText}\n\n${sourceText}`;
        event.clipboardData?.setData("text/plain", newText);

        if (showNotification) {
          setIsNotificationVisible(true);
          setTimeout(
            () => setIsNotificationVisible(false),
            notificationDuration
          );
        }
      }
    },
    [sourceText, showNotification, notificationDuration]
  );

  useEffect(() => {
    document.addEventListener("copy", handleCopy);
    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, [handleCopy]);

  return (
    <div>
      {children}
      {isNotificationVisible && (
        <div className={`${styles.notification} ${styles.notificationVisible}`}>
          텍스트가 복사되었습니다.
        </div>
      )}
    </div>
  );
};

export default CopyWithSource;
