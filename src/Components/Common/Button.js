import * as React from 'react';
import { Button } from 'reactstrap';

export default function BasicButtons({title, handleAction}) {
    return (
        <Button outline color="success" onClick={handleAction} style={{marginLeft:"25%"}}>{title}</Button>
    );
}
