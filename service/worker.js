const url = process.env.NEXT_PUBLIC_HIRE_JOB_URL;
import { cookies } from "next/headers";

const getCookie = async (name) => {
  return cookies().get(name)?.value ?? "";
};

// export const getWorkers = async ({ limit, page, sort, sortBy, search} = {}) => {
//   try {
//     const token = await getCookie("token");

//     const response = await fetch(`${url}/v1/workers?limit=${limit}&page=${page}&sort=${sort}&sortBy=${sortBy}&search=${search}`, {
//       headers: {
//         "Content-Type": "application/json",
//         ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
//       },
//       credentials: "include",
//     });
//     if (!response.ok) {
//       throw new Error(response.status, "Failed to fetch workers data");
//     }
//     const data = await response.json();

//     return data.data;
//   } catch (error) {
//     console.error("Error fetching workers data:", error.message);
//   }
// };

export const getWorkersSkills = async () => {
  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/skills/`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
      },
      credentials: "include",
     
    });
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.error("Error fetching workers skills", error.message);
  }
};
export const getSkillById = async (slug) => {
  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/skills/${slug}`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
      },
      credentials: "include",
    
    });
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.error("Error fetching workers skills", error.message);
  }
};

export const getProfile = async () => {
  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/workers/profile`, {
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
export const getWorkersById = async (slug) => {
  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/workers/${slug}`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
      },
      credentials: "include",
      
    });
    if (!response.ok) {
      throw new Error("Failed to fetch workers data");
    }
    const data = await response.json();
 console.log(data)
    return data.data;
  } catch (error) {
    console.error("Error fetching workers data:", error.message);
  }
};
export const getPortfolioById = async (slug) => {
  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/portfolio/${slug}`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
      },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch workers data");
    }
    const data = await response.json();
 console.log(data.data)
    return data.data;
  } catch (error) {
    console.error("Error fetching workers data:", error.message);
  }
};
export const roleCheck = async () => {
  try {
    const token = await getCookie("token");
    const response = await fetch(`${url}/v1/auth/check-role`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Cookie: `token=${token};path=/;expires=Session` } : {}),
      },
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch workers data");
    }
    const data = await response.json();
console.log("role", data.data.data.role)
    return data.data.data.role;
  } catch (error) {
    console.error("Error fetching workers data:", error.message);
  }
};
