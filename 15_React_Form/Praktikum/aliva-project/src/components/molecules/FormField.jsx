import { ErrorText } from "../atoms/ErrorText";
import { Label } from "../atoms/Label";

export const FormField = ({ label, error, children }) => (
  <div className="mb-4">
    <Label>{label}</Label>
    {children}
    <ErrorText show={error}>{error}</ErrorText>
  </div>
);
