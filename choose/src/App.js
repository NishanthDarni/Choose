import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"
import axios from 'axios'
import Nav from './components/Nav'
import Search from './components/Search'
function App() {
  //when + is pressed a search bar top up should be know which allows to search and shows resuls then user have to select on mobile from it
  const [trigger,setTrigger]=useState(false);
  const [box,setBox]=useState()
  return (
    <>
      <Nav/>
      <Search trigger={trigger} box={box} setTrigger={setTrigger}/>
      <table>
        <tr>
          <td></td>
          <td className='mobile 1' id='mobile1' style={{verticalAlign: "top"}}><div onClick={()=>{setTrigger(true);setBox(1)}}>+</div></td>
          <td className='mobile 2' id='mobile2' style={{verticalAlign: "top"}}><div onClick={()=>{setTrigger(true);setBox(2)}}>+</div></td>
          <td className='mobile 3' id='mobile3' style={{verticalAlign: "top"}}><div onClick={()=>{setTrigger(true);setBox(3)}}>+</div></td>
          <td className='mobile 4' id='mobile4' style={{verticalAlign: "top"}}><div onClick={()=>{setTrigger(true);setBox(4)}}>+</div></td>
        </tr>
        <tr> 
           <td className='feature'>Display size</td>
           <td className='Displaysize1'></td>
           <td className='Displaysize2'></td>
           <td className='Displaysize3'></td>
           <td className='Displaysize4'></td>
        </tr>
        <tr> 
           <td className='feature'>Display resolution</td>
           <td className='Displayresolution1'></td>
           <td className='Displayresolution2'></td>
           <td className='Displayresolution3'></td>
           <td className='Displayresolution4'></td>
        </tr>
        <tr> 
           <td className='feature'>Camera pixels</td>
           <td className='Camerapixels1'></td>
           <td className='Camerapixels2'></td>
           <td className='Camerapixels3'></td>
           <td className='Camerapixels4'></td>
        </tr>
        <tr> 
           <td className='feature'>Video pixels</td>
           <td className='Videopixels1'></td>
           <td className='Videopixels2'></td>
           <td className='Videopixels3'></td>
           <td className='Videopixels4'></td>
        </tr>
        <tr> 
           <td className='feature'>RAM size</td>
           <td className='RAMsize1'></td>
           <td className='RAMsize2'></td>
           <td className='RAMsize3'></td>
           <td className='RAMsize4'></td>
        </tr>
        <tr> 
           <td className='feature'>Chipset</td>
           <td className='Chipset1'></td>
           <td className='Chipset2'></td>
           <td className='Chipset3'></td>
           <td className='Chipset4'></td>
        </tr>
        <tr> 
           <td className='feature'>Battery size</td>
           <td className='Batterysize1'></td>
           <td className='Batterysize2'></td>
           <td className='Batterysize3'></td>
           <td className='Batterysize4'></td>
        </tr>
        <tr> 
           <td className='feature'>Battery type</td>
           <td className='Batterytype1'></td>
           <td className='Batterytype2'></td>
           <td className='Batterytype3'></td>
           <td className='Batterytype4'></td>
        </tr>
      </table>
    </>
  );
}

export default App;
