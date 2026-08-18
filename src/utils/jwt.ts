import { SignJWT } from 'jose';

export const encodeJwtToken = async (keyStr: string) => {
  const [accessKey, secretKey] = keyStr.split('@');

  if (!accessKey || !secretKey) return keyStr;

  const secret = new TextEncoder().encode(secretKey);

  return new SignJWT({})
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuer(accessKey)
    .setNotBefore(Math.floor(Date.now() / 1000) - 5)
    .setExpirationTime(Math.floor(Date.now() / 1000) + 1800)
    .sign(secret);
};
