
import Icon from './Icon';
import {useState} from 'react'
// toaster code
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react strap
import {Row ,Col ,Container,Card ,CardBody,Button } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
const myArray = new Array(9).fill('empty')

function App() {

  const [isCross , setIsCross] = useState(false)
  const [msg , setMsg] = useState('')

  function reload(){
    ////
    setIsCross(false)
    setMsg('')
    myArray.fill('empty',0,9)
  }

  const checkWinner = ()=>{
    ///
    if (
      myArray[0] === myArray[1] &&
      myArray[0] === myArray[2] &&
      myArray[0] !== "empty"
    ) {
      setMsg(`${myArray[0]} won`);
    } else if (
      myArray[3] !== "empty" &&
      myArray[3] === myArray[4] &&
      myArray[4] === myArray[5]
    ) {
      setMsg(`${myArray[3]} won`);
    } else if (
      myArray[6] !== "empty" &&
      myArray[6] === myArray[7] &&
      myArray[7] === myArray[8]
    ) {
      setMsg(`${myArray[6]} won`);
    } else if (
      myArray[0] !== "empty" &&
      myArray[0] === myArray[3] &&
      myArray[3] === myArray[6]
    ) {
      setMsg(`${myArray[0]} won`);
    } else if (
      myArray[1] !== "empty" &&
      myArray[1] === myArray[4] &&
      myArray[4] === myArray[7]
    ) {
      setMsg(`${myArray[1]} won`);
    } else if (
      myArray[2] !== "empty" &&
      myArray[2] === myArray[5] &&
      myArray[5] === myArray[8]
    ) {
      setMsg(`${myArray[2]} won`);
    } else if (
      myArray[0] !== "empty" &&
      myArray[0] === myArray[4] &&
      myArray[4] === myArray[8]
    ) {
      setMsg(`${myArray[0]} won`);
    } else if (
      myArray[2] !== "empty" &&
      myArray[2] === myArray[4] &&
      myArray[4] === myArray[6]
    ) {
      setMsg(`${myArray[2]} won`);
    }
  }

  const changeItem = itemNumber =>{
      if(msg){
        return toast(msg,{type : "success"})
      }

      if(myArray[itemNumber]==='empty'){
        myArray[itemNumber] = isCross ? 'cross' : 'circle'
        setIsCross(!isCross)
      }else{
        return toast('alredy filled' ,{type : 'warning'})
      }

      checkWinner()
  }
  return (
    <Container className='p-5'>
      <ToastContainer position='bottom-center' />
      <Row>
        <Col md={6} className='p-3 offset-md-3'>
        {msg ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {msg}
              </h1>
              <Button color="success" block onClick={reload}>
                Reload the game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className='grid'>
             {myArray.map((item , index)=>
               (
                <Card color='primary' onClick={()=>changeItem(index)} key={index}>
                  <CardBody  className='box'>
                    <Icon name={item} />
                  </CardBody>
                </Card>
               )
             )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
