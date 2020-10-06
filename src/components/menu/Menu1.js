import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class Menu1 extends React.Component{
    render(){
        return (
        
            <div>
                <div>
                <button type="button" class="btn btn-primary btn-lg" >Primary</button>
                <button type="button" class="btn btn-primary btn-lg">Secondary</button>
                <button type="button" class="btn btn-primary btn-lg">Success</button>
                </div>
                <div>
                 <img src="../image/plat1.png" alt="been" width="300px;height=400px"></img>
                {/* <img src="..image/plat1.png" class="rounded float-right" alt="vebe"></img>     */}
                </div>
            </div>
        );
    }
}

export default Menu1;