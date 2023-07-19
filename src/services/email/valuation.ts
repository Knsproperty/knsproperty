import axios from "axios";

const apiUrl = `${process.env.NEXT_PUBLIC_URL}/api/email/valuation`; // Adjust the URL according to your API endpoint

export const submitForm = async (requestData: any) => {
  try {
    const response = await axios.post(apiUrl, requestData);
    return response.data;
  } catch (error) {
    throw new Error("Error submitting form");
  }
};
