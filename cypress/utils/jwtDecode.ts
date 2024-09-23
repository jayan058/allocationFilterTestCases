import { jwtDecode } from "jwt-decode";
import { MyTokenPayload } from "../interfaces/tokenPayload";

export function decodeRefreshToken(token: string): string {
  const tokenDecoded = jwtDecode<MyTokenPayload>(token);
  const fullName = `${tokenDecoded.data.firstName} ${tokenDecoded.data.lastName}`;
  return fullName;
}
