
import Swal from 'sweetalert2';

export function SwalAlert( text, image, position ) {
    Swal.fire({
        text,
        customClass: {
            container: 'position-absolute',
        },
        toast: true,
        position,
        showConfirmButton: false,
        timer: 1500,
        imageUrl: image,
        imageWidth: 65,
        background: '#ffd032',
        color: '#6649c4',
    });
}
