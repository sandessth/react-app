import './App.css'

function App() {
  const info = [
    {
      "name": "Alice",
      "age": 25,
      "hobbies": ["Reading", "Gardening", "Cooking"],
      "bio": "Alice is a passionate learner who enjoys exploring new technologies."
    },
    {
      "name": "Bob",
      "age": 27,
      "hobbies": ["Playing guitar", "Hiking", "Photography"],
      "bio": "Bob is a creative individual who loves expressing himself through music and capturing moments with his camera."
    },
    {
      "name": "Charlie",
      "age": 23,
      "hobbies": ["Painting", "Writing", "Soccer"],
      "bio": "Charlie is an artist at heart, always seeking inspiration from various forms of art."
    },
    {
      "name": "David",
      "age": 29,
      "hobbies": ["Swimming", "Traveling", "Programming"],
      "bio": "David is an adventurer who is passionate about coding and exploring the world at the same time."
    }
  ]

  const info_data = info.map(function (arr){
    return (
      <> 
        <h2>Name:{arr.name}</h2>
        <h4>Age:{arr.age}</h4>
        <h4>Hobbies:
          {arr.hobbies.map(function(hobby)
          {
            return(
            <>
              <li>{hobby}</li>
            </>
            )
          }
          )
          }
        </h4>
        <h4>{arr.bio}</h4>
      </>
    )
  })

  return (
    <>
      
      <div className='bg'>
        <div >
          <br></br>
          <div className='main'>
          <h2>CSS Layout and Printing Class Profiles in a React Project with Vite</h2>
          <a class="button" href="https://github.com/sandessth/-CSS-Layout-and-Printing-Class-Profiles">access repo here</a>
          </div>
          <br></br>
          <ul>
            <li>Understand the concepts of flow layout, position layout, and flexbox in CSS.</li>
            <li>Implement different CSS layout techniques in a React component.</li>
            <li>Create a list of class profiles and print them in a React project.</li>
          </ul>
          <br></br>
          <div className="info" class="grid-container">
            {info_data}
          </div>
        </div>  
      </div>
    </>
  )

}












export default App




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
