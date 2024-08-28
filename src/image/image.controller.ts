import { Controller, Post, UploadedFile, UseInterceptors, Body, Res } from '@nestjs/common';
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
  async uploadImage(
    @UploadedFile() image: UploadedFile | undefined,
    @Body() body: any,
    @Res() res: Response
  ): Promise<any> {
    try {
      const result = await this.imageService.processRequest(image, body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: 'Ошибка при обработке запроса', error: error.message });
    }
  }
}
