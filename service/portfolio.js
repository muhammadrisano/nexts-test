export const getPortfolio = async () => {
  try {
    const response = await fetch(`/v1/portfolio`, {
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
export const deletePortfolio = async (id) => {
  try {
    const response = await fetch(`/v1/portfolio/${id}`, {
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
export const addPortfolio = async (form) => {
  try {
    const response = await fetch(`/v1/portfolio/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(form),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject("ada error bro...");
  }
};
