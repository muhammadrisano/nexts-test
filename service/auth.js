const url = process.env.NEXT_PUBLIC_HIRE_JOB_URL;
import { setCookie } from 'cookies-next';
export const login = async (form) => {
  try {
    const response = await fetch(`/v1/auth/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(form),
      credentials: "include",
    });
    

    if (!response.ok) {

      if (response.status === 403) {
        const errorData = await response.json();
        alert(errorData.message || 'Email atau kata sandi salah');
        throw new Error(errorData.message || 'Email atau kata sandi salah');
      }

      throw new Error('Terjadi kesalahan saat login');
    }


    const data = await response.json();
    return data;
  } catch (error) {

    console.error("Login error:", error.message);
    throw error; 
  }
};
export const workerRegister = async (form) => {
  try {
    const response = await fetch(`/v1/workers/register`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(form),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("fetching post register failure");
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const recruiterRegister = async (form) => {
  try {
    const response = await fetch(`/v1/recruiters/register`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(form),
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("fetching post register failure");
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const roleCheck = async () => {
  try {
    const response = await fetch(`/v1/auth/check-role`, {
      headers: {
        "content-type": "application/json",
      },
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("fetching check role failure");
    }
    const data = response.json();
    console.log(data.data.role)
    return data.data.role;
    
  } catch (error) {
    console.log(error);
  }
};