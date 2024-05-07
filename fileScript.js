const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);

const sourceFolder = './uploads';

const destinationFolder = './dist/uploads';

const copyNewFiles = async () => {
    try {
        const files = await fs.promises.readdir(sourceFolder);

        for (const file of files) {
            const sourceFilePath = path.join(sourceFolder, file);
            const destinationFilePath = path.join(destinationFolder, file);

            if (!fs.existsSync(destinationFilePath)) {
                await copyFile(sourceFilePath, destinationFilePath);
                console.log(`Файл скопирован: ${file}`);
            }
        }
    } catch (error) {
        console.error('Ошибка при копировании файлов:', error);
    }
};

copyNewFiles();

fs.watch(sourceFolder, (eventType, filename) => {
    console.log(`Событие: ${eventType}, файл: ${filename}`);

    if (eventType === 'rename') {
        copyNewFiles();
    }
});
