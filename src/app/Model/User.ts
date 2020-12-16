import { Role } from './Role';
import {Reclamation} from './Reclamation';
import {Commentaire} from './Commentaire';

export class User {

  id: any;
  username: any;
  email: any;
  nombreanee: any;
  secteur: any;
  adress: any;
  login;
  role?: Role[];
  reclamation: Reclamation;
  commentaire: Commentaire;
}
