export interface ModalPopupDialog {
  isShowModal: boolean;
  title: string;
  description: string;
  image?: string;
  onClosed?: () => void;
  onSuccess?: () => void;
  textOnClosed?: string;
  textOnSuccess?: string;
}
