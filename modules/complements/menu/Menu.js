
import MenuPc from './complements/MenuPc'
import MenuMobile from './complements/MenuMobile'

import WindowSize from '../../../utils/WindowSize'

export default function Menu() {

    const size = WindowSize();

    const width = size.width;

    function render() {
        if (width > 600){
            return(
                <MenuPc/>
            )
        } else {
            return(
                <MenuMobile/>
            )
        }
    }

    return render();
}