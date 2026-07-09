// handleCategory("women")
// handleCategory("men")
// console.log("js connected");
// let handleCategory = (type) => {
//     console.log(type);
// // }
// let categories = document.querySelectorAll("[data-category]");

// console.log(categories);

// let manCategory = document.getElementById("manCategory");
// let womenCategory = document.getElementById("womenCategory");
//   console .log(manCategory);
//    console .log(manCategory);

  
//     if(type == "man"){

//         manCategory.classList.remove("d-none");
//         womenCategory.classList.add("d-none");

//     }
//     else{

//         womenCategory.classList.remove("d-none");
//         manCategory.classList.add("d-none");

//     }

// let handleCategory = (type) => {
//     console.log(type);
    
//     let category = document.querySelectorAll(`[data-category="${type}"]`);
//     console.log(category);

// }


let handleCategory = (type) => {

    if(type == "man"){

        manCategory.classList.remove("d-none");
        womenCategory.classList.add("d-none");

    }
    else{

        womenCategory.classList.remove("d-none");
        manCategory.classList.add("d-none");

    }

}

const scrollBtn = document.getElementById("scrollIcon");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});