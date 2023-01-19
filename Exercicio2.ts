class Norte_Shopping {
    Alimentação: boolean;
    Lojas:string;
    comida:string;
    horario:boolean;
    
    constructor(Alimentação:boolean, Lojas:string, comida:string, horario:boolean) {
        this.Alimentação=Alimentação;
        this.Lojas=Lojas;
        this.comida=comida;
        this.horario=horario;
    }

    PossuiAlimentação():void{
        console.log(`O Shopping possui lojas de alimentação? ${this.Alimentação}. Qual o nome da loja? ${this.Lojas}. Qual o produto mais vendido da loja? ${this.comida}. A Loja é aberta 24hr? ${this.horario}`);
    }

    Loja():void{
        console.log(`O Shopping possui lojas de alimentação? ${this.Alimentação}. Qual o nome da loja? ${this.Lojas}. Qual o produto mais vendido da loja? ${this.comida}. A Loja é aberta 24hr? ${this.horario}`);
    }

    Produto():void{
            console.log(`O Shopping possui lojas de alimentação?${this.Alimentação}. Qual o nome da loja? ${this.Lojas}. Qual o produto mais vendido da loja? ${this.comida}. A Loja é aberta 24hr? ${this.horario}`);
    }

    Aberta24hr():void{
        console.log(`O Shopping possui lojas de alimentação?${this.Alimentação}. Qual o nome da loja? ${this.Lojas}. Qual o produto mais vendido da loja? ${this.comida}. A Loja é aberta 24hr? ${this.horario}`);
    }
}

    let possuicomida = new Norte_Shopping (true, "McDonalds", "Batata", false)
    possuicomida.PossuiAlimentação();

    let nomeloja = new Norte_Shopping (true, "Burgerking", "Hamburguer", false)
    nomeloja.Loja();

    let nomeproduto = new Norte_Shopping (true, "Giraffas", "Arroz", false)
    nomeproduto.Produto();

    let abertura = new Norte_Shopping (true, "Bobs", "Milkshake", false)
    abertura.Aberta24hr();