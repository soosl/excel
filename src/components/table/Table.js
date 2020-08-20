import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from './table.template';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            listeners: ['click', 'mousedown'],
        });
    }

    toHTML() {
        return createTable();
    }

    onClick() {
        console.log('click');
    }

    onMouseDown() {
        console.log('mousedown');
    }
}
