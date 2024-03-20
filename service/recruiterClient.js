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

export const getProfileRecruiter = async () => {
    try {
      const response = await fetch("/v1/recruiters/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data.data)
      return data.data;
    } catch (error) {
      return Promise.reject(error.message || "terjadi error!");
    }
  };
  