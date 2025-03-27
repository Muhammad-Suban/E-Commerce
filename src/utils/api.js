import axios from "axios";


// Function to fetch all products from the API
export const fetchedProducts = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}`);
    return res?.data;

  } catch (error) {
    throw error;
  }
};

// Function to fetch a single product by its ID
export const fetchedProductById = async(id)=>{
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/${id}`)

        return res?.data;


    } catch (error) {
        throw error
    }
}

