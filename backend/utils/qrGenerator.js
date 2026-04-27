import QRCode from 'qrcode'

export const generateQR = async (data) => {
  try {
    const qrCode = await QRCode.toDataURL(JSON.stringify(data))
    return qrCode
  } catch (error) {
    throw new Error('Failed to generate QR code')
  }
}

export const generateQRAsImage = async (data, filePath) => {
  try {
    await QRCode.toFile(filePath, JSON.stringify(data))
    return filePath
  } catch (error) {
    throw new Error('Failed to generate QR code image')
  }
}
