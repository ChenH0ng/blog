import h from '../h';
import View from './View';
import Input from './Input';
import {emptyFunction,} from '../util';

const LabelStyle = {
    margin: '24px 0 8px',
};

export default({style, onSubmit = emptyFunction, ...rest,}) => h('form', {
    ...rest,
    onSubmit: e => {
        e.preventDefault();
        const elements = e.target.elements;
        onSubmit({
            username: elements.username.value,
            password: elements.password.value,
        });
    },
    style: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 5,
        fontSize: 14,
        display: 'flex',
        ...style,
    },
    children: [
        h(View, {children: 'Username', style: LabelStyle,}),
        h(Input, {name: 'username',}),
        h(View, {children: 'Password', style: LabelStyle,}),
        h(Input, {name: 'password', type: 'password',}),
        h('input', {
            value: 'Sign in',
            type: 'submit',
            style: {
                backgroundImage: 'linear-gradient(#91dd70, #55ae2e)',
                border: '.8px solid #5aad35',
                backgroundColor: '#6cc644',
                color: '#fff',
                height: 33,
                cursor: 'pointer',
                fontWeight: 600,
                marginTop: 16,
            },
        }),
    ],
});