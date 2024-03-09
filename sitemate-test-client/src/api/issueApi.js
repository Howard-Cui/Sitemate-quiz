import { API_ROOT_URL } from "../keys";

const readAPI = async () => {
  try {
    const response = await fetch(`${API_ROOT_URL}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(API_ROOT_URL)
    console.log("error happening when fetching data");
    console.dir(e)
  }
};

const createAPI = async (body) => {
  try {
    await fetch(`${API_ROOT_URL}/`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    throw new Error("Failed to create a new one, please try again")
  }
};

const updateAPI = async (body) => {
  try {
    await fetch(`${API_ROOT_URL}/`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    throw new Error("Failed to update a new one, please try again");
  }
};

const deleteAPI = async (id) => {
  try {
    await fetch(`${API_ROOT_URL}?id=${id}`, { method: "DELETE" });
  } catch (error) {
    throw new Error("Failed to delete, please try again");
  }
};

export { readAPI, createAPI, updateAPI, deleteAPI };
