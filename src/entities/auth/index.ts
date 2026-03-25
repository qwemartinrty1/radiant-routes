import {
  ACCOUNT_ID,
  BASE_URL,
  IS_USER_LOGIN,
  NICKNAME,
  TOKEN,
} from "@/constants";

export const userSetup = (searchParams) => {
  const accountId = searchParams.get(ACCOUNT_ID);
  const token = searchParams.get(TOKEN);
  const nickname = searchParams.get(NICKNAME);

  console.log(accountId, token, nickname);

  localStorage.setItem(ACCOUNT_ID, accountId);
  localStorage.setItem(TOKEN, token);
  localStorage.setItem(NICKNAME, nickname);

  localStorage.setItem(IS_USER_LOGIN, "true");
};

export const userLogout = () => {
  localStorage.removeItem(ACCOUNT_ID);
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(NICKNAME);

  localStorage.removeItem(IS_USER_LOGIN);

  window.location.replace(`${BASE_URL}/login`);
};
