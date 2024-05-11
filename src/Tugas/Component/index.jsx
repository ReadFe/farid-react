import React from "react";
import FirstComponent from "./tugas/firstComponent";
import SecondComponent from "./tugas/secondComponent";

export default class Components extends React.Component {

    render() {
        return(
            <div>
                <FirstComponent nama="Farid" />
                <SecondComponent nama="Eduwork"/>
            </div>
        )
    }
}