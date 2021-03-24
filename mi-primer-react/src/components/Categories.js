function Categories (props){
    return (

<div class="col-lg-6 mb-4">						
<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary"> { props.titulo} Categories in Data Base</h6>
    </div>
    <div class="card-body">
        <div class="row">
            <div class="col-lg-6 mb-4">
                <div class="card bg-info text-white shadow">
                    <div class="card-body">
                       {props.categoria1} Category 01
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mb-4">
                <div class="card bg-info text-white shadow">
                    <div class="card-body">
                        {props.categoria2} Category 02
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mb-4">
                <div class="card bg-info text-white shadow">
                    <div class="card-body">
                        {props.categoria3} Category 03
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mb-4">
                <div class="card bg-info text-white shadow">
                    <div class="card-body">
                        {props.categoria4}  Category 04
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mb-4">
                <div class="card bg-info text-white shadow">
                    <div class="card-body">
                        {props.categoria5} Category 05
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mb-4">
                <div class="card bg-info text-white shadow">
                    <div class="card-body">
                       {props.categoria6} Category 06
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div> 




    )}
export default Categories;