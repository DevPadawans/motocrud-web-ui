import { IAddress } from './../valueObjects/IAddreess';
export interface IMember {
  _id: string;
  nome: string;
  apelido: string;
  padrinho: string;
  data_apresentacao: Date;
  data_nascimento: Date;
  cpf: string;
  rg: string;
  veiculo: string;
  cnh:string;
  cnh_categoria:string;
  tipo_sanguineo:string;
  telefone:string;
  telefone_emergencia:string;
  data_admissao:Date;
  url_foto: string;
  endereco: IAddress;
}
