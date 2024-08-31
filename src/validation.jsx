export const pwd_Regex = new RegExp(
  "^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};'\":,.<>?\\/|`~]{3,30}$"
);

export const email_Regex = new RegExp(
  "^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};'\":,.<>?\\/|`~]{3,30}$"
);

export const name_Regex = new RegExp("^[a-zA-Zà-öÀ-Öø-ÿĀ-žÁ-Ż\\s'-]{5,1000}$");
export const phone_Regex = new RegExp("^\\+?[0-9]{3,30}$");
