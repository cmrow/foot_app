<template>
       <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false"  id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-body">
            <!--Inicio tabla-->
            <div class="row" id="tabla">
              <div class="container pe-3 ps-3">
                <div class="table-responsive">
                  <table class="table table-bordered mt-4 table-strip text-center">
                    <thead class="table">
                      <tr>
                        <th class="col-3 table99">Producto</th>
                        <th class="col-3 table99">Cantidad</th>
                        <th class="col-3 table99">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="body" >
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th id="bordeTable"></th>
                        <th class="bordeB">Total a pagar</th>
                        <th class="bordeB"></th>
                      </tr>
                    </tfoot>
                  </table>

                </div>
              </div>
            </div>
            <!--Fin tabla-->
          </div>
          <div class="modal-footer">
            <button id="closeCar"  type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cerrar
            </button>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal99" type="button"
              class="btn btn-primary modalsb">Pagar</button>
          </div>
        </div>
      </div>
    </div>
</template>