import Button from '@enact/ui/Button';
import {css} from '@pigment-css/react';

import './App.css';

const pigmentDiv = css({
    marginTop: '25%',
    fontWeight: 'bold',
    fontSize: '33px'
});

function App() {
  return (
      <Button className={pigmentDiv}>I am created with Pigment CSS</Button>
  )
}

export default App;
