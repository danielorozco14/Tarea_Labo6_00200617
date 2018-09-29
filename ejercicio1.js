
var stock=[];
function sistema(){
    var op=prompt("                                     ********* La Jefecita *********\n1. Agregar Producto 2. Modificar Stock 3. Registrar venta y reducir stock 4.Mostrar promedio de ventas 5. Mostrar Productos en stock 0 6. Salir del sistema")

    var ventas=[];

    switch (op) {
        case "1":
            var producto={
                codigo:
                    prompt("Ingrese codigo de producto: "),
                descripcion:
                    prompt("Ingrese una descripcion del producto: "),
                tipo:
                    prompt("Ingrese tipo de producto: "),
                precioCompra:
                    prompt("Ingrese precio de compra del producto: "),
                precioVenta:
                    prompt("Ingrese precio de venta al publico: "),
                cantStock:
                    prompt("Ingrese cantidad de producto a ingresar a stock: ")
            }
            stock.push(producto);
            break;
        case "2":
            var opt=prompt("1. Eliminar producto 2.Modificar Producto ");
            switch (opt) {
                case "1":
                let e=prompt("Ingrese codigo de producto a eliminar ")
                for(let i=0;i<stock.length;i++){
                    if(stock[i].codigo==e){
                        stock.splice(i,1);
                    }
                }
                    break;
                default:
                console.log("no borre nada");            }

            break;
        case "3":

            break;
        case "4":

            break;
        case "5":

            break;
        case "6":

            break;
        default:
            console.log("No retorno el valor");
    }
}
