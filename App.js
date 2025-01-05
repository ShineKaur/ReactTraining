/*
<div id="parent"> 
    <div id="child">
    <h1> Hello from h1! </h1>
    <h2> Hello from h2! </h2>
    </div>
</div>
*/

const parent = React.createElement("div", {id:"parent"},
    React.createElement("div", {id:"child"},
        [
            React.createElement("h1", {}, "Hello from h1!"),
            React.createElement("h2", {}, "Hello from h2!")
        ]
    )
);

//const heading = React.createElement("h1", { id: "heading" }, "Hello world from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);