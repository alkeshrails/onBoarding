import Swal from 'sweetalert2';

/*
  ------------------
    Alert Message
 --------------------
 */
export const showSuccess = (message) => {
  const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  toast.fire({
    type: 'success',
    title: message,
  });
};
