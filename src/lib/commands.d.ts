export interface CustomFileSystem {
    directories: {
        [path: string]: string[];
    };
    currentPath: string;
}
export declare function executeCommand(command: string, fileSystem: CustomFileSystem): Promise<string>;
