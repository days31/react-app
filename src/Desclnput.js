import './Desclnput.css';
import {Component} from 'react';
import { render } from '@testing-library/react';

Class DescInput extends Component {
    render() {
        return (
            <from className='desc-input'>
                <input type='text' />
                <button type='submit'추가</button>
            </from>
        );
    }
}

export default DescInput;