import axios from "axios";



export const fetchedProducts = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}`);
    return res?.data;

  } catch (error) {
    throw error;
  }
};

export const fetchedProductById = async(id)=>{
    try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/${id}`)
        console.log("Base URL:", import.meta.env.BASE_URL);

        return res?.data;


    } catch (error) {
        throw error
    }
}

