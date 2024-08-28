import { Controller, Post, UploadedFile, UseInterceptors, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { Response } from 'express';

interface UploadedFile {
  originalname: string;
  buffer: Buffer;
}

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() image: UploadedFile | undefined, @Res() res: Response): Promise<any> {
    try {
      const result = await this.imageService.uploadImage(image);
      if (result) {
        return res.status(200).json(result);
      } else {
        return res.status(200).json({ message: 'Файл не был загружен' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Ошибка при загрузке файла', error: error.message });
    }
  }
}
