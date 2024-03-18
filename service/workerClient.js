export const getWorkers = async ({
  limit,
  page,
  sort,
  sortBy,
  search,
} = {}) => {
  try {
    const response = await fetch(
      `/v1/workers/?limit=${limit}&page=${page}&search=${search}&sort=${sort}&sortBy=${sortBy}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      })
    if (!response.ok) {
      throw new Error( "Failed to fetch workers data");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching workers data:", error.message);
  }
};
