"use client";

import styles from "./styles.module.scss";

export const ChatButton = () => {
  const openChat = () => {
    if (window.usedeskMessenger) {
      window.usedeskMessenger.openChat();
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={openChat} className={styles.chatButton}>
        Открыть чат
      </button>
    </div>
  );
};
