import { Link } from 'react-router-dom';
import loginImg from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../routes/Auth/AuthProvider/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext);

    const handleLoign = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser);
                form.reset();
            })
            .catch(error => console.log(error))

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLoign}>
                            <div className="form-control">
                                <h1 className="text-2xl text-center font-bold">Login now!</h1>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                            <hr className=' mt-6 mb-6' />
                            <p>If new user <span className=' text-red-500'><Link to={'/signup'}>SignUp</Link></span> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;