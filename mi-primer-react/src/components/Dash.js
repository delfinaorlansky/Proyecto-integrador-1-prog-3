
import Products from './Products'
import Amount from './Amount'
import UsersQuant from './UsersQuant'

function Dash(params) {
    return (
		<div className="container-fluid">

			{/*  <!-- Page Heading --> */}
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>

			{/* <!-- Content Row -->*/}
			<div className="row">

                <Products titulo="Products in database" subtitulo="135" icon=" fa-clipboard-list" />
                <Amount titulo="Amount in products" subtitulo="$546.456" icon=" fa-dollar-sign" />
                <UsersQuant titulo="Users quantity" subtitulo="38" icon=" fa-user-check" />
     
                    </div>

        </div>
    );
}
export default Dash; 