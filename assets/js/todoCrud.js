import {
  addEmpleado,
  getEmpleadosCollection,
  deleteEmpleadoCollection,
  getEmpleadoCollection,
  updateEmpleadoCollection,

  addEmpleado1,
  getEmpleadosCollection1,
  deleteEmpleadoCollection1,
  getEmpleadoCollection1,
  updateEmpleadoCollection1,
} from "./firebase.js";

/**
 * 
 * firebase deploy --only hosting
 * 
 */

/**
 * Función para levantar Venta Modal
 */
window.miModal = async function (idModal, idEmpleado = "") {
  try {
    await validarModal(idModal);

    let url = "";
    switch (idModal) {
      case "agregarEmpleadoModal":
        url = "modales/modalesBautismo/modalAdd.php";
        break;
      case "detalleEmpleadoModal":
        url = "modales/modalesBautismo/modalDetalles.php";
        break;
      case "editarEmpleadoModal":
        url = "modales/modalesBautismo/modalEditar.php";
        break;
      case "eliminarEmpleadoModal":
        url = "modales/modalesBautismo/modalDelete.php";
        break;
      
        case "agregarEmpleadoModal1":
          url = "modales/modalesConfirmacion/modalAdd.php";
          break;
        case "detalleEmpleadoModal1":
          url = "modales/modalesConfirmacion/modalDetalles.php";
          break;
        case "editarEmpleadoModal1":
          url = "modales/modalesConfirmacion/modalEditar.php";
          break;
        case "eliminarEmpleadoModal1":
          url = "modales/modalesConfirmacion/modalDelete.php";
          break;
      default:
        throw new Error(`El idModal '${idModal}' no es válido`);
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error al cargar la modal");
    }

    // response.text() es un método en programación que se utiliza para obtener el contenido de texto de una respuesta HTTP
    const data = await response.text();

    // Crear un elemento div para almacenar el contenido de la modal
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = data;

    // Agregar la modal al documento actual
    document.body.appendChild(modalContainer);

    // Mostrar la modal
    const modalElement = modalContainer.querySelector(`#${idModal}`);
    const myModal = new bootstrap.Modal(modalElement);
    myModal.show();

    if (idModal === "detalleEmpleadoModal") {
      await cargarDetalleEmpleado(idEmpleado);
    } else if (idModal === "editarEmpleadoModal") {
      await getEmpleadoUpdateCollection(idEmpleado);
    } else if (idModal === "eliminarEmpleadoModal") {
      let DeleteBtn = document.querySelector("#confirmDeleteBtn");
      DeleteBtn.addEventListener("click", async () => {
        await eliminarEmpleado(idEmpleado);
      });
    } else if (idModal === "detalleEmpleadoModal1"){
      await cargarDetalleEmpleado1(idEmpleado);
    } else if (idModal === "editarEmpleadoModal1"){
      await getEmpleadoUpdateCollection1(idEmpleado)
    } else if (idModal === "eliminarEmpleadoModal1") {
      let DeleteBtn = document.querySelector("#confirmDeleteBtn1");
      DeleteBtn.addEventListener("click", async () => {
        await eliminarEmpleado1(idEmpleado);
      });
    }
  } catch (error) {
    console.error(error);
  }
};



/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
//Función para validar si existe una modal abierta
async function validarModal(idModal) {
  const existingModal = document.getElementById(idModal);
  if (existingModal) {
    const modal = bootstrap.Modal.getInstance(existingModal);
    if (modal) {
      modal.hide();
    }
    existingModal.remove();
  }
}

/**
 * Función para obtener todas las colecciones
 */
async function mostrarEmpleadosEnHTML() {
  try {
    const empleadosCollection = getEmpleadosCollection();
    const queryCollection = await empleadosCollection;

    const tablaEmpleados = document.querySelector("#tablaEmpleados tbody");
    tablaEmpleados.innerHTML = "";

    queryCollection.forEach((doc) => {
      const empleado = doc.data();
      const fila = document.createElement("tr");
      fila.id = doc.id; // Asignar el ID del documento al elemento tr
      fila.innerHTML = `
        <td>${empleado.nombreBautizado}</td>
        <td>${empleado.dni}</td>
        <td>${empleado.fechaBautismo}</td>
        <td>
          <a title="Ver detalles del certificado" href="#" onclick="window.miModal('detalleEmpleadoModal','${doc.id}')" class="btn btn-success">
              <i class="bi bi-binoculars"></i>
          </a>
          
          <a title="Eliminar datos del certificado" href="#" onclick="window.miModal('eliminarEmpleadoModal','${doc.id}')" class="btn btn-danger">
              <i class="bi bi-trash"></i>
          </a>               
        </td>
      `;
      /**
       * <a title="Editar datos del empleado" href="#" onclick="window.miModal('editarEmpleadoModal','${doc.id}')" class="btn btn-warning">
              <i class="bi bi-pencil-square"></i>
          </a>
       */
      tablaEmpleados.appendChild(fila);
      //console.log("Empleado:", doc.data());
    });
  } catch (error) {
    console.error("Error al obtener los empleados:", error);
  }
}

async function mostrarEmpleadosEnHTML1() {
  try {
    const empleadosCollection = getEmpleadosCollection1();
    const queryCollection = await empleadosCollection;

    const tablaEmpleados = document.querySelector("#tablaEmpleados1 tbody");
    tablaEmpleados.innerHTML = "";

    queryCollection.forEach((doc) => {
      const empleado = doc.data();
      const fila = document.createElement("tr");
      fila.id = doc.id; // Asignar el ID del documento al elemento tr
      //fechaConfirmacionPadrino, bautizado, libro, folio, diocesis, fechaConfirmacion, fechaBautismo
      fila.innerHTML = `
        <td>${empleado.nombreConfirmando}</td>
        <td>${empleado.dni}</td>
        <td>${empleado.fechaConfirmacion}</td>
        <td>
          <a title="Ver detalles del certificado" href="#" onclick="window.miModal('detalleEmpleadoModal1','${doc.id}')" class="btn btn-success">
              <i class="bi bi-binoculars"></i>
          </a>
          
          <a title="Eliminar datos del Certificado" href="#" onclick="window.miModal('eliminarEmpleadoModal1','${doc.id}')" class="btn btn-danger">
              <i class="bi bi-trash"></i>
          </a>               
        </td>
      `;
      /**
       * <a title="Editar datos del empleado" href="#" onclick="window.miModal('editarEmpleadoModal1','${doc.id}')" class="btn btn-warning">
              <i class="bi bi-pencil-square"></i>
          </a>
       */
      tablaEmpleados.appendChild(fila);
      //console.log("Empleado:", doc.data());
    });
  } catch (error) {
    console.error("Error al obtener los certificados:", error);
  }
}

window.addEventListener("DOMContentLoaded", mostrarEmpleadosEnHTML);
window.addEventListener("DOMContentLoaded", mostrarEmpleadosEnHTML1);

/**
 * Función para agregar un nuevo empleado
 */
window.addNuevoEmpleado = async function (event) {
  event.preventDefault();

  const formulario = document.querySelector("#formularioEmpleado");
  const formData = new FormData(formulario);

  // Convertir FormData a un objeto JSON
  const formDataJSON = {};
  formData.forEach((value, key) => {
    formDataJSON[key] = value;
  });

  const { parroquia, lugar, fechaBautismo, pbro, nombreBautizado, dni, nacio, nacionalidad, fechaNacimiento, nombrePadre, nacionalidadPadre, nombreMadre, nacionalidadMadre, domicilioFamiliar, nombrePadrino, nombreMadrina, libro, folio } = formDataJSON;

  try {
    await addEmpleado( parroquia, lugar, fechaBautismo, pbro, nombreBautizado, dni, nacio, nacionalidad, fechaNacimiento, nombrePadre, nacionalidadPadre, nombreMadre, nacionalidadMadre, domicilioFamiliar, nombrePadrino, nombreMadrina, libro, folio );
    formulario.reset();
    setTimeout(() => {
      $("#agregarEmpleadoModal").css("opacity", "");
      $("#agregarEmpleadoModal").modal("hide");
    }, 300);

    window.mostrarAlerta({ tipoToast: "success", mensaje: "¡Certificado registrado correctamente!" });
  } catch (error) {
    console.log(error);
  }
};

window.addNuevoEmpleado1 = async function (event) {
  event.preventDefault();

  const formulario = document.querySelector("#formularioEmpleado1");
  const formData = new FormData(formulario);

  // Convertir FormData a un objeto JSON
  const formDataJSON = {};
  formData.forEach((value, key) => {
    formDataJSON[key] = value;
  });

  const { parroquia, nombreConfirmando, dni, edad, hijo, nombrePadre, nombreMadre, padrino, fechaConfirmacionPadrino, bautizado, libro, folio, diocesis, fechaConfirmacion, fechaBautismo } = formDataJSON;

  try {
    await addEmpleado1(parroquia, nombreConfirmando, dni, edad, hijo, nombrePadre, nombreMadre, padrino, fechaConfirmacionPadrino, bautizado, libro, folio, diocesis, fechaConfirmacion, fechaBautismo);
    formulario.reset();
    setTimeout(() => {
      $("#agregarEmpleadoModal1").css("opacity", "");
      $("#agregarEmpleadoModal1").modal("hide");
    }, 300);

    window.mostrarAlerta({ tipoToast: "success", mensaje: "¡Registrado correctamente!" });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Función para cargar y mostrar los detalles del empleado en la modal
 */
async function cargarDetalleEmpleado(id) {
  try {
    const empleadoDoc = await getEmpleadoCollection(id);
    if (empleadoDoc.exists()) {
      const empleadoData = empleadoDoc.data();
      const { parroquia, lugar, fechaBautismo, pbro, nombreBautizado, dni, nacio, nacionalidad, fechaNacimiento, nombrePadre, nacionalidadPadre, nombreMadre, nacionalidadMadre, domicilioFamiliar, nombrePadrino, nombreMadrina, libro, folio } = empleadoData;

      const ulDetalleEmpleado = document.querySelector("#detalleEmpleadoContenido ul");

      ulDetalleEmpleado.innerHTML = ` 
        <li class="list-group-item"><b>Parroquia:</b> 
          ${parroquia ? parroquia : "No disponible"}
        </li>
        <li class="list-group-item"><b>Lugar:</b> 
          ${lugar ? lugar : "No disponible"}
        </li>
        <li class="list-group-item"><b>Fecha de Bautismo:</b> 
          ${fechaBautismo ? fechaBautismo : "No disponible"}
        </li>
        <li class="list-group-item"><b>Celebrante:</b> 
          ${pbro ? pbro : "No disponible"}
        </li>
        <li class="list-group-item"><b>Nombre y Apellido:</b> 
          ${nombreBautizado ? nombreBautizado : "No disponible"}
        </li>
        <li class="list-group-item"><b>DNI:</b> 
          ${dni ? dni : "No disponible"}
        </li>
        <li class="list-group-item"><b>Lugar Nacimiento:</b> 
          ${nacio ? nacio : "No disponible"}
        </li>
        <li class="list-group-item"><b>Nacionalidad:</b> 
          ${nacionalidad ? nacionalidad : "No disponible"}
        </li>
        <li class="list-group-item"><b>Fecha de Nacimiento:</b> 
          ${fechaNacimiento ? fechaNacimiento : "No disponible"}
        </li>
        <li class="list-group-item"><b>Nombre Padre:</b> 
          ${nombrePadre ? nombrePadre : "No disponible"}
        </li>
        <li class="list-group-item"><b>Nacionalidad Padre:</b> 
          ${nacionalidadPadre ? nacionalidadPadre : "No disponible"}
        </li>
        <li class="list-group-item"><b>Nombre Madre:</b> 
          ${nombreMadre ? nombreMadre : "No disponible"}
        </li>
        <li class="list-group-item"><b>Nacionalidad Madre:</b> 
          ${nacionalidadMadre ? nacionalidadMadre : "No disponible"}
        </li>
        <li class="list-group-item"><b>Domicilio Familiar:</b> 
          ${domicilioFamiliar ? domicilioFamiliar : "No disponible"}
        </li>
        <li class="list-group-item"><b>Nombre Padrino:</b> 
          ${nombrePadrino ? nombrePadrino : "No disponible"}
        </li>
        <li class="list-group-item"><b>Nombre Madrina:</b> 
          ${nombreMadrina ? nombreMadrina : "No disponible"}
        </li>
        <li class="list-group-item"><b>Libro:</b> 
          ${libro ? libro : "No disponible"}
        </li>
        <li class="list-group-item"><b>Folio:</b> 
          ${folio ? folio : "No disponible"}
        </li>
      `;
    } else {
      console.log("No se encontró ningún certificado de Bautismo con el ID:", id);
    }
  } catch (error) {
    console.error("Error al mostrar detalles del empleado", error);
  }
}

async function cargarDetalleEmpleado1(id) {
  try {
    const empleadoDoc = await getEmpleadoCollection1(id);
    if (empleadoDoc.exists()) {
      const empleadoData = empleadoDoc.data();
      const { parroquia, nombreConfirmando, dni, edad, hijo, nombrePadre, nombreMadre, padrino, fechaConfirmacionPadrino, bautizado, libro, folio, diocesis, fechaConfirmacion, fechaBautismo } = empleadoData;

      const ulDetalleEmpleado = document.querySelector("#detalleEmpleadoContenido1 ul");

      ulDetalleEmpleado.innerHTML = ` 
        <li class="list-group-item"><b>Parroquia:</b> 
          ${parroquia ? parroquia : "No disponible"}
        </li>
        <li class="list-group-item"><b>Nombre:</b> 
          ${nombreConfirmando ? nombreConfirmando : "No disponible"}
        </li>
        <li class="list-group-item"><b>DNI:</b> 
          ${dni ? dni : "No disponible"}
        </li>
        <li class="list-group-item"><b>Edad:</b> 
          ${edad ? edad : "No disponible"}
        </li>
        <li class="list-group-item"><b>Hijo:</b> 
          ${hijo ? hijo : "No disponible"}
        </li>
        <li class="list-group-item"><b>Nombre Padre:</b> 
          ${nombrePadre ? nombrePadre : "No disponible"}
        </li>
        <li class="list-group-item"><b>Nombre Madre:</b> 
          ${nombreMadre ? nombreMadre : "No disponible"}
        </li>
        <li class="list-group-item"><b>Padrino-Madrina:</b> 
          ${padrino ? padrino : "No disponible"}
        </li>
        <li class="list-group-item"><b>Confirmacion Padrino-Madrina:</b> 
          ${fechaConfirmacionPadrino ? fechaConfirmacionPadrino : "No disponible"}
        </li>
        <li class="list-group-item"><b>Bautizado en:</b> 
          ${bautizado ? bautizado : "No disponible"}
        </li>
        <li class="list-group-item"><b>Libro:</b> 
          ${libro ? libro : "No disponible"}
        </li>
        <li class="list-group-item"><b>Folio:</b> 
          ${folio ? folio : "No disponible"}
        </li>
        <li class="list-group-item"><b>Diocesis:</b> 
          ${diocesis ? diocesis : "No disponible"}
        </li>
        <li class="list-group-item"><b>Fecha Bautismo:</b> 
          ${fechaBautismo ? fechaBautismo : "No disponible"}
        </li>
        <li class="list-group-item"><b>Fecha Confirmacion:</b> 
          ${fechaConfirmacion ? fechaConfirmacion : "No disponible"}
        </li>
      `;
    } else {
      console.log("No se encontró ningún certificado con el ID:", id);
    }
  } catch (error) {
    console.error("Error al mostrar detalles del certificado", error);
  }
}

/**
 * Buscar empleado a editar
 */
async function getEmpleadoUpdateCollection(id) {
  try {
    const empleadoDoc = await getEmpleadoCollection(id);
    if (empleadoDoc.exists()) {
      const empleadoData = empleadoDoc.data();
      const { parroquia, lugar, fechaBautismo, pbro, nombreBautizado, dni, nacio, nacionalidad, fechaNacimiento, nombrePadre, nacionalidadPadre, nombreMadre, nacionalidadMadre, domicilioFamiliar, nombrePadrino, nombreMadrina, libro, folio } = empleadoData;
      document.querySelector("#idCertificado").value = id;
      document.querySelector("#parroquia").value = parroquia;
      document.querySelector("#lugar").value = lugar;
      document.querySelector("#fechaBautismo").value = fechaBautismo;
      document.querySelector("#pbro").value = pbro;
      document.querySelector("#nombreBautizado").value = nombreBautizado;
      document.querySelector("#dni").value = dni;
      document.querySelector("#nacio").value = nacio;
      document.querySelector("#fechaNacimiento").value = fechaNacimiento;
      document.querySelector("#nacionalidad").value = nacionalidad;
      document.querySelector("#nombrePadre").value = nombrePadre;
      document.querySelector("#nacionalidadPadre").value = nacionalidadPadre;
      document.querySelector("#nombreMadre").value = nombreMadre;
      document.querySelector("#nacionalidadMadre").value = nacionalidadMadre;
      document.querySelector("#domicilioFamiliar").value = domicilioFamiliar;
      document.querySelector("#nombrePadrino").value = nombrePadrino;
      document.querySelector("#nombreMadrina").value = nombreMadrina;
      document.querySelector("#libro").value = libro;
      document.querySelector("#folio").value = folio;

    } else {
      console.log("No se encontró ningún certificado con el ID:", id);
    }
  } catch (error) {
    console.error("Error al obtener los detalles del certificado:", error);
  }
}

async function getEmpleadoUpdateCollection1(id) {
  try {
    const empleadoDoc = await getEmpleadoCollection1(id);
    if (empleadoDoc.exists()) {
      const empleadoData = empleadoDoc.data();
      const { parroquia, nombreConfirmando, dni, edad, hijo, nombrePadre, nombreMadre, padrino, fechaConfirmacionPadrino, bautizado, libro, folio, diocesis, fechaConfirmacion, fechaBautismo } = empleadoData;
      document.querySelector("#idEmpleado1").value = id;
      document.querySelector("#parroquia").value = parroquia;
      document.querySelector("#nombreConfirmando").value = nombreConfirmando;
      document.querySelector("#dni").value = dni;
      document.querySelector("#edad").value = edad;
      document.querySelector("#hijo").value = hijo;
      document.querySelector("#nombrePadre").value = nombrePadre;
      document.querySelector("#nombreMadre").value = nombreMadre;
      document.querySelector("#padrino").value = padrino;
      document.querySelector("#fechaConfirmacionPadrino").value = fechaConfirmacionPadrino;
      document.querySelector("#bautizado").value = bautizado;
      document.querySelector("#libro").value = libro;
      document.querySelector("#folio").value = folio;
      document.querySelector("#diocesis").value = diocesis;
      document.querySelector("#fechaConfirmacion").value = fechaConfirmacion;
      document.querySelector("#fechaBautismo").value = fechaBautismo;
    } else {
      console.log("No se encontró ningún certificado con el ID:", id);
    }
  } catch (error) {
    console.error("Error al obtener los detalles del certificado:", error);
  }
}

/**
 * Función para actualizar el empleado
 */
window.actualizarEmpleado = async function (event) {
  event.preventDefault();
  const formulario = document.querySelector("#formularioEmpleadoEdit");
  const formData = new FormData(formulario);

  // Convertir FormData a un objeto JSON
  const formDataJSON = {};
  formData.forEach((value, key) => {
    //console.log(key, value);
    formDataJSON[key] = value;
  });

  const { idCertificado, parroquia, lugar, fechaBautismo, pbro, nombreBautizado, dni, nacio, nacionalidad, fechaNacimiento, nombrePadre, nacionalidadPadre, nombreMadre, nacionalidadMadre, domicilioFamiliar, nombrePadrino, nombreMadrina, libro, folio } = formDataJSON;
  try {
    await updateEmpleadoCollection(idCertificado, { parroquia, lugar, fechaBautismo, pbro, nombreBautizado, dni, nacio, nacionalidad, fechaNacimiento, nombrePadre, nacionalidadPadre, nombreMadre, nacionalidadMadre, domicilioFamiliar, nombrePadrino, nombreMadrina, libro, folio });
    formulario.reset();
    setTimeout(() => {
      $("#editarEmpleadoModal").css("opacity", "");
      $("#editarEmpleadoModal").modal("hide");
    }, 300);

    window.mostrarAlerta({ tipoToast: "success", mensaje: "¡Certificado actualizado correctamente!" });
  } catch (error) {
    console.log(error);
  }
};

window.actualizarEmpleado1 = async function (event) {
  event.preventDefault();
  const formulario = document.querySelector("#formularioEmpleadoEdit1");
  const formData = new FormData(formulario);

  // Convertir FormData a un objeto JSON
  const formDataJSON = {};
  formData.forEach((value, key) => {
    //console.log(key, value);
    formDataJSON[key] = value;
  });

  const { idEmpleado, parroquia, nombreConfirmando, dni, edad, hijo, nombrePadre, nombreMadre, padrino, fechaConfirmacionPadrino, bautizado, libro, folio, diocesis, fechaConfirmacion, fechaBautismo } = formDataJSON;
  try {
    await updateEmpleadoCollection1(idEmpleado, { parroquia, nombreConfirmando, dni, edad, hijo, nombrePadre, nombreMadre, padrino, fechaConfirmacionPadrino, bautizado, libro, folio, diocesis, fechaConfirmacion, fechaBautismo });
    formulario.reset();
    setTimeout(() => {
      $("#editarEmpleadoModal1").css("opacity", "");
      $("#editarEmpleadoModal1").modal("hide");
    }, 300);

    window.mostrarAlerta({ tipoToast: "success", mensaje: "¡Certificado actualizado correctamente!" });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Función para borrar un empleado, una colleccion
 */
async function eliminarEmpleado(id) {
  try {
    await deleteEmpleadoCollection(id);
    document.querySelector(`#${id}`).remove();
    mostrarAlerta({ tipoToast: "success", mensaje: "Certificado eliminado correctamente" });
  } catch (error) {
    console.error("Error al borrar el empleado:", error);
    mostrarAlerta({ tipoToast: "error", mensaje: "Error al eliminar el certificado" });
  }
}

async function eliminarEmpleado1(id) {
  try {
    await deleteEmpleadoCollection1(id);
    document.querySelector(`#${id}`).remove();
    mostrarAlerta({ tipoToast: "success", mensaje: "Certificado eliminado correctamente" });
  } catch (error) {
    console.error("Error al borrar el certificado:", error);
    mostrarAlerta({ tipoToast: "error", mensaje: "Error al eliminar el certificado" });
  }
}


/**
 * Función para mostrar alertas
 */
iziToast.settings({
  timeout: 10000,
  resetOnHover: true,
  // icon: '', // icon class
  transitionIn: "flipInX",
  transitionOut: "flipOutX",
  position: "topRight", // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
  onOpening: function () {
    console.log("Alerta abierta!");
  },
  onClosing: function () {
    console.log("Alerta cerrada!");
  },
});
window.mostrarAlerta = function ({ tipoToast, mensaje }) {
  if (tipoToast == "success") {
    iziToast.success({
      timeout: 5000,
      icon: tipoToast == "success" ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill",
      title: tipoToast == "success" ? "¡Éxito!" : "¡Error!",
      message: mensaje,
    });
  } else if (tipoToast == "warning") {
    iziToast.success({
      timeout: 5000,
      icon: tipo == "success" ? "bi bi-check-circle-fill" : "bi bi-x-circle-fill",
      title: tipo == "success" ? "¡Éxito!" : "¡Error!",
      message: mensaje,
    });
  }
};
