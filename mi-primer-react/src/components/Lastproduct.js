function Lastproduct (props){
    return(
		<div class="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">{props.titulo}</h6>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className= "img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 +'rem'}} src="assets/images/product_dummy.svg" alt="dato dummy"/> 
									</div>
									<p>{props.parrafo}</p>
									<a target="_blank" rel="nofollow" href="/">{props.target}</a>
								</div>
							</div>
						</div>
    ) }
export default Lastproduct;
