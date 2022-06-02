import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
    @Get('test')
    test() {
        return 69;
    }
}
