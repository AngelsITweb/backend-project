import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
    constructor(private readonly imageService: ImageService) {}

    @Post('')
    @UseInterceptors(FileInterceptor('image'))
    async uploadImage(@UploadedFile() image: any): Promise<any> {
        if (!image) {
            // Возвращаем сообщение, что файл не был загружен, но это не обязательно
            return {
                message: 'Файл не был загружен, но это не обязательно.',
            };
        }

        // Если файл был загружен, обрабатываем его с помощью imageService
        return await this.imageService.uploadImage(image);
    }
}
