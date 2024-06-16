// React.createElement takes 3 arguments. 1st one is the tag like the h1 tag below, 2nd is the object where 
// we can pass attributes to the tags, 3rd is the content inside of the tag.

// Props are children plus the attributes that we pass.


// const heading = React.createElement("h1", {id: "heading"}, "Hello world from React!");

// console.log(heading);      // object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


// Lets see how to create Nested Elements inside react -

/* Suppose we have this nested syntax -
*   <div id="parent">
*       <div id="child">
*           <h1>Im h1 tag</h1>
*       </div>
*   </div>
*/


// Nesting is done by using createElement and the 3rd attributes help.


// Nesting --
// const parent = React.createElement(
//     "div",
//     { id: "parent"},
//     React.createElement(
//       "div",
//       { id: "child"},
//       React.createElement("h1", {}, "Im h1 tag")
//  ))

// console.log(parent);

// const heading = React.createElement("h1", {id: "heading"}, "Hello world from React!");

// console.log(heading);      // object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(parent);

// root.render(heading);


/* Lets take a look on how to create a sibling */

/* Suppose we have this nested syntax -
*   <div id="parent">
*       <div id="child">
*           <h1>Im h1 tag</h1>
*           <h2>Im h2 tag</h2>  // These two tags(h1, h2) are siblings.
*       </div>
*         <div id="child2">
*           <h1>Im h1 tag</h1>
*           <h2>Im h2 tag</h2>  // These two tags(h1, h2) are siblings.
*       </div>
*   </div>
*/

// For adding siblings in the 3rd argument we need to convert it into an array,
// An array can have a single child or multiple child.

const parent = React.createElement("div",{ id: "parent"},[
    React.createElement( "div", { id: "child"}, [
     React.createElement("h1", {}, "Im h1 tag"), 
     React.createElement("h2", {}, "Im h2 tag") 
    ]),
    React.createElement( "div", { id: "child2"}, [
     React.createElement("h1", {}, "Im h1 tag"),
     React.createElement("h2", {}, "Im h2 tag"), 
 ]),
]);

// Now the above is looking very tidy and complicated, and hence there exist something known as "JSX".

// JSX will make our life easy when we have to create tags.

console.log(parent);

// const heading = React.createElement("h1", {id: "heading"}, "Hello world from React!");

// console.log(heading);      // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// root.render(heading);