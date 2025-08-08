"use server";

function validateEmail(email: string) {
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailPattern.test(email);
}

type formState = {
  status: "success" | "error";
  message: string;
};

export async function createFormData(state: formState, formData: FormData) {
  const rawFormData = {
    lastName: formData.get("lastName") as string,
    firstName: formData.get("firstName") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };
  if (!rawFormData.lastName) {
    return {
      status: "error",
      message: "姓を入力してください",
    };
  }
  if (!rawFormData.firstName) {
    return {
      status: "error",
      message: "名を入力してください",
    };
  }
  if (!rawFormData.email) {
    return {
      status: "error",
      message: "メールアドレスを入力してください",
    };
  }
  if (!validateEmail(rawFormData.email)) {
    return {
      status: "error",
      message: "メールアドレスの形式が誤っています",
    };
  }
  if (!rawFormData.message) {
    return {
      status: "error",
      message: "お問い合わせ内容を入力してください",
    };
  }
  return {
    status: "success",
    message: "OK",
  };
}
