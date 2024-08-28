import { Injectable } from '@nestjs/common';
import * as path from "path";
import * as fs from "fs";

interface UploadedFile {
  originalname: string;
  buffer: Buffer;
}

@Injectable()
export class ImageService {
  async processRequest(file?: UploadedFile, body?: any): Promise<any> {
    let imageUrl = null;
    if (file) {
      imageUrl = await this.uploadImage(file);
    }

    // Здесь обрабатываем остальные данные из body
    // Например, можно добавить дополнительную информацию или выполнить другие действия

    return {
      imageUrl,
      // Добавьте здесь другие поля, которые вы хотите вернуть
      message: file ? 'Запрос обработан с изображением' : 'Запрос обработан без изображения',
      // Например, если в body есть какие-то данные:
      // additionalData: body.someField
    };
  }

  private async uploadImage(file: UploadedFile): Promise<string> {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    const filename = `${timestamp}-${random}-${file.originalname}`;
    const destination = path.join(process.cwd(), 'uploads', filename);
    await fs.promises.writeFile(destination, file.buffer);
    return `/uploads/${filename}`;
  }
}
