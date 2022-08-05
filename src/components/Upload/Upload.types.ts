export type TUploadProps = {
  className?: string;
  value?: any;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onChange?: (data: { fileId: string; fullUrl: string }) => void;
};
