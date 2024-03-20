export const hireWorker = async (form) => {
    try {
      const response = await fetch(`/v1/hire`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      return Promise.reject("ada error bro...");
    }
  };