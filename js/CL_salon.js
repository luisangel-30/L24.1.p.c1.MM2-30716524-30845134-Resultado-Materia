export default class CL_estudiante {
    constructor(){
        this.contestud = 0;
        this.contaprob = 0;
        this.mayor = 0;
        this.cedulamayor = 0;
    }
    procesarestudiante(est){
        this.contestud++;
        if(est.notafinal>=48)
            this.contaprob++;
        if(est.notafinal>this.mayor){
            this.mayor = est.notafinal;
        this.cedulamayor = est.cedula;}
    }
    procentajeaprobados(){
        return (this.contaprob/this.contestud)*100;
    }
    cedulamejorestudiante(){
        return this.cedulamayor;
    }
}