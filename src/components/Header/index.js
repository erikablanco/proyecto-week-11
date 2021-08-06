import './header.css';
import Logo from '../Logo'
import Nav from '../Nav'
export default function Header (){
    return <header>
        <Logo/>
        <Nav contact="Contact" about="About" login="Login" />
    </header>
}















//import img from '../../assets/img/logo.png';
//import {Link} from 'react-router-dom';
//
//export default  function  Header(props) {
//
//    //console.log(props);
//    return (
//        <header>
//            <span><Link to="/"><img src=//{img} alt="Logo del proyecto"><///img></Link></span>
//            <span><Link to="/contact">//{props.contact}</Link></span>
//            <span><Link to="/about">{props.//contact}</Link></span>
//            <span><Link to="/login">{props.//contact}</Link></span>
//        </header>
//    )
//}

