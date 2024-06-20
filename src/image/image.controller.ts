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
            // Передаем null в сервис, если файл не был загружен
            return await this.imageService.uploadImage(null);
        }

        // Если файл был загружен, передаем его в сервис
        return await this.imageService.uploadImage(image);
    }
}
