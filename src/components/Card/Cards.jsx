import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cards.css"

//!props para setar os atributos do componente cards
function Cards({width_card, height_card, width_image, height_image, imagem, size_title, color_title, titulo, size_texto, texto,data_size, data,link }) {
  return (

    <a href={link} id='card_link'>
      <div className="card">
        {/*//!puxando o componente card do react-bootstrap*/}
        <Card style={{width: width_card, height: height_card,boxShadow:'0px 2px 4px #161616ca'}}>
          {/*//!deixando a imagem no topo*/}
          <Card.Img variant="top" src={imagem} style={{width: width_image, height: height_image}} />
          {/*//!corpo do card */}
          <Card.Body>
            {/*//!titulo do card */}
            <Card.Title style={{fontSize: size_title, color: color_title}}>{titulo}</Card.Title>
            {/*//!texto do card */}
            <Card.Text style={{fontSize: size_texto}}>
              {texto}
            </Card.Text>
            {/*//!data do card */}
            <Card.Text style={{fontSize: data_size}}>
              {data}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </a>

  );
}

export default Cards;