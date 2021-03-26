import Dash from './Dash';
import Lastproduct from './Lastproduct'
import DataBase from './DataBase'

function Contenido () {
return (
    <nav>
        <div>
        App Dashboard
    </div>
        <Dash/>
        <Lastproduct titulo= 'Last product in Data Dase' parrafo= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?' target='View product detail' />
        <DataBase/>
</nav>

);
}

export default Contenido;

