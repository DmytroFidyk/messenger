class Message {
    constructor(socketId, sender, message, time) {
        this.id = 0;
        this.socketId;
        this.sender = sender;
        this.message = message;
        this.time = time;
    }

    getId() {
        return this.id;
    }

    getSocketId() {
        return this.socketId;
    }

    getSender() {
        return this.sender;
    }

    getMessage() {
        return this.message;
    }

    getTime() {
        return this.time;
    }
}