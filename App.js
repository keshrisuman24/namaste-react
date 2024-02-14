
const heading1 =  React.createElement("h1",{id:"heading1",key:'1'},"Hello World from React");
const heading2 =  React.createElement("h2",{id:"heading2",key:'2'},"Hello World from React");

const parent = React.createElement('div',{id:'parent'},React.createElement('div',{id:"child"},[heading1,heading2]))
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);