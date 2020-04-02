export class Encounter{
    constructor(introText=""){
        this.introText = introText;
    }
    whenEncounter(){
        return this.introText;
    }
}


export class Bear extends Encounter{
    constructor(){
        super("grr... growling you have encountered a bear.");
    }
}

export class Angel extends Encounter{
    constructor(){
        super("Wow!, you encountered an angel it is provide you strength and healing 80%");
    }
}

export class Ghost extends Encounter{
    constructor(){
        super("Boo!.. you encountered a ghost");
    }
}

export function generate(){
    let number01  = Math.random();
    console.log("Random Number is"+ number01);
    var number = Math.floor((number01 * 3) + 1 );

    if (number == 1) {
        console.log("Bear is returned");
        return new Bear();
    } else if(number == 2){
        console.log("Ghost is returned");
        return new Ghost();
    }else if(number == 3){
        console.log("Angel is returned");
        return new Angel();
    }else{
        console.log("Nothing is returned");
        return new Encounter("Nothing Continue");
    }
}