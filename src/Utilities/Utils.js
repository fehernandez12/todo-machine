import Swal from "sweetalert2";
/** AlertHelper class.
 * 
 * Provides static methods to easily access without repeating the
 * Swal.fire call. */ 
class AlertHelper {
  static alertSuccess(titleText, text) {
    Swal.fire(
      {
        icon: 'success',
        titleText: titleText,
        text: text,
        customClass: {
          container: 'body-font',
          confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
      }
    );
  }

  static alertWarning(titleText, text) {
    return Swal.fire(
      {
        icon: 'warning',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        titleText: titleText,
        text: text,
        showCancelButton: true,
        customClass: {
          container: 'body-font',
          confirmButton: 'btn btn-primary me-3',
          cancelButton: 'btn btn-danger'
        },
        cancelButtonText: 'Lo pensaré dos veces',
        confirmButtonText: 'Sé lo que hago',
        buttonsStyling: false
      }
    );
  }
}

export { AlertHelper };