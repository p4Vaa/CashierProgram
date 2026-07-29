export default function Button({btnColor,children,type,size,actions}) {
    return (
        <button  type={type} className={`btn btn-${btnColor} btn-${size}`} onClick={actions}>{children}</button>
    );
}