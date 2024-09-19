    <div class="modal fade" id="editarEmpleadoModal1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 titulo_modal">Editar datos del Certificado</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formularioEmpleadoEdit" action="" method="POST" autocomplete="off">
                        <input type="hidden" name="idEmpleado1" id="idEmpleado1" />
                        <div class="mb-3">
                            <label class="form-label">Nombre</label>
                            <input type="text" name="nombre1" id="nombre1" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Cédula (NIT)</label>
                            <input type="text" name="cedula1" id="cedula1" class="form-control" required />
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="form-label">Seleccione la edad</label>
                                <select class="form-select" name="edad1" id="edad1" required>
                                    <option value="">Edad</option>
                                    <?php
                                    for ($i = 18; $i <= 50; $i++) {
                                        echo "<option value='$i'>$i</option>";
                                    } ?>
                                </select>
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Sexo</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="sexo1" id="sexo_m1" value="Masculino" checked>
                                    <label class="form-check-label" for="sexo_m1">
                                        Masculino
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="sexo1" id="sexo_f1" value="Femenino">
                                    <label class="form-check-label" for="sexo_f1">
                                        Femenino
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Teléfono</label>
                            <input type="number" name="telefono1" id="telefono1" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Seleccione el Cargo</label>
                            <select name="cargo1" id="cargo1" class="form-select" required>
                                <option selected value="">Cargo</option>
                                <?php
                                $cargos = array(
                                    "Gerente",
                                    "Asistente",
                                    "Analista",
                                    "Frontend",
                                    "Backend",
                                    "Desarrollador Web"
                                );
                                foreach ($cargos as $cargo) {
                                    echo "<option value='$cargo'>$cargo</option>";
                                }
                                ?>
                            </select>
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary btn_add" onclick="window.actualizarEmpleado1(event)">
                                Actualizar datos del Certificado
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>