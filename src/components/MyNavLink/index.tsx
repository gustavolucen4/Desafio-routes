import './style.css'
import { NavLink } from "react-router-dom";

type Props = {
    name: string,
    routeName: string
}

export default function MyNavLink({ name, routeName }: Props) {

    return (
        <NavLink
            className={({isActive}:any) => {
                return isActive ? "active-nav-link nav-link" : "nav-link";
            }}

            to={routeName}
        >
            {name}
        </NavLink>
    );
}