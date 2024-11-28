export const fetchProductById = async (id: string) => {
  try {
    const response = await fetch("https://dummyjson.com/products/" + id);
    const data = await response.json();
    if (!data) {
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};
