import color from 'color';

const styles = {
    base: {
        padding: '8px 16px',
        borderWidth: .8,
        borderStyle: 'solid',
        borderColor: '#ccc',
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 5,
        cursor: 'pointer',
        transition: 'all .2s ease-in-out',
    },
    primary: {
        backgroundColor: '#0275d8',
        borderColor: '#0275d8',
        color: '#fff',
    },
    success: {
        backgroundColor: '#449d44',
        borderColor: '#419641',
        color: '#fff',
    },
    info: {
        backgroundColor: '##31b0d5',
        borderColor: '#2aabd2',
        color: '#fff',
    },
    warning: {
        backgroundColor: '#ec971f',
        borderColor: '#eb9316',
        color: '#fff',
    },
    danger: {
        backgroundColor: '#c9302c',
        borderColor: '#c12e2a',
        color: '#fff',
    },
};
export default kind => {
    const style = styles[kind] || styles.base;
    return {
        ...styles.base,
        ...style,
        ':hover': {
            backgroundColor: color(style.backgroundColor).darken(.15),
        },
    };
};