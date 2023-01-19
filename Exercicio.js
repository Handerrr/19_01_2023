var Carros = /** @class */ (function () {
    function Carros(modelosdecarro, vidroseletricos, freioabs, tracao) {
        this.modelosdecarro = modelosdecarro;
        this.vidroseletricos = vidroseletricos;
        this.freioabs = freioabs;
        this.tracao = tracao;
    }
    Carros.prototype.modelos = function () {
        console.log("Qual o nome do modelo do carro? ".concat(this.modelosdecarro, ". Este carro tem vidros el\u00E9tricos? ").concat(this.vidroseletricos, ". Ele possui freioabs? ").concat(this.freioabs, ". esse carro possui tra\u00E7\u00E3o? ").concat(this.tracao));
    };
    Carros.prototype.vidros = function () {
        console.log("Qual o nome do modelo do carro? ".concat(this.modelosdecarro, ". Este carro tem vidros el\u00E9tricos? ").concat(this.vidroseletricos, ". Ele possui freioabs? ").concat(this.freioabs, ". esse carro possui tra\u00E7\u00E3o? ").concat(this.tracao));
    };
    Carros.prototype.freios = function () {
        console.log("Qual o nome do modelo do carro? ".concat(this.modelosdecarro, ". Este carro tem vidros el\u00E9tricos? ").concat(this.vidroseletricos, ". Ele possui freioabs? ").concat(this.freioabs, ". esse carro possui tra\u00E7\u00E3o? ").concat(this.tracao));
    };
    Carros.prototype.tração = function () {
        console.log("Qual o nome do modelo do carro? ".concat(this.modelosdecarro, ". Este carro tem vidros el\u00E9tricos? ").concat(this.vidroseletricos, ". Ele possui freioabs? ").concat(this.freioabs, ". esse carro possui tra\u00E7\u00E3o? ").concat(this.tracao));
    };
    return Carros;
}());
var marcadecarros = new Carros("Volkswagen", true, true, false);
marcadecarros.modelos();
var possuividro = new Carros("GOL", false, true, false);
possuividro.vidros();
var possuifreios = new Carros("Volkswagen", true, true, false);
possuifreios.freios();
var possuitração = new Carros("Volkswagen", true, true, false);
possuitração.tração();
