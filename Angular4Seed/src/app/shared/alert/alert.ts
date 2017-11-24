export class Alert {
  show: boolean;
  message: string;
  type: AlertType;
  isCloseable: boolean;
}

export enum AlertType {
  Success = 0,
  Error = 1,
  Warning = 2,
  Info = 3,
  Danger = 4
}
