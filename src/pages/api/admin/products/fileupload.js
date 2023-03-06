import multer from 'multer';
import nc from 'next-connect';
import path from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB
  },
});

const handler = nc().use(upload.any()).post((req, res) => {
  const filePath = path.join('/uploads', req.file.filename);
  res.status(200).json({ path: filePath });
});

export default handler;
