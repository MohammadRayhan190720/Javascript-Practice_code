const items = [
   {
    title: "Dynamic card-2",
    description: "this is card-2"
   },
   {
    title: "Dynamic card-3",
    description: "this is card-3"
   },
   {
    title: "Dynamic card-4",
    description: "this is card-4"
   },
   {
    title: "Dynamic card-5",
    description: "this is card-5"
   },
   {
    title: "Dynamic card-6",
    description: "this is card-6"
   },
   {
    title: "Dynamic card-7",
    description: "this is card-7"
   },
   {
    title: "Dynamic card-8",
    description: "this is card-8"
   },
   {
    title: "Dynamic card-5",
    description: "this is card-5"
   },
   {
    title: "Dynamic card-6",
    description: "this is card-6"
   },
   {
    title: "Dynamic card-7",
    description: "this is card-7"
   },
   {
    title: "Dynamic card-8",
    description: "this is card-8"
   },
   {
    title: "Dynamic card-5",
    description: "this is card-5"
   },
   {
    title: "Dynamic card-6",
    description: "this is card-6"
   },
   {
    title: "Dynamic card-7",
    description: "this is card-7"
   },
   {
    title: "Dynamic card-8",
    description: "this is card-8"
   },
   {
    title: "Dynamic card-5",
    description: "this is card-5"
   },
   {
    title: "Dynamic card-6",
    description: "this is card-6"
   },
   {
    title: "Dynamic card-7",
    description: "this is card-7"
   },
   {
    title: "Dynamic card-8",
    description: "this is card-8"
   },
   {
    title: "Dynamic card-5",
    description: "this is card-5"
   },
   {
    title: "Dynamic card-6",
    description: "this is card-6"
   },
   {
    title: "Dynamic card-7",
    description: "this is card-7"
   },
   {
    title: "Dynamic card-8",
    description: "this is card-8"
   },
   

]

/*<div class="items">
  <div class="item">
    <h3 class="card-title">Dynamic Cards1</h3>
    <p class="card-description">card item-1</p>
  </div>
</div>;*/

const itemsElement= document.querySelector(".items");

const loadAllData = () => {
  items.map((item) =>{
    const itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.innerHTML = ` <h3 class="card-title">${item.title}</h3>
    <p class="card-description">${item.description}</p>`;

    itemsElement.appendChild(itemElement);

  });
};


loadAllData();






// const itemsElement = document.querySelector(".items");

// const loadAllData = () =>{
//   items.map((item) =>{
//     const itemElement = document.createElement("div");
//     itemElement.classList.add("item");
//     itemElement.innerHTML = `<h3 class="card-title">${item.title}</h3>
//          <p class="card-description">${item.description}</p>`;
     
//          itemsElement.appendChild(itemElement);

//   });
// }

// loadAllData();



