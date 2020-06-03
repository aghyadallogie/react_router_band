import React from 'react';

const Member = (props) => {
    let { data } = props;

    return (
        <div className="member">
            <img src={data.img} alt="member" width="600px"></img>
            <span>{data.role}</span>
        </div>
    )
}

export default Member;



// export default class Member extends Component {
//     render() {
//         return (
//             <div className="member">
//             <img src={data.img} alt="member" width="600px"></img>
//             <span>{data.role}</span>
//         </div>
//         )
//     }
// }
