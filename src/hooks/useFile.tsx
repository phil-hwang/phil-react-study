import { useState, useCallback, useEffect } from 'react';
import Validation from "../utils/validation";

type useFileProps = {
    minSize: number,
    maxSize: number,
    extension: string[],
    maxFileCount: number,
    minFileCount: number
};

function useFile() {
    const [files, setFiles] = useState<File[]>([]);
    const [totalSize, setTotalSize] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

    }, [files]);

    return {

        files
    }
}

export default useFile;