import React from "react";

const UneArme = (props) => {
    
    return <>
        <div /*onClick={() => props.changArme(props.children)}*/>
            <img 
                src={props.armeImage} 
                alt={props.children}
                style={{
                    opacity: props.isArmeActuelle ? 1 : 0.5,
                    cursor: "pointer"
                }}
                onClick={props.clic}
            />
            <div className="fs-1">{props.children}</div>
        </div>
    </>;
};

export default UneArme;