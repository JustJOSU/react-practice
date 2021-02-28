import React, { Component } from 'react';

// version : 1
// export default function withHoc(WrappedCoponent){
//     return class WithHoC extends Component{
//         render() {
//             return <WrappedCoponent {...this.props} />;
//         }
//     }
// }

// version : 2
// export default function withHoc(WrappedCoponent){
//     return class WithHoC extends Component{
//         static displayName = `withHoC(${WrappedCoponent.name})`;
//         render() {
//             return <WrappedCoponent {...this.props} />;
//         }
//     }
// }

// version : 3
export default function withHoc(WrappedCoponent){
    
    const { displayName, name } = WrappedCoponent;
    const WrappedCoponentName = displayName || name;

    return class WithHoC extends Component{
        static displayName = `withHoC(${WrappedCoponentName})`;
        render() {
            return <WrappedCoponent {...this.props} />;
        }
    }
}