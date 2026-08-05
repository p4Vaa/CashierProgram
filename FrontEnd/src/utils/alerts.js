import Swal from 'sweetalert2'

export function successMessage(message) {
    Swal.fire({
        toast:true,
        timerProgressBar:true ,
        position:"top-end",
        timer:"2500",
        title:message,
        icon:"success",
        showConfirmButton:false
    });
}


export function failedMSG(message) {
    Swal.fire({
        toast:true,
        position:"top-right",
        timer:2500,
        title:message,
        icon:"error",
        showConfirmButton:false,
        timerProgressBar:true ,

    });
}
export const failedAlert = (msg)=>{
        Swal.fire({
            title:"Warning" ,
            text:msg,
            icon:"warnig" ,
            showCancelButton:false ,
            confirmButtonText:"okey" ,
            confirmButtonColor:"green" ,
        })
}

export function cancleForm(modalFun , currentform,err) {
        Swal.fire({
            title:"Confirmation" ,
            text:"Are You Sure to leave the Form? ",
            icon:"question" ,
            showCancelButton:true ,
            cancelButtonText:"Keep Discard" ,
            cancelButtonColor:"green" ,
            confirmButtonText:"Leave" ,
            confirmButtonColor:"red" ,
        }).then((result)=>{
                
            if (result.isConfirmed) {
                modalFun(prev=>false);
                if (currentform =="addModal") {
                    failedMSG("No Added happen..");
                    err({});
                }
               else if ( currentform =="updateModal") {
                    failedMSG("No updated Happen");
                    err({});
                }
            }
        });
    }

 
export function error500(){
    Swal.fire({
        title:"Error",
        text:"Something Bad happen try Again Latter...",
        confirmButtonText:"Okey",
        confirmButtonColor:"green",
        icon:"error"
    })
}