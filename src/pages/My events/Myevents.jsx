import './Myevents.css'
import CardDashboard from '../../components/cards my events/CardDashboard';

const MyEvents = () => {
    return ( 
        <>
        <CardDashboard
       width_card="100%"
       height_card="100%"
       width_image="100%"
       height_image="20vh"
       imagem="/Recife-1.png"
       size_title="25px"
       color_title="#221F8A"
       titulo="Passeio de bike pelos rios"
       size_texto="16px"
       texto="venha conosco conhecer os rios do Recife e apreciar as belezas da natureza!"
       data_size="12px"
       data="Recife - 2023"
       link="/Evento"/>
        <CardDashboard
       width_card="100%"
       height_card="100%"
       width_image="100%"
       height_image="20vh"
       imagem="/Recife-1.png"
       size_title="25px"
       color_title="#221F8A"
       titulo="Passeio de bike pelos rios"
       size_texto="16px"
       texto="venha conosco conhecer os rios do Recife e apreciar as belezas da natureza!"
       data_size="12px"
       data="Recife - 2023"
       link="/Evento"/>
        </>
     );
}
 
export default MyEvents;