// asynch await   

// async function getNumber(){
//     return 5;
// }

// async function demo(){
//     let num = await getNumber()
//     console.log(num) 
// }

// demo();



// fetch api

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.error(err));


// async function fetchPost(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }

// fetchPost();



// AJAX  -->  asynchronous js and xml

// browser sends http request to server
// server process a req and sends a response
// js updates the webpage with the received data without page reload


// let xhr = new XMLHttpRequest();

// xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1" ,true);

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         let user = JSON.parse(xhr.responseText);
//         console.log(user)
//     }
// };

// xhr.send();



// ********************************

// DOM --> document object model

//tree structure  -- root node -- document
// element nodes - html tags
// attribute nodes - id class
// text node

{/* <html>
    <body>
        <h1 id='head1'>welcome</h1>
        <p>hello</p>
    </body>
</html> */}



// Document
//             html
//                             body
//                                         h1(element node)




















































































