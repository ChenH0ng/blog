import h from '../h';
import View from './View';
import Input from './Input';
import {emptyFunction,} from '../util';
import './SignIn.css';

const LabelStyle = {
    margin: '24px 0 8px',
};

export default({style, nSubmit = emptyFunction, ...rest,}) => h('form', {
    ...rest,
    onSubmit: e => {
        e.preventDefault();
        const elements = e.target.elements;
        onSubmit({
            username: elements.username.value,
            password: elements.password.value,
        });
    },
    className: 'sign-in',
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