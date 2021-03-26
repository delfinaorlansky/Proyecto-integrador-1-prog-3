function Pages (props){
    return(
    <li className="nav-item">
    <a className="nav-link collapsed" href="/">
        <i className="fas fa-fw fa-folder"></i>
        <span>{props.titulo}</span>
    </a>
</li>
    )}
export default Pages;
