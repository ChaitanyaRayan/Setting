import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/settings";
// const baseUrl = "http://13.52.39.75:8000/settings";


const getUsers = async () => {
  try {
    const response = await axios.get(baseUrl + "/userlist");
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getUserRoles = async () => {
  // console.log(role_id);
  try {
    const response = await axios.get(baseUrl + "/rolelist");

    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const addUsers = async (values) => {
  console.log(values);

  const resp = await axios.post(`${baseUrl}/user/`, {
    first_name: values.first_name,
    last_name: values.last_name,
    email: values.email,
    role_name: values.role_name,
    created_by: "karan1",
    org_id: "3",
    s_limit: "100",
    role_id: "19",
    active: "True",
    password: "123abc",
  });
  return resp.data;
};

const updateUsers = async (id, actives) => {
  const resp = await axios.patch(`${baseUrl}/user_update/${id}/`, {
    active: actives,
  });
  return resp.data;
};

const deleteUser = async (userId) => {
  console.log(userId);
  const resp = await axios.delete(`${baseUrl}/user_remove/${userId}/`);

  return resp.data;
};

const deleteRole = async (roleId) => {
  console.log(roleId);
  const resp = await axios.delete(`${baseUrl}/role_remove/${roleId}/`);

  return resp.data;
};

const updateRole = async (id, value) => {
  const resp = await axios.patch(`${baseUrl}/user_update/${id}/`, {
    role_name: value.role_name,
  });
  return resp.data;
};

const getAllInactive = async () => {
  try {
    const resp = await axios.get(baseUrl + "/inactive_userlist/");
    return resp.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getAllActive = async () => {
  try {
    const resp = await axios.get(baseUrl + "/active_userlist/");

    return resp.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const settingService = {
  getUsers,
  getUserRoles,
  addUsers,
  updateUsers,
  deleteRole,
  deleteUser,
    updateRole,
  getAllInactive,
  getAllActive,
};
