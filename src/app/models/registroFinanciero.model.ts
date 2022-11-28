import { RegistroProducto } from "./registroProducto.model";

export class RegistroFinanciero{
    /*
    fecha = models.DateField(auto_now=True)
    tipo = models.ForeignKey(TipoRegistro,on_delete=models.DO_NOTHING)
    minimarket = models.ForeignKey(Usuario,on_delete=models.CASCADE)
     */
    id:number;
    minimarket:number;
    tipo:string;
    fecha:string;
    lista:RegistroProducto[];
    montoTotal:number;

    constructor(tipo:string,fecha:string = "",lista:RegistroProducto[] = [],montoTotal:number = 0,minimarket:number = 0, id:number = 0){
        this.tipo = tipo;
        this.fecha = fecha;
        this.lista = lista;
        this.montoTotal = montoTotal;
        this.minimarket = minimarket;
        this.id = id;
    }
}