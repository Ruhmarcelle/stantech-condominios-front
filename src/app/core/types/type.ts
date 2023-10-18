export interface Promocao {
    id: number
    destino: string
    imagem: string
    preco: number
}

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

export interface Depoimento {
    id: number;
    texto: string;
    autor: string;
    avatar: string;
}
