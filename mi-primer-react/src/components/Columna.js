import Pages from './Pages';
import Charts from './Charts';
import Tables from './Tables';



function Columna (){
    return(
        <nav>
            <div>
                Admin
            </div>
            <Pages/>
            <Charts/>
            <Tables/>

        </nav>
    );
}




export default Columna;
