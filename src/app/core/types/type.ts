import { Timestamp } from "rxjs";

export interface PessoaUsuaria {
    nome: string;
    nascimento: string;
    cpf: string;
    contato: string;
    email: string;
    senha: string;
    cidade: string;
    unidade: Unidade;
    estado: UnidadeFederativa;
    login: Login;
}
  
export interface Login{
    senha: string;
}

export interface Unidade{
    apartamento: string;
    bloco: string;
}

export interface UnidadeFederativa {
    id: number;
    nome: string;
    sigla: string;
}

export interface AreaComum {
    id: number;
    nome: string;
}

export interface Setor {
    id: number;
    nome: string;
}

export interface Solicitacao {
    email: string,
    setor: Setor,
    area_comum: AreaComum,
    assunto: string,
    descricao: string,
    data_solicitacao: string
}

export interface Sessao {
    email: string,
    token?: string,
    logado?: boolean
}

export interface historicoSolicitacao {
    solicitacao: string;
    data: string;
    setor: string;
    areaComum: string;
    statusSolicitacao: string;
    
}

export interface SolicitacaoConulta {
    idSolicitacao: string;
    assunto: string;
    setor: Setor;
    areaComum: AreaComum;
    descricao: string;
    dataSolicitacao: string;
    statusSolicitacao: string;

}