import logo from './logo.svg';
import './App.css';
import './styles.css'

import { Gradient } from 'whatamesh'
function App() {
  const gradient = new Gradient()
  gradient.initGradient('#gradient-canvas')

  return (
    <>
    {/* // <!-------------- Background Gradient --------------> */}
    <div className="gradient-container">
        {/* <!-- <div id="box">     --> */}
        <canvas id="gradient-canvas" data-transition-in/>
       
    </div>
    {/* <script src="Gradient.js"></script> */}
    {/* <script>
        //import { Gradient } from './Gradient.js'

        // Create your instance
        const gradient = new Gradient()

        // Call `initGradient` with the selector to your canvas
        gradient.initGradient('#gradient-canvas')
    </script> */}
   {/* <!-------------- Background Gradient --------------> */}


   <div className="noise"></div>

  <div className="grid-container">

    <div className="name">
      <h1>
        <span className="liam">LIAM K</span>
        <span className="jones"> JONES</span>
      </h1>
    </div>

    <div className="bio">
      <p>I am currently in my third year pursuing a Computer Science with Innovation degree (MEng), where I've gained valuable experience integrating core computer science skills in diverse, multi-disciplinary Agile projects.</p>
    </div>

    <div className="buttons">
      <button type="button">About</button>
      <button type="button">Projects</button>
      <button type="button">Contact</button>
    </div>

  
 
</div>
</>

  );
}

export default App;
