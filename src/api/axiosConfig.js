import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://task-pro-group-1-backend.onrender.com',
});

export const dashBoardsInstance = axios.create({
  baseURL: 'https://task-pro-group-1-backend.onrender.com/boards',
});

export const tasksInstance = axios.create({
  baseURL: 'https://task-pro-group-1-backend.onrender.com/tasks',
});

//auth
export const setToken = accessToken => {
  authInstance.defaults.headers.common['Authorization'] = accessToken;
  dashBoardsInstance.defaults.headers.common['Authorization'] = accessToken;
  tasksInstance.defaults.headers.common['Authorization'] = accessToken;
};

export const clearToken = () => {
  authInstance.defaults.headers.common['Authorization'] = '';
  dashBoardsInstance.defaults.headers.common['Authorization'] = '';
  tasksInstance.defaults.headers.common['Authorization'] = '';
};

authInstance.interceptors.response.use(response=>response,async(error)=>{
  console.log(error)
  if(error.response.status===401){
    const refreshToken=localStorage.getItem("refreshToken")
    const{data}=await authInstance.post('users/refresh',{refreshToken})
    console.log(data.accessToken,data.refreshToken)
    setToken(  `Bearer ${data.accessToken}`)
    localStorage.setItem("refreshToken",data.refreshToken)
    return authInstance(error.config)
  }
  return Promise.reject(error)
})
dashBoardsInstance.interceptors.response.use(response=>response,async(error)=>{
  if(error.response.status===401){
    const refreshToken=localStorage.getItem("refreshToken")
    const{data}=await authInstance.post('users/refresh',{refreshToken})
    console.log(data.accessToken,data.refreshToken)
    setToken(  `Bearer ${data.accessToken}`)
    localStorage.setItem("refreshToken",data.refreshToken)
    return dashBoardsInstance(error.config)
  }
  return Promise.reject(error)
})
tasksInstance.interceptors.response.use(response=>response,async(error)=>{
  if(error.response.status===401){
    const refreshToken=localStorage.getItem("refreshToken")
    const{data}=await authInstance.post('users/refresh',{refreshToken})
    console.log(data.accessToken,data.refreshToken)
    setToken(  `Bearer ${data.accessToken}`)
    localStorage.setItem("refreshToken",data.refreshToken)
    return tasksInstance(error.config)
  }
  return Promise.reject(error)
})