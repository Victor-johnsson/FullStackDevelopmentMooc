import { useState } from 'react'



/*
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
 
  return (
    <div>
      <Header course={course} />
      <Content course = {course}/>
      <Total course = {course} />
      

    </div>
  )
}


const Header =(props) =>{
  console.log(props)

  return(
  
    <h1>{props.course["name"]}</h1>
  
  )
}

const Content = (props) => {
  console.log(props )

  const parts = props.course.parts
  return (
    <div>
      <Part part={parts[0]}  />
      <Part part={parts[1]}  />
      <Part part={parts[2]}  />
    </div>
  )
}
const Part = (props) =>{
  return( <p>{props.part.name} {props.part.exercises}</p>)
}



const Total = (props) =>{
  console.log(props)
  const parts = props.course.parts
  
  var i = 0
  parts.forEach(element => {
    i +=  element["exercises"]
  });
  
  
  return(
    <p>
      {i}
    </p>
  )

}
*/



const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App