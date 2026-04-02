const API_URL = "http://localhost:8080/api/v1/users";

export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error fetching users");
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};