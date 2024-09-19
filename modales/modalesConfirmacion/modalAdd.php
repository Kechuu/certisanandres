    <div class="modal fade" id="agregarEmpleadoModal1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 titulo_modal">Registrar Certificado Confirmacion</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div class="modal-body">
                    <form id="formularioEmpleado1" action="" method="POST" autocomplete="off">
                        <div class ="row">
                        <div class="col-md-5">
                            <label class="form-label">Parroquia</label>
                            <input type="text" name="parroquia" class="form-control" required />
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Nombre y Apellido</label>
                            <input type="text" name="nombreConfirmando" class="form-control" required />
                        </div>
                        <div class="col-md-3">
                                <label class="form-label">DNI</label>
                                <input type="text" name="dni" class="form-control" require>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            
                            <div class="col-md-2">
                            <label class="form-label">Edad</label>
                            <input type="number" name="edad" class="form-control" required />
                            </div>
                            <div class="col-md-2">
                                <label class="form-label">Hijo</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="hijo" id="natural" value="Natural" checked>
                                    <label class="form-check-label" for="hijo">
                                        Natural
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="hijo" id="legitimo" value="Legitimo">
                                    <label class="form-check-label" for="hijo">
                                        Legitimo
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                            <label class="form-label">Nombre del Padre</label>
                            <input type="text" name="nombrePadre" class="form-control" required />
                            </div>
                            
                            <div class="col-md-4">
                            <label class="form-label">Nombre de la Madre</label>
                            <input type="text" name="nombreMadre" class="form-control" required />
                            </div>
                            
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-4">
                                <label class="form-label">Padrino - Madrina</label>
                                <input type="text" name="padrino" class="form-control" required />
                            </div>
                            <div class="col-md-2">
                                <label class="form-label">Fecha Confir.</label>
                                <input type="text" name="fechaConfirmacionPadrino" class="form-control" required />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Bautizad@ en (Niñ@) : </label>
                                <input type="text" name="bautizado" class="form-control" required />
                            </div>
                            <div class="col-md-2">
                                <label class="form-label">Fecha Baut.</label>
                                <input type="text" name="fechaBautismo" class="form-control" required />
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                        <div class="col-md-2">
                                <label class="form-label">Libro</label>
                                <input type="text" name="libro" class="form-control" required />
                            </div>
                            <div class="col-md-2">
                                <label class="form-label">Folio</label>
                                <input type="text" name="folio" class="form-control" required />
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Diócesis</label>
                                <input type="text" name="diocesis" class="form-control" required />
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Fecha Confirmacion</label>
                                <input type="text" name="fechaConfirmacion" class="form-control" required />
                            </div>
                        </div>
                        <hr>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary btn_add" onclick="window.addNuevoEmpleado1(event)">
                                Registrar Certificado Bautismo
                            </button>
                        </div>
                    </form>
                
            </div>
        </div>
    </div>