import axios from "axios";
import { config } from "../../../utils/axiosconfig";
import { base_url } from "../../../utils/baseUrl";

export const getalltestRide = async (data) => {
  const response = await axios.get(`${base_url}testride/`, data,config);
  return response.data;
};

export const deletetestRide = async (data) => {
  console.log(config)
  const response = await axios.post(`${base_url}testride/del`, data, config);
  return response.data;
};
export const UpdateBookRequest = async (data) => {
  const response = await axios.post(`${base_url}testride/update`, data, config);
  return response.data;
};
export const getAlluserData = async (data) => {
  const response = await axios.get(`${base_url}user/all-users`, data, config);
  return response.data;
};

export const getallcallback = async (data) => {
  const response = await axios.get(`${base_url}callback`, data,config);
  return response.data;
};
export const addcallback = async(data)=>{
  const response = await axios.post(`${base_url}callback/add`, data)
  return response.data
}
export const UpdateCallBack = async (data) => {
  const response = await axios.post(`${base_url}callback/update`, data, config);
  return response.data;
};

export const deleteCallback = async (data) => {
  const response = await axios.post(`${base_url}callback/del`, data, config);
  return response.data;
};
export const getalldealershiprequest = async (data) => {
  const response = await axios.get(`${base_url}dealer`, data,config);
  return response.data;
};
export const adddealerrshipRequest = async(data)=>{
  const response = await axios.post(`${base_url}dealer/add`, data)
  return response.data
}
export const deleteDealerShip = async (data) => {
  const response = await axios.post(`${base_url}dealer/del`, data, config);
  return response.data;
};
export const getallContactus = async () => {
  const response = await axios.get(`${base_url}contact`);
  return response.data;
};
export const updateContactus = async (data) => {
  const response = await axios.post(`${base_url}contact/update`, data, config);
  return response.data;
};
export const deleteContactus = async (data) => {
  const response = await axios.post(`${base_url}contact/del`, data, config);
  return response.data;
};
