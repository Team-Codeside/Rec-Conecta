import { useState, useEffect } from 'react';
import './NewEvents.css';
import api from '../../utils/api';
import { useNavigate } from 'react-router';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Form from 'react-bootstrap/Form';

const NewEvents = () => {
  const [photo, setPhoto] = useState(null);
  const [imagePreview, setImagePreview] = useState('/image.png');
  const [token] = useState(localStorage.getItem('token') || '')
  const [name, setName] = useState('')
  const [categoria, setCategoria] = useState('')
  const [hora, setHora] = useState('')
  const [endereco, setEndereco] = useState('')
  const [dataev, setDataev] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate();
  

  const onFileChange = (e) => {
    const files = e.target.files[0];
    if (files) {
        const previewURL = URL.createObjectURL(files);
        setImagePreview(previewURL);
      } else {
        setImagePreview('/image.png');
      }
    setPhoto(files);
  };

  async function EnviarEvento (){
    const formData = new FormData()
    formData.append('name',name)
    formData.append('description',description)
    formData.append('categoria',categoria)
    formData.append('dataev',dataev)
    formData.append('hora',hora)
    formData.append('endereco',endereco)
    formData.append('images',photo)
    try {
      const response = await api.post('/eventos/create',formData, {
        headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      

      console.log(response.data);
      navigate('/dashboard/my-events');
    } catch (error) {
      console.error('Erro ao criar evento:', error);
      // Adicione o tratamento de erro conforme necessário
    }
  };

  return (
    <>
      <div className="NewEvents-conteiner">
        <h1>Crie Seus Eventos</h1>
        <div className="events-photo">
          <input
            type="file"
            name="images"
            id="photo"
            onChange={onFileChange}
            multiple
          />
          <label htmlFor="photo" id="photo-label">
            <div
              className="input-photo"
              style={{ backgroundImage: `url('${imagePreview}')` }}
            ></div>
            <div className="events-input-texts">
              <p>
                Insira o banner de perfil do seu evento Confira se ela está em
                boa qualidade. Os arquivos suportados são: .png, .jpg Tamanho
                da imagem: 1440x471 (px)
              </p>
            </div>
          </label>
        </div>
        <div className="NewEvents-inputs">
            <form action="">
          <Input
            type_="text"
            label_=""
            name_="name"
            placeholder_="Nome do Evento"
            width_="100%"
            heigth_="6vh"
            backgroundcolor_=""
            color_=""
            border_=""
            radius_="8px"
            fontsizelabel_=""
            margin_=""
            padding_=""
            Onchange_={(event) => {setName(event.target.value)}}
            
            required
          />
          <Input
            type_="text"
            label_=""
            name_="description"
            placeholder_="Descrição do Evento"
            width_="100%"
            heigth_="6vh"
            backgroundcolor_=""
            color_=""
            border_=""
            radius_="8px"
            fontsizelabel_=""
            margin_=""
            padding_=""
            Onchange_={(event) => {setDescription(event.target.value)}}
            
            required
          />
          <Input
            type_="text"
            label_=""
            name_="categoria"
            placeholder_="Categoria"
            width_="100%"
            heigth_="6vh"
            backgroundcolor_=""
            color_=""
            border_=""
            radius_="8px"
            fontsizelabel_=""
            margin_=""
            padding_=""
            Onchange_={(event) => {setCategoria(event.target.value)}}
           
            required
          />
          <Input
            type_="text"
            label_=""
            name_="dataev"
            placeholder_="DD/MM/AAAA"
            width_="100%"
            heigth_="6vh"
            backgroundcolor_=""
            color_=""
            border_=""
            radius_="8px"
            fontsizelabel_=""
            margin_=""
            padding_=""
            Onchange_={(event) => {setDataev(event.target.value)}}
          
            required
          />
          <Input
            type_="text"
            label_=""
            name_="hora"
            placeholder_="Hora do Evento"
            width_="100%"
            heigth_="6vh"
            backgroundcolor_=""
            color_=""
            border_=""
            radius_="8px"
            fontsizelabel_=""
            margin_=""
            padding_=""
            Onchange_={(event) => {setHora(event.target.value)}}
           
            required
          />
          <Input
            type_="text"
            label_=""
            name_="endereco"
            placeholder_="Localização"
            width_="100%"
            heigth_="6vh"
            backgroundcolor_=""
            color_=""
            border_=""
            radius_="8px"
            fontsizelabel_=""
            margin_=""
            padding_=""
            Onchange_={(event) => {setEndereco(event.target.value)}}
            
            required
          />
          
          <Button
              id_=""
              className=""
              width_="300px"
              heigth_=""
              backgroundcolor_="#FF5212"
              color_="#fff"
              border_="none"
              radius_="8px"
              weigth_="600"
              font_="Roboto"
              text_button="Confirmar"
              padding_=""
              margin_="30px auto"

              type_="submit"
              value_="Enviar evento"
              Onclick_={EnviarEvento}
            />
       

       </form>
        </div>
      </div>
    </>
  );
};

export default NewEvents;