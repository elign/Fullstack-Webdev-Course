import './App.css'
import Box from './components/Box'

const boxes = [];

for (let i = 0; i < 50; i++) {
  let tempObj = { val: "", color: "" };
  tempObj.val = i;

  if (isPrime(i)) {
    tempObj.color = "#D71313";

  } else if (i % 2 === 0) {
    tempObj.color = "#7A9D54";

  } else {
    tempObj.color = "#F0DE36";
  }
  boxes.push(tempObj);
}

function isPrime(num) {

  if(num === 0 || num === 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const boxesComponents = boxes.map((box, idx) => <Box key={idx} box={box} />)


function App() {
  return (
    <div className='flex page'>
      <div className='boxes'>
        {boxesComponents}
      </div>
    </div>
  )
}

export default App
