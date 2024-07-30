const makeRequest = async (config) =>{

  return await axios(config)
};

const getData = () =>{

  makeRequest("https://jsonplaceholder.typicode.com/posts")
  .then((res)=>console.log(res))
  .catch((err) => console.log(err))
}

getData()
// creatdata
const creatData = () =>{

  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "This is practice api calling",
      body: "bar",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

creatData()
// update data
const updateData = () =>{
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "put",
    body: JSON.stringify({
      id: 1,
      title: "fooasdd",
      body: "baradssdsada",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

updateData()
// delete data
const deleteData = () =>{
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "delete",
    
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

deleteData()