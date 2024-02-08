
import { Description } from '../Description/Description';
import { Feedback } from '../Feedback/Feedback';
import { Options } from '../Options/Options';



export const  App = () => {
  return (
    <div>
      <h1>Sip Happens Café</h1>
 <p>Please leave your feedback about our service by selecting one of the options below.</p>
 <Description/>
 <Feedback/>
 <Options/>

    </div>
  );
};
export default App;