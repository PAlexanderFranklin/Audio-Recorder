import './SkynetButtons.css';
import AddToHomescreen from '../images/AddToHomescreen.svg';
import { SkynetContext } from '../state/SkynetContext';
import { useContext, useEffect, useState } from 'react';

function SkynetButtons() {

    const { mySky } = useContext(SkynetContext);
    const [ loginButton, setloginButton ] = useState(false);

    useEffect(() => {
        async function stuff() {
            try {
                if (mySky) {
                    setloginButton(!await mySky.checkLogin());
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        stuff()
    }, [mySky])

    return (
        <div className="SkynetButtons">
            { loginButton ?
                <button onClick={() => {mySky.requestLoginAccess();}}
                    className="login_to_mysky"
                >
                    Login to mySky
                </button>
                : ""
            }
            <a
            target="_blank"
            href="https://homescreen.hns.siasky.net/#/skylink/AQCrn58EwIKUsZ94r9bXOGauv-KapM77N1wT62jYAXWovw"
            rel="noreferrer"
            >
                <img src={AddToHomescreen} alt="Add To Skynet Homescreen" />
            </a>
        </div>
    );
}

export default SkynetButtons;
