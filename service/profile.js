export const editProfile = async (form) => {
  try {
    const response = await fetch("/v1/workers/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(form),
    });
    const data = response.json();
    return data;
  } catch (error) {
    return Promise.reject(error.message || "terjadi error!");
  }
};
export const editProfileRecruiter = async (form) => {
  try {
    const response = await fetch("/v1/recruiters/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(form),
    });
    const data = response.json();
    return data;
  } catch (error) {
    return Promise.reject(error.message || "terjadi error!");
  }
};
