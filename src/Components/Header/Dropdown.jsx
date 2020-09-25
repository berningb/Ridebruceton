import React from 'react';
import { Link } from "react-router-dom";
import '../../Styles/Dropdown.scss'
import { animated } from 'react-spring'

const Dropdown = ({closeDropdown, openDropdown, show, style, fade, link, data, type, options}) => {
    let services = []

    data.map((service, index) => {
        let links = []
        service.Options.map((s, i) => {
            links.push(
            <Link onClick={() => closeDropdown()} 
                className="dropdown-item" 
                key={'link_' + i} to={{
                    pathname: `${link}/${s.name + index}`,
                    state: {
                        service: s
                    }}}>
                {s.name}
            </Link>)
            return links
        })

        services.push(
            <animated.div className='dropdown-menu-wrap' key={'service' + index} 
                style={fade}>
                <div className='dropdown-item label'>{service.Name}</div>
                <div className="dropdown-divider"></div>
                {links}
            </animated.div>
        )
        return services
    })

    
    return (
        <div className="dropdown">
            <Link onClick={() => closeDropdown()} 
            onMouseEnter={()=>openDropdown()} 
            className="btn btn-secondary dropdown-toggle" 
            to={link}>{type}</Link>
            {show && (<div className="dropdown" >
                        <animated.div className="dropdown-menu show " style={style} aria-labelledby="dropdownMenuButton">
                            {services}
                        </animated.div>
                    </div>)}
        </div>
    )
}
export default Dropdown;