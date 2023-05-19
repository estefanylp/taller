import Datos from "../assets/Cursos.json"
import imagen from "../assets/curso.jpg"

const datos = Datos.cursos

console.log(datos)
const Tarjeta = () => {
	return (
		<div className="contenido">


			{
				datos.map((dato) => (
					<section className="tarjeta">
						<img className="imagen" src={imagen}></img>

						<section className="titulos">
							<p><b>Nombre</b></p>
							<p><b>Profesor</b></p>
							<p><b>Duración</b></p>
							<p><b>Precio</b></p>
							<p><b>Horario</b></p>
							<p><b>Cupos</b></p>

						</section >
						<section className="datos">
							<p><b>{dato.nombre}</b></p>
							<p>{dato.profesor}</p>
							<p>{dato.duracion}</p>
							<p>{dato.precio}</p>
							<p>{dato.horario}</p>
							<p>{dato.cupos_disponibles}</p>



						</section >
					</section >




				))

			}




		</div >

	);
};




export default Tarjeta