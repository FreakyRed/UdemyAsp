/* tslint:disable */
/* eslint-disable */
import { PhotoDto } from './photo-dto';
export interface MemberDto {
  age?: number;
  city?: null | string;
  country?: null | string;
  created?: string;
  gender?: null | string;
  id?: number;
  introduction?: null | string;
  knownAs?: null | string;
  lastActive?: string;
  lookingFor?: null | string;
  photoUrl?: null | string;
  photos?: null | Array<PhotoDto>;
  userName?: null | string;
}
