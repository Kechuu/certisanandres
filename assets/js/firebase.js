// Configuración de Firebase
// Importante las versiones para 'firebase-app.js' y para 'firebase-firestore.js' en ambos casos debes ser las mismas
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Firebase configuration (replace with your actual project details)
const firebaseConfig = {
  apiKey: "AIzaSyAGB1XOmYYFfMkayysJCWwRaHJHigZd-TQ",
  authDomain: "proyectocerti-34de9.firebaseapp.com",
  projectId: "proyectocerti-34de9",
  storageBucket: "proyectocerti-34de9.appspot.com",
  messagingSenderId: "278290537605",
  appId: "1:278290537605:web:f0820e5358f37827929dec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Inicializa Cloud Firestore y obtén una referencia al servicio.
export const db = getFirestore(app);
const auth = getAuth(app);
export {auth};

/**
 * ***************************************************************************
 * 
 * CERTIFICADO DE BAUTISMO
 * 
 * ***************************************************************************
 */
const coleccion = "tbl_bautismo";
const coleccion1 = "tbl_confirmacion";

// Esta función agrega un nuevo empleado a una colección en Firestore, con los detalles proporcionados como nombre, cédula, edad, sexo, teléfono y cargo.
export const addEmpleado = (parroquia, lugar, fechaBautismo, pbro, nombreBautizado, dni, nacio, nacionalidad, fechaNacimiento, nombrePadre, nacionalidadPadre, nombreMadre, nacionalidadMadre, domicilioFamiliar, nombrePadrino, nombreMadrina, libro, folio) =>
  addDoc(collection(db, coleccion), { parroquia, lugar, fechaBautismo, pbro, nombreBautizado, dni, nacio, nacionalidad, fechaNacimiento, nombrePadre, nacionalidadPadre, nombreMadre, nacionalidadMadre, domicilioFamiliar, nombrePadrino, nombreMadrina, libro, folio});

// Esta función obtiene todos los documentos de una colección de empleados en Firestore y devuelve una promesa que se resuelve con los datos de esos documentos.
export const getEmpleadosCollection = () => getDocs(collection(db, coleccion));

// Esta función obtiene un documento específico de una colección de empleados en Firestore utilizando su ID como referencia y devuelve una promesa que se resuelve con los datos del documento.
export const getEmpleadoCollection = (id) => {
  const docRef = doc(db, coleccion, id);
  return getDoc(docRef);
};

// Esta función actualiza un documento específico en una colección de empleados en Firestore con los nuevos campos proporcionados, utilizando el ID del documento como referencia.
export const updateEmpleadoCollection = (id, newFields) =>
  updateDoc(doc(db, coleccion, id), newFields);

// Esta función elimina un documento específico de una colección de empleados en Firestore utilizando su ID como referencia.
export const deleteEmpleadoCollection = (id) => deleteDoc(doc(db, coleccion, id));

/**
 * ***************************************************************************
 * 
 * CERTIFICADO DE CONFIRMACION
 * 
 * ***************************************************************************
 */

// Esta función agrega un nuevo empleado a una colección en Firestore, con los detalles proporcionados como nombre, cédula, edad, sexo, teléfono y cargo.
export const addEmpleado1 = ( parroquia, nombreConfirmando, dni, edad, hijo, nombrePadre, nombreMadre, padrino, fechaConfirmacionPadrino, bautizado, libro, folio, diocesis, fechaConfirmacion, fechaBautismo ) =>
  addDoc(collection(db, coleccion1), { parroquia, nombreConfirmando, dni, edad, hijo, nombrePadre, nombreMadre, padrino, fechaConfirmacionPadrino, bautizado, libro, folio, diocesis, fechaConfirmacion, fechaBautismo });

// Esta función obtiene todos los documentos de una colección de empleados en Firestore y devuelve una promesa que se resuelve con los datos de esos documentos.
export const getEmpleadosCollection1 = () => getDocs(collection(db, coleccion1));

// Esta función obtiene un documento específico de una colección de empleados en Firestore utilizando su ID como referencia y devuelve una promesa que se resuelve con los datos del documento.
export const getEmpleadoCollection1 = (id) => {
  const docRef = doc(db, coleccion1, id);
  return getDoc(docRef);
};

// Esta función actualiza un documento específico en una colección de empleados en Firestore con los nuevos campos proporcionados, utilizando el ID del documento como referencia.
export const updateEmpleadoCollection1 = (id, newFields) =>
  updateDoc(doc(db, coleccion1, id), newFields);

// Esta función elimina un documento específico de una colección de empleados en Firestore utilizando su ID como referencia.
export const deleteEmpleadoCollection1 = (id) => deleteDoc(doc(db, coleccion1, id));
