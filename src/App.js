import './App.css';

function App() {
  return (
    <div className="App">
      <District name={'Narsingdi'} spesality={'vibagChai'}></District>
      <District name={'Dhaka'} spesality={'prochor Luksonkha'}></District>
      <District name={'Bramonbariya'} spesality={'Maramari'}></District>

    </div >
  );
}
const districtStyle = {
  backgroundColor: 'red',
  border: '2px solid green',
  margin: '20px',

}
function District(props) {

  return (
    <div style={districtStyle}>
      <h1>Name: {props.name} </h1>
      <p>Spesality: {props.spesality} </p>
    </div>

  )
}
export default App;
