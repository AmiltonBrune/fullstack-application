import { useState, useCallback } from 'react';
import { useDropzone, Accept } from 'react-dropzone';

import api from '../../services/api';
import {
  DropzoneContainer,
  HiddenInput,
  Label,
  PreviewContainer,
  PreviewImage,
  UploadIcon,
} from './styles';
import Button from '../Button';

interface FileInputProps {
  handleUploadReturn: (data: any) => void;
}

const FileInput = ({ handleUploadReturn }: FileInputProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDisable, setIsDisable] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setIsDisable(false);
    const file = acceptedFiles[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const accept: Accept = {
    'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
  });

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    setIsDisable(false);

    try {
      const response = await api.post('/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Upload feito com sucesso!');

      handleUploadReturn(response.data.data);
      setIsDisable(true);
    } catch (error) {
      alert('Erro no upload, por favor refaça');
      console.error('Upload failed:', error);
      setIsDisable(true);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <DropzoneContainer {...getRootProps()}>
        <HiddenInput {...getInputProps()} />
        <UploadIcon />
        <Label>Capa video</Label>
      </DropzoneContainer>
      {preview && (
        <PreviewContainer>
          <PreviewImage src={preview} alt='Preview' />
          <Button
            onClick={handleUpload}
            style={{ backgroundColor: '#29B6F6' }}
            disabled={isDisable}
          >
            Upload
          </Button>
        </PreviewContainer>
      )}
    </div>
  );
};

export default FileInput;
