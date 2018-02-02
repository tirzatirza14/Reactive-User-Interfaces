import React, {
  Component
} from 'react';
import './App.css';
import Box from './Box.js'
import PlacehImg1 from './assets/1.png';
import PlacehImg2 from './assets/2.png';
import PlacehImg3 from './assets/3.png';

class App extends Component {
  render() {

      const dateFill = "Jan. 30, 2018";

      const titleText1 = "Kodak's Dubious Blockchain Gamble";
      const bodyText1 = "What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionising digital rights management or trying to make a quick buck.";
      const authorText1 = "Kevin Roose"

      const titleText2 = "Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel";
      const bodyText2 = "Taiwan, pushing back over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.";
      const authorText2 = "Chris Horton"

      const titleText3 = "New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon";
      const bodyText3 = "Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy.";
      const authorText3 = "Brad Plumer"

      return (
        <div className = "App" >
          <div className = "Row">
          <Box
          datetext = {dateFill}
          boxTitle = {titleText1}
          boxText = {bodyText1}
          boxAuthor = {authorText1}
          imgFill = {PlacehImg1}/>

          <Box
          datetext = {dateFill}
          boxTitle = {titleText2}
          boxText = {bodyText2}
          boxAuthor = {authorText2}
          imgFill = {PlacehImg2}/>

          <Box
          datetext = {dateFill}
          boxTitle = {titleText3}
          boxText = {bodyText3}
          boxAuthor = {authorText3}
          imgFill = {PlacehImg3}/>
          </div>
        </div>
      );
    }
  }


  export default App;
