const API = import.meta.env.VITE_API_URL;

export const getCourses = async () => {
  try {
    const res = await fetch(`${API}/api/courses`);
    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
