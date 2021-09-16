import Link from "next/link";
import {useEffect, useState} from "react";
import UserAuth from "./UserAuth";

function Header() {
    const [username, setUsername] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState();

    useEffect(()=>{
        var tmp_username = UserAuth.get('username');
        if(tmp_username == null){
            setUsername('ログイン');
        }else{
            setUsername(tmp_username);
        }
    }, [username]);
   
    useEffect(()=>{
        var tmp_isLoggedIn = UserAuth.get('isLoggedIn');
        if(!tmp_isLoggedIn){
            setIsLoggedIn(false);
        }else{
            setIsLoggedIn(tmp_isLoggedIn);
        }
    }, [isLoggedIn])

    function SignoutButton(isLoggedIn){
        if(isLoggedIn){
            return(
                <li className="nav-item">
                    <a className="nav-link text-white mx-4" href="/" onClick={() => {UserAuth.Signout()}}>サインアウト</a>
                </li>
            )
        }
    
    }

    return(
        <nav className="navbar navbar-expand-sm navbar-dark mb-3">
            <Link href="/">
                <a className="navbar-brand text-white mx-4">Preduct</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav4">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-white mx-4" href="/login">{username}</a>
                    </li>
                  {SignoutButton(isLoggedIn)}
                </ul>
            </div>
        </nav>
    )
}

export default Header;