import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend' ;
import './App.css';
import './components/taskStyle.css'
import Component from './components/Component';

function App() {

  return (
     <DndProvider backend={HTML5Backend}>
        <Component />
     </DndProvider>
  );
}

export default App;
