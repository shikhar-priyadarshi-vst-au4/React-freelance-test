import { useEffect } from 'react';
import { Register } from './register';
import { Login } from './login';
import "./account.scss";
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


export const Account = () => {

    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            history.push('/todo/activities');
        }
    }, []);

    const callToast = (msg) => toast(msg);

    return <>
        <div>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </div>
        <div className="container my-5">
            <div className="row row-cols-2">
                <div className="col-12 col-md-6">
                    <div className="layout">
                        <div className="text-center layout-heading user-select-none" >Register Account</div>
                        <Register toast={callToast} />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="layout">
                        <div className="text-center layout-heading user-select-none">Login</div>
                        <Login toast={callToast} />
                    </div>
                </div>
            </div>
        </div>
    </>
}