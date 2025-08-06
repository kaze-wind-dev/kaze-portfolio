import styles from "./index.module.scss";
const ContactForm = () => {
  return (
    <form className={`${styles["c-form"]}`}>
      <div className={`${styles["c-form__row"]}`}>
        <div className={`${styles["c-form__item"]}`}>
          <label htmlFor="lastName" className={`${styles["c-form__label"]}`}>
            姓
          </label>
          <span className={`${styles["c-form__require"]}`}>必須</span>
          <input type="text" id="lastName" className={`${styles["c-form__textfield"]}`}/>
        </div>
        <div className={`${styles["c-form__item"]}`}>
          <label htmlFor="firstName" className={`${styles["c-form__label"]}`}>
            名
          </label>
          <span className={`${styles["c-form__require"]}`}>必須</span>
          <input type="text" id="firstName" className={`${styles["c-form__textfield"]}`}/>
        </div>
      </div>
      <div className={`${styles["c-form__item"]}`}>
        <label htmlFor="email" className={`${styles["c-form__label"]}`}>
          メールアドレス
        </label>
        <span className={`${styles["c-form__require"]}`}>必須</span>
        <input type="text" id="email" className={`${styles["c-form__textfield"]}`}/>
      </div>
      <div className={`${styles["c-form__item"]}`}>
        <label htmlFor="message" className={`${styles["c-form__label"]}`}>
          お問い合わせ内容
        </label>
        <span className={`${styles["c-form__require"]}`}>必須</span>
        <textarea id="message" className={`${styles["c-form__textarea"]}`}/>
      </div>
      <div className={`${styles["c-form__actions"]}`}>
        <input
          type="submit"
          value="送信する"
          
          className={`${styles["c-form__submit-button"]}`}
        />
      </div>
    </form>
  );
};

export default ContactForm;
