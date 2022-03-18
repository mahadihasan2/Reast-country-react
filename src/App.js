import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name={'Narsingdi'} spesality={'vibagChai'}></District>
      <District name={'Dhaka'} spesality={'prochor Luksonkha'}></District>
      <District name={'Bramonbariya'} spesality={'Maramari'}></District>
      <LoadPost></LoadPost>

    </div >
  );
}
const districtStyle = {
  backgroundColor: 'red',
  border: '2px solid green',
  margin: '20px',
  padding: '20px'

}
function District(props) {
  const [power, setPower] = useState(1)
  const boostPower = () => {
    const newPower = power * 2
    setPower(newPower)
  }

  return (
    <div style={districtStyle}>
      <h1>Name: {props.name} </h1>
      <p>Spesality: {props.spesality} </p>
      <h2>Power:{power} </h2>
      <button onClick={boostPower}>Boost Power</button>
    </div>

  )
}
function LoadPost() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1>Post: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}

function Post(props) {
  return (
    <div style={{ backgroundColor: 'lightSalmon', margin: '20px', border: '2px solid gray', padding: '20px' }}>
      <h1 style={{ color: 'black' }}>Title: {props.title}</h1>
      <p style={{ color: 'green', fontSize: '20px' }}>Body : {props.body}</p>
    </div>
  )
}
export default App;
