export default function  Button({btnColor,children,type,size,actions}) {
    return (
        <button  type={type} 
            className={`btn btn-${btnColor} btn-${size} gap-1 `}
            onClick={actions}>

         {children}
        
         </button>
    );
}