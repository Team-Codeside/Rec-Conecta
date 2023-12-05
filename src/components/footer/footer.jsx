import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="row">

						<div className="footer-col" >
							<h4>Usuário</h4>
							<ul>
								<li><Link to ='/Perfil' >Perfil</Link></li> 
								<li><Link to ='/dashboard/my-events' >Meus eventos</Link></li>
								<li><Link to ='/dashboard/Subscribes' >Inscrições</Link></li>
							</ul>
						</div>
						<div className="footer-col" >
							<h4>Eventos</h4>
							<ul>
								<li><Link to ='/' >Inscrições</Link></li>
								<li><Link to ='/dashboard/new-event' >Criar eventos</Link></li>

							</ul>
						</div>
						<div className="footer-col" >
							<h4>Equipe</h4>
							<ul>
								<li><Link to ='/Sobre' >Sobre nós</Link></li>
								<li><Link to ='https://github.com/Team-Codeside/Rec-Conecta' target="blank" >Github</Link></li>
							</ul>
						</div>



					</div>

				</div>

				<div className="copyright_group">

					<div className="copyright-text">
						<div className="codeside-img">
							<img src="/codeside_logo_footer.svg" alt="" />
						</div>
						<p>
							Copyright CODESIDE© 2023 All rights reserved.
						</p>
					</div>

				</div>
			</footer>

		</>
	)
}

export default Footer;