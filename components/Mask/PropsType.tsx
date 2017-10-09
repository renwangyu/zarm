export interface MaskProps {
  visible?: boolean;
  type?: 'transparent' | 'light' | 'normal' | 'dark';
  onClose?: (x?: any) => void;
}
