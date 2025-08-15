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
  const result = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: [
          {
            objectTypeId: "0-1",
            name: "lastname",
            value: rawFormData.lastName,
          },
          {
            objectTypeId: "0-1",
            name: "firstname",
            value: rawFormData.firstName,
          },
          {
            objectTypeId: "0-1",
            name: "email",
            value: rawFormData.email,
          },
          {
            objectTypeId: "0-1",
            name: "message",
            value: rawFormData.message,
          },
        ],
      }),
    }
  );
  try {
    await result.json();
  } catch {
    return {
      status: "error",
      message: "お問い合わせに失敗しました。",
    };
  }
  return {
    status: "success",
    message: "OK",
  };
}
