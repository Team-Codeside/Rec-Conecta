import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Tab.css'
import NewEvents from '../../pages/Create Events/NewEvents';

function Tabs_({ controler }) {

  return (
    <div className="conteiner-tabs">
      <div className='conteiner-tab'>
        <Tabs
          defaultActiveKey={controler}
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="NewEvents" title="Criação de Eventos">
            <div className="tab-pages">
              <NewEvents />
            </div>
          </Tab>
          <Tab eventKey="Subscribes" title="Inscrições">
            <div className="tab-pages">
              <h1>INSCRIÇÕES</h1>
            </div>
          </Tab>
          <Tab eventKey="MyEvents" title="Meus Eventos">
            <div className="tab-pages">
              <h1>MEUS EVENTOS</h1>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Tabs_;