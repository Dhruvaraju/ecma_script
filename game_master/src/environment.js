import * as enc from "./encounter";

export class Environment{
    constructor(name){
        this.name = name;
        this.encounter = enc.generate();
    }
    
    stumbleUpon(){
        this.encounter = enc.generate();
        var interaction = this.name + "you just stumbled upon ..." + this.encounter.whenEncounter();
        return interaction;
    }
}