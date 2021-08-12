import React from "react";
import './footer.css'
import GitIcon from '../../images/giticon.png'
import './styled'
import * as S from "./styled";

export default function Footer() {

    return (
        <footer className="Footer" margin-top="25px">
            <div className="FooterB">
                <p>&copy; Code & Design - <S.LinkFooter href="https://www.linkedin.com/in/marcosantoniosj/">Marcos</S.LinkFooter></p> <S.LinkFooter href="https://github.com/marcosjry"><img src={GitIcon} width="20" /></S.LinkFooter>
            </div>
        </footer>
    )
}