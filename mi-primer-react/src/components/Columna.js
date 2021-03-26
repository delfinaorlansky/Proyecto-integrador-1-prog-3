import Pages from './Pages';
import Charts from './Charts';
import Tables from './Tables';



function Columna (){
    return(
        <nav>
            <div>
                Admin
            </div>
            <Pages titulo="Pages" />
            <Charts titulo="Charts"/>
            <Tables titulo="Tables" />

        </nav>
    );
}
export default Columna;
