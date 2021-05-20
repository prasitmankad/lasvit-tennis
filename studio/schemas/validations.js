import { baseLanguage } from "../../translations/config";

export const fieldValidationRequired = (name, field) => (Rule) =>
  Rule.custom((fields) => {
    if (name in fields[baseLanguage]) {
      return true;
    }
    return `${field} : This field is required.`;
  });
