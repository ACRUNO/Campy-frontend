import React from 'react';
import Style from './Parrafo.module.css';

const FadeInParagraph: React.FC = () => {


    return (
        <p className={Style.fadeinparagraph}>
            Campy es un proyecto creado por alumnos del bootcamp  SoyHenry, en el cual se expone todo lo aprendido durante el mismo.
            Es una Aplicacion Orientada a los viajes y aventuras de Camping en la cual se pueden realizar reservas, conectar con nuevos lugares y con gente que tienen el mismo amor por la naturaleza y el turismo.
        </p>
    );
};

export default FadeInParagraph;