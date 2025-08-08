"use client";
import { useActionState } from "react";
import { createFormData } from "@/app/actions/contact";
import styles from "./index.module.scss";

const initialStatet = {
  status: "",
  message: "",
};

const ContactForm = () => {
  const [state, action] = useActionState(
    createFormData,
    initialStatet
  );
  console.log(state);
  if (state.status === "success") {
    return <p>お問い合わせいただき、ありがとうございます。<br/>こちらからご返信することがありますが、あらかじめご了承ください。</p>;
  }
  return (
    <form className={`${styles["c-form"]}`} action={action}>
      
      <div className={`${styles["c-form__row"]}`}>
        <div className={`${styles["c-form__item"]}`}>
          <label htmlFor="lastName" className={`${styles["c-form__label"]}`}>
            姓
          </label>
          <span className={`${styles["c-form__require"]}`}>必須</span>
          <input
            type="text"
            id="lastName"
            className={`${styles["c-form__textfield"]}`}
            
          />
        </div>
        <div className={`${styles["c-form__item"]}`}>
          <label htmlFor="firstName" className={`${styles["c-form__label"]}`}>
            名
          </label>
          <span className={`${styles["c-form__require"]}`}>必須</span>
          <input
            type="text"
            id="firstName"
            className={`${styles["c-form__textfield"]}`}
          />
        </div>
      </div>
      <div className={`${styles["c-form__item"]}`}>
        <label htmlFor="email" className={`${styles["c-form__label"]}`}>
          メールアドレス
        </label>
        <span className={`${styles["c-form__require"]}`}>必須</span>
        <input
          type="text"
          id="email"
          className={`${styles["c-form__textfield"]}`}
        />
      </div>
      <div className={`${styles["c-form__item"]}`}>
        <label htmlFor="message" className={`${styles["c-form__label"]}`}>
          お問い合わせ内容
        </label>
        <span className={`${styles["c-form__require"]}`}>必須</span>
        <textarea id="message" className={`${styles["c-form__textarea"]}`} />
      </div>
      {
        state.message && (
          <div className={`${styles["c-form__message"]}`}>
            <p>{state.message}</p>
          </div>
        )
      }
      <div className={`${styles["c-form__actions"]}`}>
        <button
          type="submit"
          className={`${styles["c-form__submit-button"]}`}
        >
          送信する
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
