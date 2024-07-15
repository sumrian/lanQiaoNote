//在get后面加一个对象参数
axios.get(url,{
    header:{
        'Content-Type':'application/x-www-form-urlencoded'
    }
})
//在axios中加参数
axios({
    url:url,
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    }
})
//使用 interceptors 拦截器添加请求头：
axios.interceptors.request.use(config => {
    config.headers['Authorization'] = 'Bearer token';
    return config;
  });
//使用axios.defaults对象设置 
axios.defaults.headers.Authorization = '2b58f9a8-7d73-4a9c-b8a2-9f05d6e8e3c7';
//另类写法
axios.defaults.headers.common['Authorization'] = '2b58f9a8-7d73-4a9c-b8a2-9f05d6e8e3c7';