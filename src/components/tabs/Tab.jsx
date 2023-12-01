import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Tab.css'
import NewEvents from '../../pages/Create Events/NewEvents';
import Registrations from '../../pages/registrations/Registrations';
import Footer from '../../components/footer/footer';
import Navbar_ from '../navbar/navbar';
import MyEvents from '../../pages/My events/Myevents';

function Tabs_({ controler }) {

  return (
    <>
    <Navbar_/>
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
                <Registrations />
              </div>
            </Tab>
            <Tab eventKey="MyEvents" title="Meus Eventos">
              <div className="tab-pages">
                <MyEvents/>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tabs_;