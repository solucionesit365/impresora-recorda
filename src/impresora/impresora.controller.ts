import { Body, Controller, Post } from '@nestjs/common';
import { ImpresoraService } from './impresora.service';

function checkVariable(...args: any[]) {
    // let args = arguments;
    for(let i = 0; i < args.length; i++) {
        if (args[i] == undefined || args[i] == null ) {
            return false;
        }
    }
    return true;
}

@Controller('impresora')
export class ImpresoraController {
    constructor(private impresora: ImpresoraService) {}

    @Post('albaran')
    imprimirAlbaran(@Body() params) {
        if (checkVariable(params.texto, params.pid, params.vid)) {
            return this.impresora.imprimirAlbaran(params.texto, params.infoImpresora);
        } else {
            return { error: true, mensaje: 'Impresora: faltan parámetros de entrada (params.texto)' }
        }
    }
}
