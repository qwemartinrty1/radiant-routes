import { Button } from "@mantine/core";
import { APP_ID, BASE_AUTH_URL, BASE_URL } from "@/constants";

import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.loginBlock}>
          <Button
            onClick={() => {
              window.location.href = `${BASE_AUTH_URL}/?application_id=${APP_ID}&redirect_uri=${BASE_URL}/posts`;
            }}
          >
            Sign in
          </Button>
          <a
            className={styles.link}
            target="_blank"
            rel="noopener"
            href={`${BASE_AUTH_URL}/?application_id=${APP_ID}&redirect_uri=${BASE_URL}/posts`}
          >
            Wargaming.net
          </a>
        </div>
      </main>
    </div>
  );
};
