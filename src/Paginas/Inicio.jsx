import Menu from "../Componentes/Menu.jsx"
import banner from "../assets/banner.jpg"

const Inicio = () => {
	return (

		<section>
			<Menu />
			<section className="banner" >
				<img src={banner} height="400"></img>
			</section>

			<section >
				<h1>Cursos</h1>
				<section className="texto">





					<p>   plataforma de aprendizaje en línea. Está dirigido a adultos profesionales. A diferencia de los programas académicos MOOC conducidos por tradicionales cursos de trabajo creados por las universidades, utiliza contenido de creadores en línea para vender y así conseguir ganancias. Proporciona herramientas para que los usuarios puedan crear un curso, promocionarlo y ganar dinero con gastos de inscripción de los estudiantes.

						Ninguno de los cursos son actualmente equivalentes a la obtención de un título universitario. Los estudiantes toman cursos en gran parte simplemente como medio para mejorar sus habilidades. Algunos cursos generan crédito hacia certificación técnica. Esta pagina ha hecho un esfuerzo especial para atraer a empresas que buscan crear cursos de trabajo especialmente para empleados de su compañía              ​</p>

				</section>
			</section>


		</section>






	)
}

export default Inicio