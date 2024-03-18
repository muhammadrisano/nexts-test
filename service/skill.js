export const addSkill = async (val) => {
  try {
    const response = await fetch("/v1/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ skill_name: val }),
    });
    const data = response.json();
    return data;
  } catch (error) {
    return Promise.reject(error.message || "terjadi error!");
  }
};

export const getSkill = async () => {
  try {
    const response = await fetch(`/v1/skills`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject("ada error bro...");
  }
};
export const deleteSkill = async (id) => {
  try {
    const response = await fetch(`/v1/skills/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject("ada error bro...");
  }
};
