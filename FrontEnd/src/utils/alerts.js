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


export function cancleForm({setModalAdd}) {
    console.log(setModalAdd)
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
                console.log(setModalAdd)
                setModalAdd(prev=>!prev);
                console.log(setModalAdd)
                failedMSG("The Process Failed");
            }
        });
 }

export function deletHande(id,category) {
        Swal.fire({
            title:"Confirmation" ,
            text:`Do You wanna delete ${id} ${category}? `,
            icon:"question" ,
            showCancelButton:true ,
            cancelButtonText:"No, Keep it" ,
            cancelButtonColor:"green" ,

            confirmButtonText:"Delete" ,
            confirmButtonColor:"red" ,
        }).then((result)=>{
            if (result.isConfirmed) {
                deletHande();
                Swal.fire({
                    toast:true,
                    icon:"success",
                    timer:2500,
                    position:"top-right",
                    title:"Category successfully deleted...",
                    showConfirmButton:false,
                    timerProgressBar:true ,
                    
                });
            }
            else{
                failedMSG("The Process Failed");
            }
        });
 }