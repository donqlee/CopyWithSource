import { ReactNode } from "react";

export interface ICopyWithSourceProps {
  children: ReactNode;
  sourceText?: string;
  showNotification?: boolean;
  notificationDuration?: number;
  notificationMessage?: string;
}
