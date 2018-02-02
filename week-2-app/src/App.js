import React, {
  Component
} from 'react';
import './App.css';
import Box from './Box.js'
import DateBox from './Date.js'
import ImageBox from './ImageBox.js'



class App extends Component {
  render() {
      const titleText = "A Really Long Title Just To See What It's Like When the Title is Really Long";
      const bodyText = "Bacon ipsum dolor amet biltong turducken ball tip sausage swine burgdoggen sirloin bresaola t-bone jowl tenderloin pork loin. Pork jerky venison, pastrami tenderloin ham hock brisket fatback tongue ball tip burgdoggen shank. Bacon brisket corned beef swine salami. Ground round chicken venison kevin corned beef flank capicola. Swine frankfurter tri-tip short ribs burgdoggen, spare ribs doner tail ball tip pastrami brisket bacon landjaeger sausage porchetta.";
      const authorText = "John McCawidule"

      return (
        <div className = "App" >        
         <div className = "Row">
          <DateBox datetext = "Jan. 30, 2018" />
          <Box
          boxTitle = {titleText}
          boxText = {bodyText}
          boxAuthor = {authorText}/>
          <ImageBox imageBoxText = "image goes here"/>
         </div>

         <div className = "Row">
          <DateBox datetext = "Jan. 30, 2018" />
          <Box
          boxTitle = {titleText}
          boxText = {bodyText}
          boxAuthor = {authorText}/>
          <ImageBox imageBoxText = "image goes here"/>
         </div>

         <div className = "Row">
          <DateBox datetext = "Jan. 30, 2018" />
          <Box
          boxTitle = {titleText}
          boxText = {bodyText}
          boxAuthor = {authorText}/>
          <ImageBox imageBoxText = "image goes here"/>
         </div>
        </div>
      );
    }
  }


  export default App;
