
import Products from './Products'
import Amount from './Amount'
import UsersQuant from './UsersQuant'

function Dash(){
    return (
        <ul>
            <Products titulo="Products in database" subtitulo="135" icon=" fa-clipboard-list" />
            <Amount titulo="Products in database" subtitulo="135" icon=" fa-clipboard-list" />
            <UsersQuant titulo="Products in database" subtitulo="135" icon=" fa-clipboard-list" />

        </ul>
    );
}
export default Dash;