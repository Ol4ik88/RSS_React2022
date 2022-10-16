export interface IFormInput {
  label: string;
  name: string;
  type: string;
  isValid: boolean;
  image?: string | null;
  errorMessage: string;
  reference: React.RefObject<HTMLInputElement>;
}
