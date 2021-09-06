import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowLeft,
    faArrowUp,
    faArrowDown,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Direction } from '../constants/index';


const ManipulationPanel = ({ onChange }) => {
    const onUp = () => onChange(Direction.up);
    const onRight = () => onChange(Direction.right);
    const onLeft = () => onChange(Direction.left);
    const onDown = () => onChange(Direction.down);
    return (
        <div className="manipuration-panel">
            <button className='manipulation-btn btn btn-move btn-left' onClick={onLeft}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div>
                <button className='manipulation-btn btn btn-move btn-up' onClick={onUp}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
                <button className='manipulation-btn btn btn-move btn-down' onClick={onDown}>
                    <FontAwesomeIcon icon={faArrowDown} />
                </button>
            </div>
            <button className='manipulation-btn btn btn-move btn-right' onClick={onRight}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
};

export default ManipulationPanel;