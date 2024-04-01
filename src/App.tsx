import './App.css';
import TabItem from './components/TabItem';
import TabPanel from './components/TabPanel';

function App() {
  return (
    <div className="App">
      <TabPanel>
        <TabItem title='Tab One'>
          Content Number 1
        </TabItem>
        <TabItem title='Tab Two'>
          Content Number 2
        </TabItem>
        <TabItem title='Tab Three'>
          Content Number 3
        </TabItem>
      </TabPanel>
    </div>
  );
}

export default App;
