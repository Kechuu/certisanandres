    <div class="modal fade" id="agregarEmpleadoModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 titulo_modal">Registrar Certificado Bautismo</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <form id="formularioEmpleado" action="" method="POST" autocomplete="off">
                        <div class ="row">
                        <div class="col-md-5">
                            <label class="form-label">Parroquia</label>
                            <input type="text" name="parroquia" class="form-control" required />
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Lugar</label>
                            <input type="text" name="lugar" class="form-control" required />
                        </div>
                        <div class="col-md-3">
                                <label class="form-label">Fecha de Bau.</label>
                                <input type="text" name="fechaBautismo" class="form-control" require>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            
                            <div class="col-md-2">
                                <label class="form-label">Celebrante</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="pbro" id="pbro" value="Pbro" checked>
                                    <label class="form-check-label" for="pbro">
                                        Presbitero
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="pbro" id="diac" value="Diac">
                                    <label class="form-check-label" for="diac">
                                        Diacono
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                            <label class="form-label">Nombre y Apellido del Bautizado</label>
                            <input type="text" name="nombreBautizado" class="form-control" required />
                            </div>
                            <div class="col-md-2">
                            <label class="form-label">DNI</label>
                            <input type="number" name="dni" class="form-control" required />
                            </div>
                            <div class="col-md-4">
                            <label class="form-label">Nació en:</label>
                            <input type="text" name="nacio" class="form-control" required />
                            </div>
                            
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-3">
                                <label class="form-label">Fecha Nac.</label>
                                <input type="text" name="fechaNacimiento" class="form-control" required />
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Nacionalidad</label>
                                <input type="text" name="nacionalidad" class="form-control" required />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Nombre del Padre</label>
                                <input type="text" name="nombrePadre" class="form-control" required />
                            </div>
                            <div class="col-md-2">
                                <label class="form-label">Nacionalidad</label>
                                <input type="text" name="nacionalidadPadre" class="form-control" required />
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                        <div class="col-md-4">
                                <label class="form-label">Nombre de la Madre</label>
                                <input type="text" name="nombreMadre" class="form-control" required />
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Nacionalidad</label>
                                <input type="text" name="nacionalidadMadre" class="form-control" required />
                            </div>
                            <div class="col-md-5">
                                <label class="form-label">Domicilio Familiar</label>
                                <input type="text" name="domicilioFamiliar" class="form-control" required />
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-4">
                                <label class="form-label">Nombre del Padrino</label>
                                <input type="text" name="nombrePadrino" class="form-control" required />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Nombre de la Madrina</label>
                                <input type="text" name="nombreMadrina" class="form-control" required />
                            </div>
                            <div class="col-md-2">
                                <label class="form-label">Libro</label>
                                <input type="text" name="libro" class="form-control" required />
                            </div>
                            <div class="col-md-2">
                                <label class="form-label">Folio</label>
                                <input type="text" name="folio" class="form-control" required />
                            </div>
                        </div>
                        <hr>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary btn_add" onclick="window.addNuevoEmpleado(event)">
                                Registrar Certificado Bautismo
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>