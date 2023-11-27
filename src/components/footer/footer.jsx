import React from "react";
import './Footer.css';

const Footer = () => {
	return (
		<>
			<footer class="footer">
				<div class="container">
					<div class="row">

						<div class="footer-col" >
							<h4>Usuário</h4>
							<ul>
								<li><a href="#">Perfil</a></li>
								<li><a href="#">Meus eventos</a></li>
								<li><a href="#">Inscrições</a></li>
							</ul>
						</div>
						<div class="footer-col" >
							<h4>Eventos</h4>
							<ul>
								<li><a href="#">Procurar eventos</a></li>
								<li><a href="#">Criar eventos</a></li>

							</ul>
						</div>
						<div class="footer-col" >
							<h4>Equipe</h4>
							<ul>
								<li><a href="#">Sobre nós</a></li>
								<li><a href="#">Github</a></li>
							</ul>
						</div>



					</div>

				</div>

				<div class="copyright_group">

					<div className="copyright-text">
						<div className="codeside-img">
							<img src="./codeside_logo_footer.svg" alt="" />
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