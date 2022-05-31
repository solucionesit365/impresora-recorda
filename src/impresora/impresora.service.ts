import { Injectable } from '@nestjs/common';
import { InfoImpresora } from './impresora.interface';
const escpos = require('escpos');
const exec = require('child_process').exec;
const os = require('os');
escpos.USB = require('escpos-usb');
escpos.Serial = require('escpos-serialport');

@Injectable()
export class ImpresoraService {
    private async getDispositivo(tipoImpresora: string, pid: string = '', vid: string = '' ) {
        if(os.platform() === 'linux') {
            try {
                if (tipoImpresora == 'USB') {
                    const device: number = new escpos.USB(vid.toUpperCase(), pid.toUpperCase());
                    return device;
                } else if (tipoImpresora == 'SERIE') {
                    const device = new escpos.Serial('/dev/ttyS0', {
                        baudRate: 115200,
                        stopBit: 2
                    });
                    return device;
                } else {
                    console.log("Parametros de impresora no configurados");
                    return null;
                }
            } catch(err) {
                console.log(err);
                return null;
            }  
        } else if(os.platform() === 'win32') { // Para windows
            try {
                if (tipoImpresora == 'USB') {
                    const device: number = new escpos.USB(vid.toUpperCase(), pid.toUpperCase());
                    return device;
                } else if (tipoImpresora == 'SERIE') {
                    // const device = new escpos.Serial('COM1', {
                    //     baudRate: 115200,
                    //     stopBit: 2
                    // });
                    // return device;
                    return null;
                } else {
                    console.log("Parametros de impresora no configurados");
                    return null;
                }
            } catch(err) {
                console.log(err.message);
                return null;
            }
        }
    }

    public async imprimirAlbaran(texto: string, infoImpresora: InfoImpresora) {
        let device = null;
        if (infoImpresora.pid && infoImpresora.vid) {
            device = await this.getDispositivo(infoImpresora.tipoImpresora, );
        } else {
            device = await this.getDispositivo(infoImpresora.tipoImpresora);
        }
        
        const printer = new escpos.Printer(device);

        try {
            device.open(() => {
                printer
                .setCharacterCodeTable(19)
                .encode('CP858')
                .font('a')
                .style('b')
                .size(0, 0)
                .text(texto)
                .cut('PAPER_FULL_CUT')
                .close()
            });
            return { error: false };
        } catch(err) {
            return { error: true, mensaje: err.message };
        }
    }
}
