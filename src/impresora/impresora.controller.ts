import { Body, Controller, Post } from '@nestjs/common';
import { ImpresoraService } from './impresora.service';

@Controller('impresora')
export class ImpresoraController {
    constructor(private impresora: ImpresoraService) {}

    @Post('albaran')
    imprimirAlbaran(@Body() params) {
        if (params.texto != null && params.texto != undefined) {
            return this.impresora.imprimirAlbaran(params.texto, params.infoImpresora);
        } else {
            return { error: true, mensaje: 'Impresora: faltan parámetros de entrada (params.texto)' }
        }
    }
}
