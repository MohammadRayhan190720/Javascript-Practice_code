// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// axios is a js library
// it helps to make request from browser (plain js/Vue/React/Angular), node.js

// + very easy to use
// + it supports all modern browser includig IE
// + it returns promise
// + throws error brilliantly
// + No need to set header cause axios is intelligent

// axios(config)
// axios(url [, config])

// axios.get(url [, config])
// axios.post(url [, config])
// axios.put(url [, config])
// axios.patch(url [, config])
// axios.delete(url [, config])

// axios returns response object - data, status, statusText, headers, config

console.clear();
// get method
// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err))

// post method
// axios.post("https://jsonplaceholder.typicode.com/posts",{
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),

// })
// .then((res)=>console.log(res.data))
// .catch((err)=>console.log(err))

// update data
axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "foomamamam",
      body: "barmamama",
      userId: 1,
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
// update one line
    axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify({
        title: "This is update data",
      }),
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

      // delete data
    axios.delete("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

