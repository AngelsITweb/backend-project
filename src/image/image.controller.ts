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
            throw new Error('Файл не был загружен');
        }

        return await this.imageService.uploadImage(image);
    }
}
