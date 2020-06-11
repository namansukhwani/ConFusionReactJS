import React from 'react';

export const Loading=() => {
    return(
        <div className="mr-auto ml-auto mt-auto mb-auto">
            <span className="fa fa-circle-o-notch fa-pulse fa-3x fa-fw text-primary" />
            <p>Loading</p>
        </div>
    );
}