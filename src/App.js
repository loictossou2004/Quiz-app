import Todolist from './components/Todo_components';

function App() {
  return (
    <div className="App">
      <Todolist/>
    </div>
  );
}

export default App;

// import { useState } from "react"

// function App() {
//   const [fruits, setFruits] = useState([
//     "🍎 Apple",
//     "🍊 Orange",
//     "🍌 Banana",
//     "🍇 Grapes",
//   ])
//   const deleteByValue = value => {
//     setFruits(oldValues => {
//       return oldValues.filter(fruit => fruit !== value)
//     })
//   }
//   const AddByValue = value => {
//     setFruits(current => [...current, value]);
//   }


  // return (
  //   <div className="App">
  //    <button onClick={() => AddByValue(prompt("Enter a fruit"))}>Add</button>

  //     <ul>
  //       {fruits.map(fruit => {
  //         return (
  //           <li key={fruit}>
  //             <span>{fruit}</span>
  //             <button onClick={() => deleteByValue(fruit)}>Delete</button>
  //           </li>
  //         )
  //       })}
  //     </ul>
  //   </div>
  // )
// }

// export default App