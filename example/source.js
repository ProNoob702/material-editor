export default {
  '@global': {
    'body, html': {
      fontFamily: '\'Roboto\', sans-serif',
      margin: '0',
      width: '100%',
      height: '100%'
    },
    '.container': {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '.material-textfield': {
      position: 'relative'
    },
    label: {
      position: 'absolute',
      fontSize: '1rem',
      left: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'white',
      color: 'gray',
      padding: '0 0.3rem',
      margin: '0 0.5rem',
      transition: '0.1s ease-out',
      transformOrigin: 'left top',
      pointerEvents: 'none'
    },
    input: {
      fontSize: '1rem',
      outline: 'none',
      border: '1px solid gray',
      borderRadius: 5,
      padding: '1rem 0.7rem',
      color: 'gray',
      transition: '0.1s ease-out'
    },
    'input:focus': {
      borderColor: '#6200ee'
    },
    'input:focus + label': {
      color: '#6200ee',
      top: '0',
      transform: 'translateY(-50%) scale(0.9)'
    },
    'input:not(:placeholder-shown) + label': {
      top: '0',
      transform: 'translateY(-50%) scale(0.9)'
    }
  }
};
