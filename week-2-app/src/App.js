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
      const data = [
        {
          id: 1,
          date: "Jan. 30, 2018",
          title: "Kodak's Dubious Blockchain Gamble",
          body: "What's a 130-year-old photo company doing dabbling in cryptocurrency? Either revolutionising digital rights management or trying to make a quick buck.",
          author: "Kevin Roose",
          image: {PlacehImg1}
        },
        {
          id: 2,
          date: "Jan. 30, 2018",
          title: "Taiwan Retaliates Against Chinese Airlines, Hampering Lunar New Year Travel",
          body: "Taiwan, pushing back over encroachment on Taiwan Strait airspace, may leave thousands without flights home for the holiday.",
          author: "Chris Horton",
          image: {PlacehImg2}
        },
        {
          id: 3,
          date: "Jan. 30, 2018",
          title:"New Jersey Embraces an Idea it Once Rejected: Make Utilities Pay to Emit Carbon",
          body:"Democratic governors nationwide are taking steps to tax or price emissions within their own borders, even as Trump dismantles federal climate policy.",
          author: "Brad Plumer",
          image: {PlacehImg3}
        }
      ];

      const boxData = data.map((item, i) => {
        return  <Box
              key = {i}
              datetext = {item.date}
              boxTitle = {item.title}
              boxText = {item.body}
              boxAuthor = {item.author}
              imgFill = {item.image}
              />
      });


      return (
        <div className = "App" >
          <div className = "Row">
            {boxData}
          </div>
        </div>
      );
    }
  }


  export default App;
