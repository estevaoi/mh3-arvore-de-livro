export interface DialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value?: any) => void;
}