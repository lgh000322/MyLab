import React, { useEffect, useState } from "react";
import ModifyComponent from "../../components/todo/ModifyComponent";
import { useParams } from "react-router-dom";



function ModifyPage() {

    const { tno } = useParams();

    return (
        <div className="text-3xl font-extrabold">
            Todo Modify Page
            <ModifyComponent tno={tno}></ModifyComponent>
        </div>

    )
}

export default ModifyPage;