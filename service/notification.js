const url = process.env.NEXT_PUBLIC_HIRE_JOB_URL;
import { cookies } from "next/headers";

const getCookie = async (name) => {
  return cookies().get(name)?.value ?? "";
};

export const getRecruitersNotification = async () => {
    try {
      const token = await getCookie("token");
      const response = await fetch(`${url}/v1/hire/recruiters`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
        },
        credentials: "include",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch profile data");
      }
      const data = await response.json();
      console.log(data);
      return data.data;
    } catch (error) {
      console.error("Error fetching profile data:", error.message);
    }
  };
export const getWorkersNotification = async () => {
    try {
      const token = await getCookie("token");
      const response = await fetch(`${url}/v1/hire/workers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
        },
        credentials: "include",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch profile data");
      }
      const data = await response.json();
      console.log(data);
      return data.data;
    } catch (error) {
      console.error("Error fetching profile data:", error.message);
    }
  };