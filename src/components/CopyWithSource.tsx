import { useEffect, useCallback } from "react";
import { ICopyWithSourceProps } from "../types/CopyWithSource";

const CopyWithSource = (props: ICopyWithSourceProps) => {
  const { children, sourceText } = props;

  const handleCopy = useCallback(
    (event: ClipboardEvent) => {
      const selection = document.getSelection();
      const selectedText = selection?.toString();

      if (selectedText) {
        event.preventDefault();
        const newText = `${selectedText}\n\n${sourceText}`;
        event.clipboardData?.setData("text/plain", newText);
      }
    },
    [sourceText]
  );

  useEffect(() => {
    document.addEventListener("copy", handleCopy);
    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, [handleCopy]);

  return <div>{children}</div>;
};

export default CopyWithSource;
