const API = import.meta.env.VITE_API_URL;

export const getCourses = async () => {
  try {
    console.log("Fetching from:", `${API}/api/courses`);
    const res = await fetch(`${API}/api/courses`);
    const data = await res.json();
    console.log("Courses Response:", data);
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
