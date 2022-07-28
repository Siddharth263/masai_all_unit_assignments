// hierarchy : workspace --> floors --> Meeting Rooms --> isBooked?

class Workspace{
    #floor;
    constructor(num){
        this.#floor = [];
        this.numOfFloors = num;
        for(let i = 0;i<this.numOfFloors;i++){
            this.#floor[i] = new Floor((i+1), num);
        }
        
    }
}

class Floor extends Workspace{
    #floorNum;
    #rooms;
    constructor(floorNo, maxFloors){
        this.#floorNum = floorNo;
        this.#rooms = [];
        for(let i = 0; i < maxFloors.length; i++){
            this.#rooms[i] = new Room((i+1),)
        }
    }
}

let w1 = new Workspace(5);
console.log(w1);