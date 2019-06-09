//Higher order Component (HOC) - A component that renders another components

import React from 'react';
import ReactDOM from 'react-dom';
import { AST_PropAccess } from 'terser';

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please Login to view the info.</p>
            )}
        </div>
    )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info = "There are the details"/>, document.getElementById('app'));