import React from 'react'
import LoginComp from '../Components/LoginComp';
import Axios from 'axios';
import Swal from 'sweetalert2';
import Title from '../Components/Title';
import { Container } from 'react-bootstrap';
import { MainLayout } from '../styles/Layouts';

function LoginEmprendedorView() {

    const loginEmprendedor = async (data) => {
        const emprendedor = { mail: data.email, password: data.password };
        await Axios.post('emprendedor/login', emprendedor)
            .then((respuesta) => {
                const auth = respuesta.data.auth;
                if (!auth) {
                    Swal.fire({
                        icon: 'error',
                        title: respuesta.data.mensaje,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    const token = respuesta.data.token;
                    const id = respuesta.data.emprendedor._id;
                    const nombre = respuesta.data.emprendedor.nombre;
                    sessionStorage.setItem('token', token);
                    sessionStorage.setItem('id', id);
                    sessionStorage.setItem('nombre', nombre)
                    window.location.href = '/emprendedor'; //pendiente ruta de pagina a la que pasara despues de login

                    Swal.fire({
                        icon: 'success',
                        title: respuesta.data.mensaje,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <MainLayout>
            <Container>
                <Title
                    title={'Login Emprendedores'}
                    
                />
                <LoginComp login={loginEmprendedor} registro="block" />
            </Container>
        </MainLayout>
    );
}

export default LoginEmprendedorView
