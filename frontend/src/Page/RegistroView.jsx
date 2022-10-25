import React from "react";
import { MainLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import {RegistroComp} from '../Components/RegistroComp';

function RegistroView() {
    return (
        <MainLayout>
            <Title title={'registro'}/>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <RegistroComp/>
        </MainLayout>
    );
}

export default RegistroView
