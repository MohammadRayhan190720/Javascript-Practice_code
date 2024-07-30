console.clear();

//event-onload(), onerror()
//properties-response,responseText,responseType,responseURL,status,statusText
//function- open(),sent(),setRequestHeader()

//XMLHttpRequest-getRequest,postRequest,putRequest,deleteRequest,patchrequest


// make request useing XMLHttpRequest
// const getData = () =>{
//    const xhr = new XMLHttpRequest();
//    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
//    xhr.onload = () => {                             //onload event data process ar datails kaj kre
//       let data = xhr.response;
//       console.log(JSON.parse(data));
//    };

//      xhr.onerror = () => {                         //error handling
//       console.log("error is hare");
//    };



//    xhr.send();

// }
// getData();


// যখন এখাদিক request make krbo
//getRequest;

// const makeRequest = (method,url) => {
//      const xhr = new XMLHttpRequest();
//      xhr.open(method,url);
//      xhr.onload = () => {
//        let data = xhr.response;
//        console.log(JSON.parse(data));
//      };

//      xhr.onerror = () => {
//        console.log("error is hare");
//      };

//      xhr.send();
// }

// const getData = () =>{
//    makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
// }
// getData();

// postrequest-sent data
// const makeRequest = (method,url,data) => {
//      const xhr = new XMLHttpRequest();
//      xhr.open(method,url);

//      xhr.setRequestHeader("Content-Type", "application/json");

//      xhr.onload = () => {
//        let data = xhr.response;
//       //  console.log(xhr.responseText);
//        console.log(JSON.parse(data));
//      };

//      xhr.onerror = () => {
//        console.log("error is hare");
//      };

//      xhr.send(JSON.stringify(data));
// }


// const getData = () =>{
//    makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
// }
const sendData = () =>{
   makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
     title: "foo",
     body: "bar",
     userId: 1,
   });
}

// updatedata-put

const updateData = () => {
  makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "fooMa",
    body: "barMaaa",
    userId: 1,
  });
};

// single line update-patch data
const updateSingleData = () => {
  makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {

    title: "This is a patch data changed",
  });
};
// delete data
const deleteData = () => {
  makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
};

// getData();
// sendData();
// updateData();
// updateSingleData();
// deleteData();



// Promise

// postrequest-sent data
const makeRequest = (method,url,data) => {

     return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
       xhr.open(method,url);

     xhr.setRequestHeader("Content-Type", "application/json");

     xhr.onload = () => {
       let data = xhr.response;
      //  console.log(xhr.status);
       console.log(JSON.parse(data));
     };

     xhr.onerror = () => {
       console.log("error is hare");
     };

     xhr.send(JSON.stringify(data));
});
}


const getData = () => {
   makeRequest("GET", "https://jsonplaceholder.typicode.com/posts")
   .then((response)=> console.log(response))
   
}
getData();
