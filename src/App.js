import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import '@material/react-card/dist/card.min.css';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";

let apiget = async (request) =>
  await fetch(`https://api.wifiplug.co.uk/v1.0/${request}/`, {
    method:'GET',
    headers: {
      'content-type':'application/json',
      'X-Api-Key':key,
      'X-Api-Secret':secret // import from another file
    }
  }).then((e)=>e.json)

let DevicePanel = (props) => {

  let [powerstate, setpower] = useState()
  return(<div> {/*waiting on christian for this component, but coding handlers first. i assume elliot is tinkering with api*/}
    <button onClick={setpower(!powerstate)}></button> 
  </div>)}

let App = () => {
  let devices = useEffect()
  return(<div>
    a ah aaa
    {devices.map(e => (DevicePanel({
      image: /*e.image*/"https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FG%2F01%2Faplusautomation%2Fvendorimages%2Ffce10a33-e801-409a-a4aa-e413ab856f31.jpg._CB304891446_.jpg&f=1",
      title: e.name
    })))}
  </div>
)}

export default App;
