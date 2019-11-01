import React, { useContext, useState, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBBtn,
    MDBIcon,
    MDBModalFooter
} from "mdbreact";
import { Link } from "react-router-dom";

const Register = props => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/");
        }

        if (error === "User already exists") {
            setAlert(error, "danger");
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });

    const { name, name2, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (name === "" || email === "" || password === "") {
            setAlert("Please enter all fields", "danger");
        } else if (password !== password2) {
            setAlert("Passwords do no match", "danger");
        } else {
            register({
                name,
                email,
                password
            });
        }
    };

    return (
        <div onSubmit={onSubmit}>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody className="mx-4">
                                <form onSubmit={onSubmit}>
                                    <div className="text-center">
                                        <h3 className="dark-grey-text mb-5 mt-4 font-weight-bold">
                                            <strong>SIGN</strong>
                                            <a
                                                href="#!"
                                                className="blue-text font-weight-bold"
                                            >
                                                <strong> UP</strong>
                                            </a>
                                        </h3>
                                    </div>
                                    <MDBInput
                                        label="First Name"
                                        type="text"
                                        value={name}
                                        onChange={onChange}
                                        required
                                        containerClass="mb-0"
                                    />
                                    <MDBInput
                                        label="Last Name"
                                        type="text"
                                        value={name2}
                                        onChange={onChange}
                                        required
                                        containerClass="mb-0"
                                    />
                                    <MDBInput
                                        label="Your email"
                                        type="text"
                                        value={email}
                                        onChange={onChange}
                                        required
                                    />
                                    <MDBInput
                                        label="Password"
                                        type="password"
                                        value={password}
                                        onChange={onChange}
                                        containerClass="mb-0"
                                        required
                                        minLength="6"
                                    />
                                    <MDBInput
                                        label="Confirm Your Password"
                                        type="password"
                                        value={password2}
                                        onChange={onChange}
                                        containerClass="mb-0"
                                        required
                                        minLength="6"
                                    />
                                    <div className="text-center mb-3">
                                        <MDBBtn
                                            type="submit"
                                            gradient="blue"
                                            rounded
                                            className="btn-block z-depth-1a"
                                        >
                                            Create Account
                                        </MDBBtn>
                                    </div>
                                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                                        or Sign in with:
                                    </p>
                                    <div className="row my-3 d-flex justify-content-center">
                                        <MDBBtn
                                            type="button"
                                            color="white"
                                            rounded
                                            className="z-depth-1a"
                                        >
                                            <MDBIcon
                                                fab
                                                icon="facebook-f"
                                                className="blue-text text-center"
                                            />
                                        </MDBBtn>
                                        <MDBBtn
                                            type="button"
                                            color="white"
                                            rounded
                                            className="mr-md-3 z-depth-1a"
                                        >
                                            <MDBIcon
                                                fab
                                                icon="twitter"
                                                className="blue-text"
                                            />
                                        </MDBBtn>
                                        <MDBBtn
                                            type="button"
                                            color="white"
                                            rounded
                                            className="z-depth-1a"
                                        >
                                            <MDBIcon
                                                fab
                                                icon="google-plus-g"
                                                className="blue-text"
                                            />
                                        </MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                            <MDBModalFooter className="mx-5 pt-3 mb-1">
                                <p className="font-small grey-text d-flex justify-content-end">
                                    Already have an account?
                                    <Link
                                        to="/login"
                                        className="blue-text ml-1"
                                    >
                                        Sign In
                                    </Link>
                                </p>
                            </MDBModalFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Register;
