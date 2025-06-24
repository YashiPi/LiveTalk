import { Chat, Store, UserId } from "./store/Store"
let globalChatId = 0;

// 1000, 2000
export interface Room {
    roomId: string;
    chats: Chat[]
}

export class InMemoryStore implements Store {
    private store: Map<string, Room>;

    constructor() {
        this.store = new Map<string, Room>()
    }

    initRoom(roomId: string) {
        this.store.set(roomId, {
            roomId,
            chats: []
        });
    }

    // last 50 chats => limit = 50, offset - 0
    // limit = 50, offset - 50
    getChats(roomId: string, limit: number, offset:number) {
        // there could be 1000 chats at once, you don't want to 
        // immediately bombard the user with a thousand messages
        // You want to incrementally display - hence limit and offset
        const room = this.store.get(roomId);
        if(!room){
            return []
        }
        return room.chats.reverse().slice(0, offset).slice(-1 * limit);
    }
    
    // ctrl + space for auto import
    addChat(userId: UserId, name: string, roomId: string, message: string){
        const room = this.store.get(roomId);
        if(!room){
            return []
        }
        room.chats.push({
            id: (globalChatId++).toString(),
            userId,
            name,
            message,
            upvotes: []
        })
    }
    
    // Todo: Make this faster
    upvote(userId: UserId, roomId: string, chatId: string){
        const room = this.store.get(roomId);
        if(!room){
            return []
        }

        // Todo: Make this faster
        const chat = room.chats.find(({id}) => id === chatId);

        if(chat) {
            chat.upvotes.push(userId);
        }
    }
}