export default class Party {
    _handlers = [];
    
    join(handler) {
        this._handlers.push(handler);
    }
    
    high(...params) {
        this._handlers.forEach(handler => handler(...params));
    }
    
    quit(handler) {
        this._handlers = this._handlers.filter(sub => sub !== handler);
    }
}