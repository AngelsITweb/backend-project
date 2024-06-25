import { Controller, Post, UploadedFile, UseInterceptors, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { Response } from 'express';

@Controller('image')
export class ImageController {
    constructor(private readonly imageService: ImageService) {}

    @Post('')
    @UseInterceptors(FileInterceptor('image'))
    async uploadImage(@UploadedFile() image: any, @Res() res: Response): Promise<any> {
        if (!image) {
            return res.status(400).json({ message: 'Файл не был загружен' });
        }

        try {
            const result = await this.imageService.uploadImage(image);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: 'Ошибка при загрузке файла', error: error.message });
        }
    }
}
