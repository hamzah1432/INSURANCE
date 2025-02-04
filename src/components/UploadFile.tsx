import { Card, Typography, Button, LinearProgress } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import React, { useState } from 'react';

const UploadFile: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const selectedFile = event.target.files[0];
            if (selectedFile.type !== 'application/pdf') {
                setError('Only PDF files are allowed');
                setFile(null);
            } else {
                setError(null);
                setFile(selectedFile);
            }
        }
    };

    const handleUpload = async () => {
        if (file) {
            setUploading(true);
            try {
                // Simulate file upload
                await new Promise((resolve) => setTimeout(resolve, 2000));
                console.log('Uploading file:', file.name);
                setError(null);
            } catch (err) {
                setError('Failed to upload file');
            } finally {
                setUploading(false);
            }
        }
    };

    return (
        <Card variant="outlined" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "24px" }}>
            <UploadFileIcon style={{ fontSize: "48px", color: "#E0E0E0" }} />
            {file ? <Typography variant="subtitle1" color="#666666">{file.name}</Typography> :
                <>
                    <Typography variant="subtitle1" color="#666666">Empty documents</Typography>
                    <Button variant="contained" color="inherit" component="label">
                        Upload
                        <input type="file" hidden onChange={handleFileChange} />
                    </Button>
                </>
            }
            {file && (
                <Button variant="contained" color="primary" onClick={handleUpload} disabled={uploading}>
                    Upload {file.name}
                </Button>
            )}
            {uploading && <LinearProgress style={{ width: '100%' }} />}
            {error && <Typography variant="body2" color="error">{error}</Typography>}
        </Card>
    );
};

export default UploadFile;