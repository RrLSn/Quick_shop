export const pwd_Regex = new RegExp(
  "^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};'\":,.<>?\\/|`~]{3,30}$"
);
export const phone_Regex = new RegExp("^\\+?[0-9]{3,30}$");

export const registerAuthUrl = "http://localhost:8080/api/auths/register";
