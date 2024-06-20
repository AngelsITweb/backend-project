import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
    constructor(private readonly imageService: ImageService) {}

    @Post('')
    @UseInterceptors(FileInterceptor('image'))
    async uploadImage(@UploadedFile() image: any): Promise<any> {
        // Передаем файл или null в сервис
        const imageUrl = await this.imageService.uploadImage(image);

        // Пример создания записи в базе данных
        // return await this.prisma.request.create({
        //     data: {
        //         name: "Пол",
        //         image: imageUrl,
        //         car: {
        //             connect: {
        //                 id: 1
        //             }
        //         },
        //         user: {
        //             connect: {
        //                 id: 1
        //             }
        //         },
        //         respondedSellerIds: [0]
        //     }
        // });

        return { imageUrl };
    }
}
