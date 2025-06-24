// Its going to be a singleton

export type UserId = string;

export interface Chat {
    id: string;
    userId: UserId;
    name: string;
    message: string;
    upvotes: UserId[]; 
    // who upvoted what, there will be downvotes also
}

// in memory store - later on may replace with postgres
export abstract class Store {
    constructor() {

    }

    initRoom(roomId: string) {

    }

    getChats(room: string, limit: number, offset:number) {

    }

    addChat(userId: UserId, name: string, room: string, message: string){

    }
    upvote(userId: UserId, room: string, chatId: string){

    }
}