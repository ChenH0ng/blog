import {convertToRaw} from 'draft-js';

const getTagPairByString = str => {
    return {
        head: `<${str}>`,
        tail: `</${str}>`,
    };
};
const getTagPair = (type, options) => {
    switch (type) {
        case 'header-one':
            return getTagPairByString('h1');
        case 'header-two':
            return getTagPairByString('h2');
        case 'header-three':
            return getTagPairByString('h3');
        case 'header-four':
            return getTagPairByString('h4');
        case 'header-five':
            return getTagPairByString('h5');
        case 'header-six':
            return getTagPairByString('h6');
        case 'blockquote':
            return getTagPairByString('blockquote');
        case 'unordered-list-item':
            return getTagPairByString('li');
        case 'ordered-list-item':
            return getTagPairByString('li');
        case 'code-block':
        {
            const pre = getTagPairByString('pre');
            const code = getTagPairByString('code');
            return {
                head: pre.head + code.head,
                tail: code.tail + pre.tail,
            };
        }
        case 'BOLD':
            return getTagPairByString('b');
        case 'ITALIC':
            return getTagPairByString('i');
        case 'UNDERLINE':
            return getTagPairByString('u');
        case 'CODE':
            return getTagPairByString('code');
        case 'LINK':
            return {
                head: `<a href="${options.href}">`,
                tail: '</a>',
            };
        default:
            return getTagPairByString('div');
    }
};
const blockWrap = {
    'code-block': getTagPairByString('pre'),
    'unordered-list-item': getTagPairByString('ul'),
    'ordered-list-item': getTagPairByString('ol'),
};
class Store {
    static render(stores) {
        let resultText = '';
        let last = {};
        for (let i = 0; i < stores.length; i++) {
            const store = stores[i];
            if (store._block !== last._block) {
                let tag = blockWrap[last._block];
                if (tag) {
                    resultText += tag.tail;
                }
                tag = blockWrap[store._block];
                if (tag) {
                    resultText += tag.head;
                }
            }
            const tag = getTagPair(store._block);
            resultText += tag.head + store._render() + tag.tail;
            last = store;
        }
        let tag = blockWrap[last._block];
        if (tag) {
            resultText += tag.tail;
        }
        return resultText;
    }
    
    constructor(text) {
        this._text = text;
        this._store = new Array(text.length + 1);
        this._tail = [];
    }
    
    addBlock(tagPair) {
        this._block = tagPair;
    }
    
    addTagPair(start, end, tagPair) {
        !this._store[start] && (this._store[start] = []);
        this._store[start].push({tagPair, end,});
    }
    
    foreach(cb) {
        this._store.forEach((e, i) => {
            e.forEach(({end}) => {
                cb(i, end);
            });
        });
    }
    
    _render() {
        const {_store, _tail, _text,}=this;
        let resultText = '',
            last = 0;
        for (let i = 0; i < _store.length; i++) {
            let heads = '', tails = '';
            if (_store[i]) {
                heads = _store[i].map(({tagPair, end}) => {
                    !_tail[end] && (_tail[end] = []);
                    _tail[end].push(tagPair.tail);
                    return tagPair.head;
                }).join('');
            }
            if (_tail[i]) {
                tails = _tail[i].reverse().join('');
            }
            if (heads || tails) {
                resultText += _text.slice(last, i) + tails + heads;
                last = i;
            }
        }
        resultText += _text.slice(last);
        return resultText;
    }
}
const editorStateToHtml = (editorState) => {
    const {blocks, entityMap}=convertToRaw(editorState.getCurrentContent());
    const stores = blocks.map(({entityRanges, inlineStyleRanges, text, type,}) => {
        const store = new Store(text);
        entityRanges.forEach(({key, length, offset,}) => {
            const {type, data,}=entityMap[key];
            store.addTagPair(offset, offset + length, getTagPair(type, data));
        });
        inlineStyleRanges.forEach(({style, offset, length,}) => {
            const end = offset + length;
            const tagPair = getTagPair(style);
            store.foreach((s, e) => {
                if (offset < s && end > s && end < e) {
                    store.addTagPair(offset, s, tagPair);
                    offset = s;
                }
                else if (end > s && offset > s && offset < e) {
                    store.addTagPair(offset, e, tagPair);
                    offset = e;
                }
            });
            store.addTagPair(offset, end, tagPair);
        });
        store.addBlock(type);
        return store;
    });
    return Store.render(stores);
};
export {editorStateToHtml,};
