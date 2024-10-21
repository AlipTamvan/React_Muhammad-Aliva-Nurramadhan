import { ErrorText } from "../atoms/ErrorText";
import { Label } from "../atoms/Label";

export const FormField = ({ label, error, children, id }) => (
  <div className="mb-4">
    <Label htmlFor={id}>{label}</Label> {/* Pastikan ini terhubung dengan ID */}
    {children}
    <ErrorText show={!!error}>{error}</ErrorText>
  </div>
);
