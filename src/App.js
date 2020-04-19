import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
var singer= "Atif Aslam";
var namelist = {
  BD: "Avishek Devnath Avro",
  Indean: "Atif Aslam",
  english: "Honey Sing"
}
var style={
  backgroundColor: 'lightsalmon',
  color: 'black',
}
function App() {
  // const products = [
  //   {name: 'Photoshop', Price: '$80'},
  //   {name: 'Illustrator', Price: '$90'},
  //   {name: 'PDF Reader', Price: '$10'}
  // ]
  const employ = [
    {name: 'M.A Fayez', title: 'Web Developer', address: 'Karnafully'},
    {name: 'Morshed Alam', title: 'IT Propessional', address: 'Cumilla'},
    {name: 'Abraul Haque', title: 'Web Developer', address: 'Rohinga'},
    {name: 'Sakib Khan', title: 'Premik Purush', address: 'Khulna'},
    {name: 'Number one sakib Khan', title: 'Premik Purush', address: 'Dhakar olute golite'}

  ]
  const adobe = [
    {products: 'Photoshop', prices: '$80'},
    {products: 'Illustrator', prices: '$90'},
    {products: 'PDF Reader', prices: '$10'},
    {products: 'Lightroom', prices: '$110'},
    {products: 'PicArt', prices: '$110'}

  ]
  const stu = ['Fayez', 'sakib', 'morshed', 'abraul', 'arafat', 'riyad', 'shahed', 'Nafis'];
  return (
    <div className="App">
      <header className="App-header">
        {/* This is Log of React */} 
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>I'm a React Learner!</p>
        {/* <Adobe products={products[0]}></Adobe>
        <Adobe products={products[1]}></Adobe>
        <Adobe products={products[2]}></Adobe> */}


        {/* employ List
         <Practice employ={employ[0]}></Practice>
         <Practice employ={employ[1]}></Practice>
         <Practice employ={employ[3]}></Practice>
         <Practice employ={employ[2]}></Practice>
       */}
        <Users></Users>
         <ul>
           {
             stu.map(student => <li> {student} </li>)
           }
           {
             employ.map(employName => <li>{employName.name}</li>)
           }
         </ul>
         {
           adobe.map(product => <Adobe adobe={product}></Adobe>)
         }
         {
           employ.map(Employ =><Practice employ={Employ}></Practice>)
         }
         <Count> </Count>
        
      </header>
    </div>
  );
}


function Users(){
  const [users, setUsers] = useState([]);
  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  },  [])
  return (
    <div>
      <h3>Dynamic Users : </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
        <h2>Email List</h2>
       {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Practice(props){
  const employStyle = {
    border: '2px solid red',
    borderRadius: '15px',
    margin: '10px',
    padding: '20px',
    width: '200px'
  }
  const {name, title, address} = props.employ;
  return (
    <div style={employStyle}>
      <h3>{name}</h3>
      <h5> {title} </h5>
      <h6>Home Address : {address} </h6>
    </div>
  )
}
// Adobe Products
function Adobe(props){
  const productStyle = {
    border: '2px solid grey',
    borderRadius: '15px',
    margin: '10px',
    padding: '20px',
    width: '130px',
    backgroundColor: '#c0c0c0',
    color: 'black'
  }
  const button = {
    backgroundColor : '#009999',
    borderRadius: '50px',
    padding: '5px'

  }
  const {products, prices} = props.adobe;
  return (
    <div style={productStyle}>
      <h3>{products}</h3>
      <h5> {prices} </h5>
      <button style={button}>Buy Now</button>
    </div>
  )
}

// useState Counter
function Count(){
  const button = {
    backgroundColor : '#009999',
    borderRadius: '50px',
    padding: '15px',
    fontSize: '25px',
    

  }
  const [count, setCount] = useState(0);
  // const ClickHandler = () => console.log('clicked');

  //Click Handler ek sate O use kora jay,,,,, eta comment kore button er sate click handler add kore dekhano holo
  // const ClickHandler = () => {
  //   const newCount = count+1;
  //   setCount(newCount);
  // };
  return(
    <div>
      <h3>Count : {count} </h3>
      <button onClick={() => setCount(count - 1)} style={button}>Decrease</button>
      <button onClick={() => setCount(count + 1)} style={button}>Incress</button>
    </div>
  )
}

// function Adobe(props){
//   const styleSheet = {
//     border: '5px solid green',
//     borderRadius: '10px',
//     margin: '10px', 
//     padding: '25px',
//     backgroundColor: '#ffcc66',
//     width: '250px',
//     float: 'left'
//   }
//   const button = {
//     borderRadius: '25px',
//     backgroundColor: '#009999',
//     fontSize: '20px',
//     padding : '10px'
//   }
//   const {name, Price} = props.products;
//   return (
//     <div style={styleSheet}>
//       <h3>{name}</h3>
//       <h5> {Price} </h5>
    
//       <button style={button}>Buy Now</button>
//   </div>
//   )
  
// }

export default App;
