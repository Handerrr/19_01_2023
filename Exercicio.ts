class Carros {
    modelosdecarro: string;
    vidroseletricos:boolean;
    freioabs: boolean;
    tracao: boolean;

    constructor(modelosdecarro:string, vidroseletricos:boolean, freioabs:boolean, tracao:boolean) {
        this.modelosdecarro=modelosdecarro;
        this.vidroseletricos=vidroseletricos;
        this.freioabs=freioabs;
        this.tracao=tracao;

    }
    modelos():void{

        console.log(`Qual o nome do modelo do carro? ${this.modelosdecarro}. Este carro tem vidros elétricos? ${this.vidroseletricos}. Ele possui freioabs? ${this.freioabs}. esse carro possui tração? ${this.tracao}`);
    }

    vidros():void{

     console.log(`Qual o nome do modelo do carro? ${this.modelosdecarro}. Este carro tem vidros elétricos? ${this.vidroseletricos}. Ele possui freioabs? ${this.freioabs}. esse carro possui tração? ${this.tracao}`);

    }
    freios():void{
        console.log(`Qual o nome do modelo do carro? ${this.modelosdecarro}. Este carro tem vidros elétricos? ${this.vidroseletricos}. Ele possui freioabs? ${this.freioabs}. esse carro possui tração? ${this.tracao}`);
    }

    tração():void {
        console.log(`Qual o nome do modelo do carro? ${this.modelosdecarro}. Este carro tem vidros elétricos? ${this.vidroseletricos}. Ele possui freioabs? ${this.freioabs}. esse carro possui tração? ${this.tracao}`);
    }

}
    let marcadecarros = new Carros ("Volkswagen", true, true, false);
    marcadecarros.modelos();

    let possuividro = new Carros ("GOL", false, true, false);
    possuividro.vidros();

    let possuifreios = new Carros ("Volkswagen", true, true, false);
    possuifreios.freios();

    let possuitração = new Carros ("Volkswagen", true, true, false);
    possuitração.tração();
    