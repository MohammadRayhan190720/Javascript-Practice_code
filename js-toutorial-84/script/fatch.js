// console.clear();

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((res) => res.json()) //readable string json a convert kre nite hbe 
// .then((res) => console.log(res))

// error handling
// fetch("https://jsonplaceholder.typicode.com/posts",)
// .then((res) =>{
//    if(!res.ok){
//     const message = `Error ${res.status}`;
//     throw new Error(message);
//   }
//      return res.json()
// })
 
// .then((res) => console.log(res))
// .catch((error) => console.log(error))

// post
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       const message = `Error ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })

//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

  // put method

  // fetch("https://jsonplaceholder.typicode.com/posts/1", {
  //   method: "PUT",
  //   body: JSON.stringify({
  //     id: 1,
  //     title: "foo",
  //     body: "bar",
  //     userId: 1,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((res) => {
  //     if (!res.ok) {
  //       const message = `Error ${res.status}`;
  //       throw new Error(message);
  //     }
  //     return res.json();
  //   })

  //   .then((res) => console.log(res))
  //   .catch((error) => console.log(error));

    // update data-patch

    // fetch("https://jsonplaceholder.typicode.com/posts/1", {
    //   method: "PATCH",
    //   body: JSON.stringify({
    //     title: "This is a Update data",
        
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       const message = `Error ${res.status}`;
    //       throw new Error(message);
    //     }
    //     return res.json();
    //   })

    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));

      // delet data

      // fetch("https://jsonplaceholder.typicode.com/posts/1", {
      //   method: "DELETE", 
      // })
      //   .then((res) => {
      //     if (!res.ok) {
      //       const message = `Error ${res.status}`;
      //       throw new Error(message);
      //     }
      //     return res.json();
      //   })

      //   .then((res) => console.log(res))
      //   .catch((error) => console.log(error));
