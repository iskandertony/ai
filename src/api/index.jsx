import axios from "axios";

export const request = async (url, method, payload, formData, params) => {
  const token = sessionStorage.getItem("token");
  const api = "http://192.168.84.226:8008";

  try {
    const res = await axios({
      url: `${api}${url}`,
      headers: {
        ...(formData && { "Content-Type": "multipart/form-data" }),
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      method,
      data: payload,
      params: params,
    });
    return res.data;
  } catch (error) {
    const href = window.location.href;
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("userID");
      if (!href.includes("/login") && !href.includes("/auth")) {
        document.location.href = "/login";
      }
    }
    throw error;
  }
};

export async function sendImg(data) {
  return request(`/img_object_detection_to_json`, "POST", data);
}

export async function check() {
  return request(`/healthcheck`, "GET");
}
